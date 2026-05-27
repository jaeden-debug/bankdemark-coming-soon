import Link from "next/link";
import { decodeCalculatorState } from "@/app/lib/calculatorShare";
import BrandText from "@/app/components/BrandText";

function titleCaseSlug(slug = "financial-calculator") {
  return slug.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export async function generateMetadata({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const data = resolvedSearchParams?.data || "";
  const decoded = decodeCalculatorState(data);
  const calculator = decoded?.calculator || resolvedParams?.calculator || "financial-calculator";
  const title = `${titleCaseSlug(calculator)} Results`;

  const ogImage = `${getBaseUrl()}/api/og?calculator=${calculator}&data=${encodeURIComponent(data)}`;

  return {
    title: `${title} | BankDeMark`,
    description: "Interactive BankDeMark calculator results. Open the tool, edit the numbers, and rerun your own scenario.",
    openGraph: {
      title,
      description: "Interactive BankDeMark calculator results.",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "Interactive BankDeMark calculator results.",
      images: [ogImage],
    },
  };
}

export default async function SharedCalculatorPage({ params, searchParams }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const data = resolvedSearchParams?.data || "";
  const decoded = decodeCalculatorState(data);

  const calculator = decoded?.calculator || resolvedParams?.calculator || "financial-calculator";
  const inputs = decoded?.inputs || {};
  const results = decoded?.results || {};
  const title = titleCaseSlug(calculator);

  return (
    <main className="shared-results-page">
      <section className="shared-premium-hero">
        <div className="shared-hero-copy">
          <p className="eyebrow">Shared Financial Snapshot</p>
          <h1>{title}</h1>
          <p>
            A live BankDeMark calculator snapshot. Review the shared numbers, open the tool,
            adjust the inputs, and rerun your own scenario.
          </p>

          <div className="shared-trust-row">
            <span>Interactive</span>
            <span>Editable</span>
            <span>Powered by <BrandText /></span>
          </div>
        </div>

        <div className="shared-visual-card">
          <div className="shared-card-chip"><BrandText /></div>
          <div className="shared-card-line"></div>
          <div className="shared-card-number">4242 4242 4242 4242</div>
          <div className="shared-card-bottom">
            <span>FINANCE INTELLIGENCE</span>
            <strong>BDM</strong>
          </div>
        </div>
      </section>

      <section className="shared-results-grid">
        <div className="shared-card">
          <div className="shared-card-header">
            <span>01</span>
            <h2>Inputs</h2>
          </div>

          {Object.keys(inputs).length ? (
            Object.entries(inputs).map(([k, v]) => (
              <div key={k} className="shared-row">
                <span>{k}</span>
                <strong>{v}</strong>
              </div>
            ))
          ) : (
            <p className="shared-empty">No inputs were included in this shared snapshot.</p>
          )}
        </div>

        <div className="shared-card shared-card-gold">
          <div className="shared-card-header">
            <span>02</span>
            <h2>Results</h2>
          </div>

          {Object.keys(results).length ? (
            Object.entries(results).map(([k, v]) => (
              <div key={k} className="shared-row">
                <span>{k}</span>
                <strong>{v}</strong>
              </div>
            ))
          ) : (
            <p className="shared-empty">Open the calculator to generate the full result summary.</p>
          )}
        </div>
      </section>

      <section className="shared-cta-panel">
        <div>
          <h2>Open the calculator with this data</h2>
          <p>Edit the numbers, compare scenarios, and share a new result snapshot.</p>
        </div>

        <Link
          href={`/calculators/${calculator}?data=${encodeURIComponent(data)}`}
          className="shared-open-tool"
        >
          Open Interactive Calculator →
        </Link>
      </section>
    </main>
  );
}
