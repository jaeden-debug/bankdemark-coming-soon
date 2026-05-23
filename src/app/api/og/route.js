import { ImageResponse } from "next/og";
import { getSupabaseAdmin } from "@/app/lib/supabaseAdmin";

export const runtime = "edge";

function titleCaseSlug(slug = "financial-calculator") {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const id = searchParams.get("id");

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  const { data } = await supabase
    .from("calculator_shares")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return new Response("Not found", { status: 404 });
  }

  const results = Object.entries(data.results || {}).slice(0, 3);

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          background:
            "radial-gradient(circle at 78% 18%, rgba(214,179,106,.28), transparent 28%), linear-gradient(135deg,#06110f,#020504)",
          color: "#f5f2ea",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 44, fontWeight: 900 }}>
            Bank<span style={{ color: "#d6b36a" }}>DeMark</span>
          </div>

          <div
            style={{
              display: "flex",
              color: "#d6b36a",
              fontSize: 22,
              letterSpacing: 5,
            }}
          >
            SHARED RESULTS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "65%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 60,
                fontWeight: 900,
                lineHeight: 1.05,
              }}
            >
              {titleCaseSlug(data.calculator)}
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 28,
                color: "#c9c1ad",
              }}
            >
              Interactive financial calculator snapshot.
            </div>

            <div
              style={{
                display: "flex",
                gap: 20,
                marginTop: 42,
              }}
            >
              {results.map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 240,
                    padding: 24,
                    borderRadius: 24,
                    background: "rgba(255,255,255,.06)",
                    border: "1px solid rgba(214,179,106,.3)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 18,
                      color: "#c9c1ad",
                    }}
                  >
                    {k}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      marginTop: 12,
                      fontSize: 32,
                      color: "#d6b36a",
                      fontWeight: 900,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 280,
              height: 280,
              borderRadius: 36,
              background:
                "linear-gradient(135deg,#0d1714,#18231d)",
              border: "2px solid rgba(214,179,106,.35)",
              boxShadow: "0 30px 90px rgba(214,179,106,.15)",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 900,
              color: "#d6b36a",
            }}
          >
            BDM
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#c9c1ad",
          }}
        >
          <span>Open • Edit • Recalculate • Share</span>
          <span style={{ color: "#d6b36a" }}>
            bankdemark.com
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
