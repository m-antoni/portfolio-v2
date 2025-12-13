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
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `From Portfolio Website: ${subject}`, // Added subject here for clarity
      text: `From: ${email}\nSubject: ${subject}\n\nMessage:\n${body}`,

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
                          <td style="padding: 8px 0; width: 100px;"><strong>Sender Email:</strong></td>
                          <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></td>
                      </tr>
                      <tr>
                          <td style="padding: 8px 0;"><strong>Subject:</strong></td>
                          <td style="padding: 8px 0;">${subject}</td>
                      </tr>
                  </table>
  
                  <h4 style="margin-top: 0; border-bottom: 1px solid #dee2e6; padding-bottom: 8px; color: #343a40;">Message Body:</h4>
                  <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${body}</p>
              </div>
  
              <div style="background-color: #f1f1f1; color: #6c757d; padding: 10px; text-align: center; font-size: 12px;">
                  Automated notification via NodeMailer.
              </div>
          </div>
      `,
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
