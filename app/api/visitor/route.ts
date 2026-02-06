/**
 * API Route: /api/visitor
 *
 * Purpose:
 * This route tracks and logs unique daily visitor geolocation data. Instead of
 * creating a new entry for every page refresh, it maintains a single record
 * per IP address per calendar day.
 *
 * Key Features & Logic:
 * 1.  Real-time Geolocation: Fetches data via IPINFO API
 * 2.  Daily Upsert Logic: Uses MongoDB `findOneAndUpdate` with `upsert: true`.
 * It searches for an existing record matching both the visitor's [IP] and
 * the [dateString] (YYYY-MM-DD).
 * 3.  Visit Counter: Automatically increments `visit_count` for every repeat
 * visit by the same user within the same day.
 * 5. Utilizes $setOnInsert for immutable fields (createdAt)
 * and $set for mutable fields (hostname, location data) to ensure
 * data accuracy over time.
 *
 * Technical Notes:
 * - Tracking Method: Identifies unique daily sessions via `dateString`.
 * - Persistence: Connects to MongoDB via a dedicated connection utility.
 */

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Visitor from "@/app/lib/models/Visitor";

export async function POST(req: NextRequest) {
  // Get the visitor's real IP from Vercel's headers
  const forwarded = req.headers.get("x-forwarded-for");
  let visitorIp = forwarded ? forwarded.split(",")[0] : "127.0.0.1";

  // ------------------------------------------------
  // DEVELOPMENT MODE: Get the local machine IP address
  // ------------------------------------------------
  if (process.env.NODE_ENV === "development") {
    const urlIPify = `https://api.ipify.org?format=json`;
    const urlIPifyResponse = await fetch(urlIPify);
    const json = await urlIPifyResponse.json();
    visitorIp = json.ip;
  }

  try {
    // -----------------------------
    //  IPINFO API or IPFY in Dev mode
    //  Get the visitors IP address, country, code
    // -----------------------------
    const API_KEY = process.env.IPINFO_KEY;
    const url = `https://api.ipinfo.io/lite/${visitorIp}?token=${API_KEY}`;

    const response = await fetch(url);
    const ipData = await response.json();
    console.log("IP API", ipData);
    // ------------------------------------------------
    // FALLBACK: If API fails, ensure ipData has enough structure
    // ------------------------------------------------
    if (!response.ok || ipData.error) {
      console.warn("Failed to get IP API Error.", ipData.error);
    }

    // -----------------------------
    //  PREPARE MONGODB SAVE
    // -----------------------------
    await dbConnect();

    // -----------------------------
    //  DEFINE THE START AND END OF "TODAY"
    //  Create a simple date string: "2026-02-03"
    // -----------------------------
    const today = new Date().toISOString().split("T")[0];

    const updatedVisitor = await Visitor.findOneAndUpdate(
      {
        ip: ipData.ip || visitorIp,
        // This is key: it looks for an entry for THIS IP created TODAY
        dateString: today,
      },
      {
        $inc: { visit_count: 1 }, // Increments if found, starts at 1 if new
        $set: {
          asn: ipData.asn,
          hostname: ipData.as_domain,
          continent: ipData.continent,
          country: ipData.country,
          country_code: ipData.country_code,
          continent_code: ipData.continent_code,
          updatedAt: new Date(),
        },
        $setOnInsert: {
          dateString: today,
        },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    // -----------------------------
    //  RETURN RESPONSE
    // -----------------------------
    return NextResponse.json(
      {
        success: true,
        // visitor_id: updatedVisitor._id.toString(),
        visitor_ip_address: updatedVisitor.ip,
        visit_hostname: updatedVisitor.hostname,
        visitor_country: updatedVisitor.country,
        visitor_continent: updatedVisitor.continent,
        visit_count: updatedVisitor.visit_count,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[VISITOR DETAILS ERROR]:", error);
    return NextResponse.json(
      { message: "Unexpected server error." },
      { status: 500 }
    );
  }
}
