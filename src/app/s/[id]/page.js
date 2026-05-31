import Link from "next/link";
import { notFound } from "next/navigation";
import { getSupabaseAdmin } from "@/app/lib/supabaseAdmin";
import { getSiteUrl } from "@/app/lib/siteUrl";
import NewsletterForm from "@/app/components/NewsletterForm";
import SEOLinkMap from "@/app/components/SEOLinkMap";

function titleCaseSlug(slug = "") {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const siteUrl = getSiteUrl();

  // Fetch the row so we can write a specific description
  let calculatorName = "Financial Calculator";
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from("calculator_shares")
      .select("calculator")
      .eq("id", id)
      .single();
    if (data?.calculator) calculatorName = titleCaseSlug(data.calculator);
  } catch {}

  const title = `${calculatorName} Results | BankDeMark`;
  const description = `View shared ${calculatorName} results from BankDeMark. Review the numbers, try the calculator, and launch Command for a personalized financial plan.`;
  const ogImageUrl = `${siteUrl}/api/og?id=${encodeURIComponent(id)}`;
  const pageUrl = `${siteUrl}/s/${id}`;

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "BankDeMark",
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: `${calculatorName} Results` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
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
  const calculatorLabel = titleCaseSlug(calculator);
  const inputEntries = Object.entries(data.inputs || {});
  const resultEntries = Object.entries(data.results || {});
  const seoPath = `/calculators/${calculator}`;

  return (
    <>
      <div className="shared-results-page">

        {/* ── Hero ── */}
        <div className="shared-hero">
          <p className="eyebrow">Shared BankDeMark Result</p>
          <h1>{calculatorLabel} Results</h1>
          <p className="shared-hero-sub">
            A live BankDeMark calculator snapshot. Review the numbers below,
            open the tool to adjust inputs, and rerun your own scenario.
          </p>
          <div className="shared-hero-chips">
            <span>Interactive</span>
            <span>Editable</span>
            <span>Powered by BankDeMark</span>
          </div>
        </div>

        {/* ── Results + Inputs grid ── */}
        <div className="shared-results-grid">

          {/* Results */}
          <div className="shared-card shared-card-gold">
            <div className="shared-card-header">
              <span className="shared-card-num">01</span>
              <h2>Results</h2>
            </div>
            {resultEntries.length ? (
              resultEntries.map(([k, v]) => (
                <div key={k} className="shared-row">
                  <span>{k}</span>
                  <strong>{String(v)}</strong>
                </div>
              ))
            ) : (
              <p className="shared-empty">No results were saved in this snapshot.</p>
            )}
          </div>

          {/* Inputs */}
          <div className="shared-card">
            <div className="shared-card-header">
              <span className="shared-card-num">02</span>
              <h2>Inputs Used</h2>
            </div>
            {inputEntries.length ? (
              inputEntries.map(([k, v]) => (
                <div key={k} className="shared-row">
                  <span>{k}</span>
                  <strong>{String(v)}</strong>
                </div>
              ))
            ) : (
              <p className="shared-empty">No inputs were included in this snapshot.</p>
            )}
          </div>

        </div>

        {/* ── Try this calculator CTA ── */}
        <div className="shared-try-cta">
          <div className="shared-try-copy">
            <h2>Run your own numbers</h2>
            <p>
              Open the {calculatorLabel}, adjust the inputs for your situation,
              and compare scenarios side by side.
            </p>
          </div>
          <Link href={`/calculators/${calculator}`} className="shared-open-tool">
            Open {calculatorLabel} →
          </Link>
        </div>

        {/* ── Command promotion ── */}
        <div className="shared-command-cta">
          <div className="shared-command-inner">
            <p className="eyebrow">BankDeMark Command</p>
            <h2>Turn this result into a full financial plan.</h2>
            <p>
              Command by BankDeMark connects your calculators, tracks net worth,
              models scenarios, and gives you a complete financial command centre —
              in one place. Free to start.
            </p>
            <div className="shared-command-btns">
              <a
                href="https://command.bankdemark.com/command"
                className="shared-command-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Command →
              </a>
              <Link href="/calculators" className="shared-command-secondary">
                Explore All Calculators
              </Link>
            </div>
          </div>
        </div>

        {/* ── Newsletter ── */}
        <div className="shared-newsletter-wrap">
          <div className="about-intro-card" style={{ maxWidth: "780px", margin: "0 auto" }}>
            <span className="eyebrow">BankDeMark Intelligence</span>
            <h3>Join the finance intelligence newsletter.</h3>
            <p>
              New calculators, finance guides, investing frameworks, and
              AI-powered tools — delivered as they launch.
            </p>
            <NewsletterForm />
          </div>
        </div>

      </div>

      {/* ── SEO links ── */}
      <SEOLinkMap currentPath={seoPath} />
    </>
  );
}
