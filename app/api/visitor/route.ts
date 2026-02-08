/**
 * API Route: /api/visitor
 *
 * Purpose:
 * This route tracks and logs unique daily visitor geolocation data. Instead of
 * creating a new entry for every page refresh, it maintains a single record
 * per IP address per calendar day.
 *
 * Key Features & Logic:
 * 1.  Real-time Geolocation: Fetches data via IP API
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
  // DEVELOPMENT MODE: Get the local machine IP address using ipify
  // ------------------------------------------------
  if (process.env.NODE_ENV === "development") {
    const urlIPify = `https://api.ipify.org?format=json`;
    const urlIPifyResponse = await fetch(urlIPify);
    const json = await urlIPifyResponse.json();
    visitorIp = json.ip;
  }

  try {
    // -----------------------------
    //  Get the visitors IP address, country, code
    // -----------------------------
    const url = `https://free.freeipapi.com/api/json/${visitorIp}`;

    const response = await fetch(url);
    const ipData = await response.json();
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
        dateString: today,
      },
      {
        $inc: { visit_count: 1 }, // Increments if IP is found, starts at 1 if new
        $set: {
          asn: ipData.asn,
          asn_organization: ipData.asnOrganization,
          continent: ipData.continent,
          country: ipData.countryName,
          country_code: ipData.countryCode,
          continent_code: ipData.continent_code,
          capital: ipData.capital,
          city_name: ipData.cityName,
          region_name: ipData.regionName,
          zipcode: ipData.zipcode,
          is_proxy: ipData.isProxy,
          latitude: ipData.latitude,
          longitude: ipData.longitude,
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
        ip_address: updatedVisitor.ip,
        asn_organization: updatedVisitor.asn_organization,
        country: updatedVisitor.country,
        region: updatedVisitor.region_name,
        continent: updatedVisitor.continent,
        city_name: updatedVisitor.city_name,
        zipcode: updatedVisitor.zipcode,
        latitude: updatedVisitor.latitude,
        longitude: updatedVisitor.longitude,
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
