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
 * 6. Send Email Notification using nodemailer
 *
 * Technical Notes:
 * - Tracking Method: Identifies unique daily sessions via `dateString`.
 * - Persistence: Connects to MongoDB via a dedicated connection utility.
 */

import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Visitor from "@/app/lib/models/Visitor";
import nodemailer from "nodemailer";

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
          zipcode: ipData.zipCode,
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
    //  NODE MAILER
    // -----------------------------

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // -----------------------------
    // SEND NOTIFICATION EMAIL
    // -----------------------------
    // IMPORTANT: Use 'await' here to ensure the email sends before the serverless function shuts down.
    await transporter.sendMail({
      from: `"Portfolio Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `[Portfolio] Visitor`,
      text: `Portfolio`,
      html: `
     <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 3px; overflow: hidden;">
          <div style="background-color: #121212; color: white; padding: 15px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px;">Portfolio Website (Visitor)</h2>
          </div>
          <div style="padding: 20px;">
            <p style="border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px;">
              <strong>Date :</strong> ${new Date().toLocaleString("en-US", {
                timeZone: "Asia/Manila",
              })}
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>Website:</strong></td>
                    <td style="padding: 8px 0;">
                    <a href="${
                      process.env.NEXT_PUBLIC_BASE_URL
                    }" style="color: #007BFF; text-decoration: none;">${
        process.env.NEXT_PUBLIC_BASE_URL
      }</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>IP Address:</strong></td>
                    <td style="padding: 8px 0;">${updatedVisitor.ip}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>Hostname:</strong></td>
                    <td style="padding: 8px 0;">${
                      updatedVisitor.asn_organization
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>Country:</strong></td>
                    <td style="padding: 8px 0;">${updatedVisitor.country} | ${
        updatedVisitor.country_code
      }</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 140px;"><strong>Region:</strong></td>
                    <td style="padding: 8px 0;">
                        ${updatedVisitor.region_name}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 140px;"><strong>Capital:</strong></td>
                    <td style="padding: 8px 0;">
                        ${updatedVisitor.capital}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>City:</strong></td>
                    <td style="padding: 8px 0;">${updatedVisitor.city_name}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>Zipcode:</strong></td>
                    <td style="padding: 8px 0;">${updatedVisitor.zipcode}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>Latitude:</strong></td>
                    <td style="padding: 8px 0;">${updatedVisitor.latitude}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>Longitude</strong></td>
                    <td style="padding: 8px 0;">${updatedVisitor.longitude}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; width: 120px;"><strong>Visit Count(s):</strong></td>
                    <td style="padding: 8px 0;">${
                      updatedVisitor.visit_count
                    }</td>
                </tr>
            </table>
          </div>
          <div style="background-color: #f1f1f1; color: #6c757d; padding: 10px; text-align: center; font-size: 12px;">
            Automated notification via NodeMailer.
          </div>
        </div>
        `,
    });

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
