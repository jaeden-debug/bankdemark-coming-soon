import { NextResponse } from "next/server";
import { Resend } from "resend";

function clean(value) {
  return String(value || "").trim();
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing newsletter configuration." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const email = clean(body.email);
    const firstName = clean(body.firstName);

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.contacts.create({
      email,
      firstName,
      unsubscribed: false,
    });

    if (error && !String(error.message || "").toLowerCase().includes("already")) {
      console.error("RESEND_NEWSLETTER_ERROR:", error);
      return NextResponse.json(
        { error: error.message || "Newsletter signup failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("NEWSLETTER_ROUTE_ERROR:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
