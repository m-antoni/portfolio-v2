/**
 * API Route: /api/contact
 *
 * Purpose: This route handles contact form submissions from the frontend.
 *
 * Features:
 * 1. Validates incoming data (email, subject, body) and ensures all fields are provided.
 * 2. Sends an email notification to the designated recipient using Nodemailer.
 *    - The frontend receives a success response immediately after the email is sent.
 * 3. Saves the contact submission to MongoDB in the background (fire-and-forget),
 *    so the database operation does not block the API response.
 * 4. Runs in Node.js runtime to support Nodemailer and MongoDB drivers.
 *
 * Notes:
 * - Fire-and-forget DB saves mean MongoDB errors are logged server-side only;
 *   they do not affect the response sent to the client.
 * - Timestamp in the email is set to 'Asia/Manila' timezone.
 * - All email HTML is styled inline for compatibility with most email clients.
 */

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Contact from "@/app/lib/models/Contact";
import { rateLimit } from "@/app/lib/ratelimit";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, body } = await req.json();

    // -----------------------------
    // VALIDATION
    // -----------------------------
    if (!email || !subject || !body) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // -----------------------------
    // PREVENT SPAMMING
    // -----------------------------
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";

    if (!rateLimit(ip)) {
      return NextResponse.json(
        { message: "Too many requests. try again later." },
        { status: 429 }
      );
    }

    // -----------------------------
    // PREPARE EMAIL
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

    const emailPromise = transporter.sendMail({
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `[Portfolio] New Message: ${subject}`,
      text: `From: ${email}\nSubject: ${subject}\n\n${body}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 3px; overflow: hidden;">
          <div style="background-color: #E25936; color: white; padding: 15px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px;">New Contact Form Submission</h2>
          </div>
          <div style="padding: 20px;">
            <p style="border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px;">
              <strong>Received At:</strong> ${new Date().toLocaleString(
                "en-US",
                { timeZone: "Asia/Manila" }
              )}
            </p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; width: 120px;"><strong>Sender Email:</strong></td>
                <td style="padding: 8px 0;">
                  <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Subject:</strong></td>
                <td style="padding: 8px 0;">${subject}</td>
              </tr>
            </table>
            <h4 style="margin-top: 0; border-bottom: 1px solid #dee2e6; padding-bottom: 8px; color: #343a40;">
              Message Body:
            </h4>
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${body}</p>
          </div>
          <div style="background-color: #f1f1f1; color: #6c757d; padding: 10px; text-align: center; font-size: 12px;">
            Automated notification via NodeMailer.
          </div>
        </div>
      `,
    });

    // -----------------------------
    //  PREPARE MONGODB SAVE
    // -----------------------------
    const dbPromise = (async () => {
      await dbConnect();
      const doc = await Contact.create({ email, subject, body });

      console.log("MONGODB_SAVE_SUCCESS", {
        id: doc._id.toString(),
        email,
        time: new Date().toISOString(),
      });
    })();

    // -----------------------------
    // RUN BOTH IN PARALLEL
    // -----------------------------
    await Promise.all([emailPromise, dbPromise]);

    // -----------------------------
    // RETURN SUCCESS
    // -----------------------------
    return NextResponse.json({
      message: "Message sent successfully!",
      status: 200,
    });
  } catch (error) {
    console.error("[CONTACT API ERROR]:", error);
    return NextResponse.json(
      { message: "Unexpected server error." },
      { status: 500 }
    );
  }
}
