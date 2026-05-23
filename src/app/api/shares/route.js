import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { getSupabaseAdmin } from "@/app/lib/supabaseAdmin";

export async function POST(request) {
  try {
    const body = await request.json();

    const calculator = String(body?.calculator || "").trim();
    const inputs = body?.inputs || {};
    const results = body?.results || {};

    if (!calculator) {
      return NextResponse.json({ error: "Missing calculator." }, { status: 400 });
    }

    const id = nanoid(8);

    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from("calculator_shares").insert({
      id,
      calculator,
      inputs,
      results,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ id, url: `/s/${id}` });
  } catch (error) {
    return NextResponse.json(
      { error: error?.message || "Unable to create share." },
      { status: 500 }
    );
  }
}
