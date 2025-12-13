import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, subject, body } = await req.json();

    if (!email || !subject || !body) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

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
      from: `"Contact Form" <${process.env.SMTP_USER}>`, // must be your Gmail
      to: process.env.CONTACT_RECEIVER,
      replyTo: email, // allows replying to the user
      subject,
      text: `From: ${email}\n\n${body}`,
      html: `<p><strong>From:</strong> ${email}</p><p>${body}</p>`,
    });

    console.log("Email info:", info);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (err: any) {
    console.error("NodeMailer Error:", err);
    return NextResponse.json(
      { message: err.message || "Failed to send email." },
      { status: 500 }
    );
  }
}
