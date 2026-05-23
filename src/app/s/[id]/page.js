import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupabaseAdmin } from "@/app/lib/supabaseAdmin";

function titleCaseSlug(slug = "") {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  return {
    title: "Shared Calculator Results | BankDeMark",
    description: "Interactive BankDeMark calculator results.",
    openGraph: {
      title: "BankDeMark Calculator Results",
      description: "Interactive BankDeMark calculator results.",
      images: [`/api/og?id=${encodeURIComponent(id)}`],
    },
    twitter: {
      card: "summary_large_image",
      title: "BankDeMark Calculator Results",
      description: "Interactive BankDeMark calculator results.",
      images: [`/api/og?id=${encodeURIComponent(id)}`],
    },
  };
}

export default async function SharedShortPage({ params }) {
  const { id } = await params;

  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("calculator_shares")
    .select("id, calculator, inputs, results, created_at")
    .eq("id", id)
    .single();

  if (error || !data) notFound();

  const calculator = data.calculator;
  const inputEntries = Object.entries(data.inputs || {});
  const resultEntries = Object.entries(data.results || {});

  return (
    <main className="shared-results-page">
      <section className="shared-simple-title">

        <h1>{titleCaseSlug(calculator)}</h1>

        <p>Interactive calculator results shared from BankDeMark.</p>

      </section>

      <section className="shared-top-cta">

      </section>

      <section className="shared-results-grid">
        <div className="shared-card shared-card-gold">
          <div className="shared-card-header">
            <span>↗</span>
            <h2>Results</h2>
          </div>

          {resultEntries.length ? (
            resultEntries.map(([k, v]) => (
              <div key={k} className="shared-row">
                <span>{k}</span>
                <strong>{v}</strong>
              </div>
            ))
          ) : (
            <p className="shared-empty">No results were included yet.</p>
          )}
        </div>

        <div className="shared-card">
          <div className="shared-card-header">
            <span>≡</span>
            <h2>Inputs</h2>
          </div>

          {inputEntries.length ? (
            inputEntries.map(([k, v]) => (
              <div key={k} className="shared-row">
                <span>{k}</span>
                <strong>{v}</strong>
              </div>
            ))
          ) : (
            <p className="shared-empty">No inputs were included yet.</p>
          )}
        </div>
      </section>
      <section className="shared-cta-panel">
        <div>
          <h2>Want to run your own numbers?</h2>
          <p>Open the calculator, edit the inputs, and compare your own scenario.</p>
        </div>

        <Link href={`/calculators/${calculator}`} className="shared-open-tool">
          Open {titleCaseSlug(calculator).replace(" / ", " ")}
        </Link>
      </section>
    </main>
  );
}
