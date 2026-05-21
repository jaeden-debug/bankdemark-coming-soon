import Link from "next/link";
import { pillars } from "../data/pillars";

export const metadata = {
  title: "Finance Pillars",
  description: "Explore BankDeMark six core finance pillars: personal finance, investing, business credit, banking, debt management, and financial freedom.",
};

export default function PillarsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Core Finance Topics</p>
        <h1>Six pillars. Complete financial clarity.</h1>
        <p>Every major area of personal and business finance covered with depth, real data, and zero fluff. Start with the pillar most relevant to where you are right now.</p>
      </div>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <Link key={p.slug} href={`/pillars/${p.slug}`} className="pillar-card">
              <span className="pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <span className="sub">{p.subtitle}</span>
              <p>{p.description}</p>
              <span className="pillar-link">Read full guide</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
