import { createClient } from "@supabase/supabase-js";

export function getSupabaseAdmin() {
  const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").trim();
  const key = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();

  if (!url || !key) {
    throw new Error(
      "Missing Supabase server env vars (NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  if (key.length < 100) {
    console.warn("[supabaseAdmin] SUPABASE_SERVICE_ROLE_KEY looks suspiciously short — check for leading/trailing spaces or truncation.");
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
