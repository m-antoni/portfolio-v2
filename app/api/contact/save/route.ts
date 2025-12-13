import { NextRequest } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Contact from "@/app/lib/models/Contact";

// ** This route is a background function
export const runtime = "nodejs";

// ** tells Vercel this is a background function
export const background = true;

export async function POST(req: NextRequest) {
  try {
    const { email, subject, body } = await req.json();

    await dbConnect();

    const newContact = await Contact.create({ email, subject, body });
    console.log("MONGODB_SAVE_SUCCESS", {
      id: newContact._id.toString(),
      email,
      subject,
      time: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[DB BACKGROUND ERROR]:", error);
  }

  // Background functions can return empty response
  return new Response(null, { status: 200 });
}
