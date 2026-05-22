import { NextResponse } from "next/server";
import { Resend } from "resend";

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Missing email service configuration." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    const firstName = clean(body.firstName);
    const lastName = clean(body.lastName);
    const email = clean(body.email);
    const subject = clean(body.subject);
    const message = clean(body.message);

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`.trim();

    const { error } = await resend.emails.send({
      from: "BankDeMark Contact <onboarding@resend.dev>",
      to: ["jaeden@stillawakemedia.com"],
      replyTo: email,
      subject: `BankDeMark Contact: ${subject || "New message"}`,
      text: `
New BankDeMark contact message

Name: ${fullName}
Email: ${email}
Subject: ${subject || "General Inquiry"}

Message:
${message}
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
          <h2>New BankDeMark Contact Message</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject || "General Inquiry")}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND_CONTACT_ERROR:", error);
      return NextResponse.json(
        { error: error.message || "Email failed to send." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_ROUTE_ERROR:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
