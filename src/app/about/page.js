import Link from "next/link";
import Script from "next/script";
import CTABanner from "../components/CTABanner";
import { pillars } from "../data/pillars";

export const metadata = {
  title: "About BankDeMark | Modern Finance, Business & AI Intelligence",
  description:
    "BankDeMark is a modern finance intelligence platform built around six core pillars: personal finance, business credit, investing, banking, debt management, and financial freedom.",
  alternates: {
    canonical: "/about",
  },
};

const faq = [
  {
    q: "What is BankDeMark?",
    a: "BankDeMark is a modern finance intelligence platform built to help readers make smarter decisions around money, credit, investing, banking, debt, business systems, and financial freedom.",
  },
  {
    q: "What does BankDeMark cover?",
    a: "BankDeMark is organized around six core pillars: personal finance, business credit, investing, banking, debt management, and financial freedom.",
  },
  {
    q: "Is BankDeMark financial advice?",
    a: "No. BankDeMark publishes educational content only. It is not personalized financial, investment, legal, tax, or credit advice.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About BankDeMark",
    url: "https://bankdemark.com/about",
    description:
      "BankDeMark is a modern finance, business, and AI intelligence platform built around personal finance, business credit, investing, banking, debt management, and financial freedom.",
    publisher: {
      "@type": "Organization",
      name: "BankDeMark",
      url: "https://bankdemark.com",
      sameAs: ["https://stillawakemedia.com", "https://zylx.ai"],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <Script
        id="about-bankdemark-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Script
        id="about-bankdemark-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="page-hero">
        <p className="eyebrow">About BankDeMark</p>
        <h1>Modern finance intelligence for serious builders.</h1>
        <p>
          BankDeMark exists to simplify money, business, credit, investing,
          banking, debt, and financial freedom into one clear system for modern
          decision makers.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="about-grid">
          <div>
            <p className="eyebrow">The Mission</p>
            <h2>Financial clarity should be a system, not a guessing game.</h2>

            <div className="about-values">
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <div>
                  <h4>Clarity Over Complexity</h4>
                  <p>
                    BankDeMark translates personal finance, business finance,
                    investing, banking, and debt strategy into practical
                    frameworks people can actually use.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <span className="value-icon">🏛️</span>
                <div>
                  <h4>Built Around Six Pillars</h4>
                  <p>
                    Every guide connects back to one of six core systems:
                    personal finance, business credit, investing, banking, debt
                    management, and financial freedom.
                  </p>
                </div>
              </div>

              <div className="value-item">
                <span className="value-icon">⚙️</span>
                <div>
                  <h4>Business & Automation Aware</h4>
                  <p>
                    Modern wealth is connected to business systems, AI tools,
                    automation, software, and scalable digital operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card">
            <h3>Why BankDeMark Exists</h3>
            <p>
              Most finance content is either too shallow, too biased, too
              technical, or too focused on selling products. BankDeMark is being
              built to offer a cleaner alternative.
            </p>
            <p>
              The platform focuses on financial education, wealth building,
              investing, business credit, banking optimization, debt payoff
              strategies, and long-term financial independence.
            </p>
            <p>
              BankDeMark also connects with the wider builder ecosystem:
              <a href="https://stillawakemedia.com" target="_blank" rel="noopener noreferrer">
                {" "}StillAwake Media{" "}
              </a>
              for websites, software, SaaS, and creative systems, and
              <a href="https://zylx.ai" target="_blank" rel="noopener noreferrer">
                {" "}ZYLX.ai{" "}
              </a>
              for AI agents, dashboards, business automation, and operating
              systems.
            </p>
            <p style={{ color: "var(--gold)", fontWeight: 700 }}>
              The future belongs to people who understand money, business, and
              automation together.
            </p>

            <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <Link href="/" className="btn-ghost about-link-btn">BankDeMark finance intelligence homepage</Link>
              <Link href="/contact" className="btn-primary about-link-btn">Join the BankDeMark finance newsletter</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">The Six Pillar System</span>
          <h2>Complete financial clarity, organized by topic.</h2>
          <p>
            BankDeMark is structured for topical authority, internal linking,
            and real user value across the major areas of modern finance.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p) => (
            <Link key={p.slug} href={`/pillars/${p.slug}`} className="pillar-card">
              <span className="pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <span className="sub">{p.subtitle}</span>
              <p>{p.description}</p>
              <span className="pillar-link">Read full guide →</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: "42px", textAlign: "center" }}>
          <Link href="/pillars" className="btn-primary about-link-btn">Explore all six finance pillar guides</Link>
        </div>
      </section>

      <section className="section">
        <div className="about-card">
          <p className="eyebrow">Authority Map</p>
          <h3>The topics BankDeMark is built to own.</h3>
          <p>
            BankDeMark is designed to build authority across high-value finance,
            business, and automation topics: personal finance education,
            investing education, business credit strategies, debt payoff
            strategies, financial planning, banking optimization, wealth
            building strategies, AI tools, business automation, and online
            business systems.
          </p>
          <p>
            For founders who need the execution layer behind those systems,
            <a href="https://stillawakemedia.com" target="_blank" rel="noopener noreferrer">
              {" "}StillAwake Media{" "}
            </a>
            builds websites, software, SaaS platforms, creative systems, and
            modern digital infrastructure.
          </p>

          <div style={{ marginTop: "26px", display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/" className="btn-ghost about-link-btn">BankDeMark finance intelligence homepage</Link>
            <Link href="/pillars" className="btn-ghost about-link-btn">Six core finance pillars</Link>
            <Link href="/contact" className="btn-primary about-link-btn">Join the BankDeMark finance newsletter</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
        </div>

        <div className="pillars-grid">
          {faq.map((item) => (
            <div key={item.q} className="pillar-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="pillars-grid">
          <Link href="/" className="pillar-card">
            <span className="pillar-icon">⌂</span>
            <h3>Home</h3>
            <p>Return to the BankDeMark homepage and explore the main modern finance intelligence hub.</p>
            <span className="pillar-link">Visit the finance intelligence homepage →</span>
          </Link>

          <Link href="/pillars" className="pillar-card">
            <span className="pillar-icon">🧭</span>
            <h3>All Pillars</h3>
            <p>Browse the full six-pillar financial education system for personal finance, business credit, investing, banking, debt management, and financial freedom.</p>
            <span className="pillar-link">Explore all six finance pillars →</span>
          </Link>

          <Link href="/contact" className="pillar-card">
            <span className="pillar-icon">✉️</span>
            <h3>Newsletter</h3>
            <p>Join the BankDeMark finance newsletter for new guides, financial systems, business strategy, AI automation insights, and wealth-building frameworks.</p>
            <span className="pillar-link">Join the finance newsletter →</span>
          </Link>
        </div>
      </section>

      <CTABanner
        title="Start with the system. Build from there."
        sub="Explore BankDeMark’s six core finance pillars and follow the growing intelligence network across finance, business, AI automation, and modern wealth strategy."
        btnText="Explore Finance Pillars"
        btnHref="/pillars"
      />
    </>
  );
}
