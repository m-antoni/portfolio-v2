/**
 * API Route: /api/visitor
 *
 * Purpose:
 * This route tracks and logs unique daily visitor geolocation data. Instead of
 * creating a new entry for every page refresh, it maintains a single record
 * per IP address per calendar day.
 *
 * Key Features & Logic:
 * 1.  Real-time Geolocation: Fetches data via ipstack API (IP, City, Country,
 * Coordinates, and Hostname).
 * 2.  Daily Upsert Logic: Uses MongoDB `findOneAndUpdate` with `upsert: true`.
 * It searches for an existing record matching both the visitor's [IP] and
 * the [dateString] (YYYY-MM-DD).
 * 3.  Visit Counter: Automatically increments `visit_count` for every repeat
 * visit by the same user within the same day.
 * 4.  Data Flattening: Extracts nested location properties (like 'country_flag')
 * to maintain a flat, performant database schema.
 * 5.  State Management: Utilizes $setOnInsert for immutable fields (createdAt)
 * and $set for mutable fields (hostname, location data) to ensure
 * data accuracy over time.
 *
 * Technical Notes:
 * - Tracking Method: Identifies unique daily sessions via `dateString`.
 * - Persistence: Connects to MongoDB via a dedicated connection utility.
 * - Reliability: Environment-variable based (IPSTACK_KEY) with robust error
 * handling for API failures or database connection timeouts.
 */

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Visitor from "@/app/lib/models/Visitor";

export async function POST(req: NextRequest) {
  const API_KEY = process.env.IPSTACK_KEY;
  const url = `https://api.ipstack.com/check?access_key=${API_KEY}&hostname=1`;

  try {
    // -----------------------------
    //  IPSTACK API
    //  Get the visitors IP address, country, city, and more.
    // -----------------------------
    const response = await fetch(url);
    const ipData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch from ipstack" },
        { status: response.status }
      );
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
        ip: ipData.ip,
        // This is key: it looks for an entry for THIS IP created TODAY
        dateString: today,
      },
      {
        $inc: { visit_count: 1 }, // Increments if found, starts at 1 if new
        $set: {
          hostname: ipData.hostname,
          continent_code: ipData.continent_code,
          continent_name: ipData.continent_name,
          country_code: ipData.country_code,
          country_name: ipData.country_name,
          region_code: ipData.region_code,
          region_name: ipData.region_name,
          city: ipData.city,
          latitude: ipData.latitude,
          longitude: ipData.longitude,
          country_flag: ipData.location?.country_flag,
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

    console.log("MONGODB_SAVE_SUCCESS", {
      visitor_logged: updatedVisitor._id.toString(),
      time: new Date().toISOString(),
    });

    // -----------------------------
    //  RETURN RESPONSE
    // -----------------------------
    return NextResponse.json(
      {
        success: true,
        id: updatedVisitor._id.toString(),
        visitor_ip_address: updatedVisitor.ip,
        visitor_country: updatedVisitor.country_name,
        visitor_city: updatedVisitor.city,
        visit_count: updatedVisitor.visit_count,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[VISITOR API ERROR]:", error);
    return NextResponse.json(
      { message: "Unexpected server error." },
      { status: 500 }
    );
  }
}
