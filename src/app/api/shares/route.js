import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { getSupabaseAdmin } from "@/app/lib/supabaseAdmin";
import { createAbsoluteUrl } from "@/app/lib/siteUrl";

export async function POST(request) {
  try {
    const body = await request.json();

    const calculator = String(body?.calculator || "").trim();
    const inputs =
      body?.inputs && typeof body.inputs === "object" ? body.inputs : {};
    const results =
      body?.results && typeof body.results === "object" ? body.results : {};

    if (!calculator) {
      return NextResponse.json(
        { error: "Missing calculator name." },
        { status: 400 }
      );
    }

    let supabase;
    try {
      supabase = getSupabaseAdmin();
    } catch (envErr) {
      console.error("[/api/shares] Supabase init failed:", envErr.message);
      return NextResponse.json(
        { error: "Share service unavailable. Check server configuration." },
        { status: 503 }
      );
    }

    const id = nanoid(8);

    const { error } = await supabase.from("calculator_shares").insert({
      id,
      calculator,
      inputs,
      results,
    });

    if (error) {
      console.error("[/api/shares] Supabase insert error:", error.message);
      return NextResponse.json(
        { error: "Could not save share. Please try again." },
        { status: 500 }
      );
    }

    const path = `/s/${id}`;
    const absoluteUrl = createAbsoluteUrl(path);

    return NextResponse.json({ id, url: path, absoluteUrl });
  } catch (err) {
    console.error("[/api/shares] Unexpected error:", err?.message);
    return NextResponse.json(
      { error: err?.message || "Unable to create share." },
      { status: 500 }
    );
  }
}
