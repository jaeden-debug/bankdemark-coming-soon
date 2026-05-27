import Link from "next/link";
import { pillars } from "../data/pillars";
import BrandText from "../components/BrandText";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Finance Pillars",
  description:
    "Explore BankDeMark's six core finance pillars: personal finance, investing, business credit, banking, debt management, and financial freedom.",
  alternates: { canonical: "/pillars" },
};

export default function PillarsPage() {
  return (
    <>
      <div className="page-hero hub-hero">
        <p className="eyebrow"><BrandText dotcom /></p>
        <h1>Financial Systems That Build Wealth</h1>
        <p>
          Explore the core frameworks behind smarter investing, credit,
          banking, debt, cash flow, and long-term financial freedom.
        </p>
      </div>

      <section className="hub-section pillars-peek-section">
        <div className="hub-grid pillars-grid">
          {pillars.map((p) => (
            <Link key={p.slug} href={`/pillars/${p.slug}`} className="hub-card pillar-card">
              <span>Finance Pillar</span>
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <strong>Open guide →</strong>
            </Link>
          ))}
        </div>
      </section>
          <SEOLinkMap currentPath="/pillars" />
    </>
  );
}
