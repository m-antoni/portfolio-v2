// app/api/contact/route.ts

import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect"; // Import the MongoDB connection utility
import Contact, { IContact } from "@/app/lib/models/Contact"; // Import the Mongoose Contact model

export async function POST(req: NextRequest) {
  try {
    const { email, subject, body } = await req.json();

    if (!email || !subject || !body) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // -------------------------------------------------------------------
    // 2. DATABASE PERSISTENCE (SAVE TO MONGODB)
    // -------------------------------------------------------------------

    try {
      await dbConnect(); // Connect to MongoDB
      const formData = { email, subject, body };

      const newContact: IContact = await Contact.create(formData);
      console.log(`[DB] Contact saved to DB with ID: ${newContact._id}`);
    } catch (dbError: any) {
      // Log the full error to the console for debugging
      console.error("[DB ERROR]:", dbError);

      // Handle Mongoose Validation Errors
      if (dbError.name === "ValidationError") {
        const messages = Object.values(dbError.errors).map(
          (err: any) => err.message
        );
        return NextResponse.json(
          {
            success: false,
            error: `Validation Failed: ${messages.join(", ")}`,
          },
          { status: 422 }
        );
      }

      // **CRITICAL DEBUGGING CHANGE:** Return the specific error message here.
      return NextResponse.json(
        {
          message:
            "Failed to save contact data to the database. Check console for MONGODB details.",
        },
        { status: 500 }
      );
    }

    // Log success after the DB save, before email
    console.log("[DB] Database save successful. Proceeding to email.");

    // -------------------------------------------------------------------
    // 3. EMAIL NOTIFICATION
    // -------------------------------------------------------------------

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: `"Contact Form" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER,
        replyTo: email,
        subject: `[Portfolio] New Message: ${subject}`,
        text: `From: ${email}\nSubject: ${subject}\n\nMessage:\n${body}`,
        // ... (HTML body omitted for brevity, it remains the same)
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 3px; overflow: hidden;">
                <div style="background-color: #E25936; color: white; padding: 15px; text-align: center;"><h2 style="margin: 0; font-size: 18px;">New Contact Form Submission</h2></div>
                <div style="padding: 20px;">
                    <p style="border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 15px;"><strong>Received At:</strong> ${new Date().toLocaleString(
                      "en-US",
                      { timeZone: "Asia/Manila" }
                    )}</p>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr><td style="padding: 8px 0; width: 100px;"><strong>Sender Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></td></tr>
                        <tr><td style="padding: 8px 0;"><strong>Subject:</strong></td><td style="padding: 8px 0;">${subject}</td></tr>
                    </table>
                    <h4 style="margin-top: 0; border-bottom: 1px solid #dee2e6; padding-bottom: 8px; color: #343a40;">Message Body:</h4>
                    <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${body}</p>
                </div>
                <div style="background-color: #f1f1f1; color: #6c757d; padding: 10px; text-align: center; font-size: 12px;">Automated notification via NodeMailer.</div>
            </div>
        `,
      });

      console.log(
        `[EMAIL] Email sent successfully. Response: ${info.response}`
      );
    } catch (emailError: any) {
      console.error("[EMAIL ERROR]:", emailError);
      return NextResponse.json(
        {
          message:
            "Data saved but email notification failed to send. Check console for SMTP error.",
        },
        { status: 500 }
      );
    }

    // Final success response
    return NextResponse.json({
      message: "Contact received and email notification sent successfully!",
    });
  } catch (err: any) {
    // This catches JSON parsing errors or errors outside the main logic blocks
    console.error("[GENERAL/PARSE ERROR]:", err);
    return NextResponse.json(
      {
        message:
          "A catastrophic server error occurred. Check console for parsing or top-level error.",
      },
      { status: 500 }
    );
  }
}
