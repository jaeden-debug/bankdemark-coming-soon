import Link from "next/link";
import Script from "next/script";
import BrandText from "../components/BrandText";
import SEOLinkMap from "../components/SEOLinkMap";
import { pillars } from "../data/pillars";

export const metadata = {
  title: "About BankDeMark | Modern Finance Intelligence Platform",
  description:
    "BankDeMark is a modern finance intelligence platform built around calculators, money guides, investing systems, business credit, banking, debt payoff, and financial freedom.",
  alternates: { canonical: "/about" },
};

const faq = [
  {
    q: "What is BankDeMark?",
    a: "BankDeMark is a modern finance intelligence platform built to help readers make smarter decisions around money, credit, investing, banking, debt, business systems, and financial freedom.",
  },
  {
    q: "What does BankDeMark cover?",
    a: "BankDeMark covers personal finance, investing, business credit, banking, debt management, calculators, financial diagnostics, and financial freedom planning.",
  },
  {
    q: "Is BankDeMark financial advice?",
    a: "No. BankDeMark publishes educational content only. It is not personalized financial, investment, legal, tax, or credit advice.",
  },
];

const platformLinks = [
  {
    href: "/calculators",
    tag: "Tools",
    title: "Financial calculators",
    desc: "Run projections for investing, debt payoff, retirement, mortgages, net worth, budgeting, TFSA, RRSP, and FIRE.",
  },
  {
    href: "/money-health-score",
    tag: "Diagnostic",
    title: "Money Health Score",
    desc: "Analyze cash flow, debt load, savings strength, investing progress, housing pressure, and financial stability.",
  },
  {
    href: "/financial-freedom-roadmap",
    tag: "Plan",
    title: "Freedom Roadmap",
    desc: "Turn your current money situation into a practical 30-day, 90-day, and 12-month financial plan.",
  },
];

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About BankDeMark",
    url: "https://bankdemark.com/about",
    description:
      "BankDeMark is a modern finance intelligence platform built around calculators, guides, diagnostics, and financial systems.",
    publisher: {
      "@type": "Organization",
      name: "BankDeMark",
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

      <section className="premium-hero about-hero-full">
        <div className="premium-hero-inner">
          <p className="premium-kicker"><BrandText dotcom /></p>

          <h1>Modern finance intelligence for serious builders.</h1>

          <p className="premium-sub">
            BankDeMark simplifies money, credit, investing, banking, debt, and
            financial freedom into one clear system for modern decision makers.
          </p>

          <div className="premium-actions">
            <Link href="/calculators" className="premium-btn primary">
              Explore Wealth Tools
            </Link>
            <Link href="/blog" className="premium-btn secondary">
              Read Financial Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="about-overhaul">
        <div className="about-intro-card">
          <span className="eyebrow">The Mission</span>
          <h2>Turn scattered money advice into a connected financial system.</h2>
          <p>
            BankDeMark is built for people who want practical financial clarity:
            calculators, guides, diagnostics, and frameworks that connect instead
            of living as disconnected articles.
          </p>
        </div>

        <div className="about-principles">
          <div>
            <span>01</span>
            <h3>Clarity over noise</h3>
            <p>Simple systems for budgeting, credit, debt, investing, banking, and wealth building.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Tools before theory</h3>
            <p>Interactive calculators and diagnostics help users act, not just read.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Built for topical authority</h3>
            <p>Every major page connects into a crawlable finance ecosystem for users and search engines.</p>
          </div>
        </div>
      </section>

      <section className="about-platform-section">
        <div className="section-header">
          <span className="eyebrow">Platform System</span>
          <h2>Start with the path that matches your next decision.</h2>
          <p>
            BankDeMark connects calculators, finance education, diagnostics,
            roadmap tools, and pillar guides into one modern money platform.
          </p>
        </div>

        <div className="about-platform-grid">
          {platformLinks.map((item) => (
            <Link href={item.href} className="pillar-card" key={item.href}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <strong>Open resource →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-pillars-section">
        <div className="section-header">
          <span className="eyebrow">The Six Pillar System</span>
          <h2>Complete financial clarity, organized by topic.</h2>
          <p>
            The site is structured around six core finance pillars so every
            calculator, article, and guide supports a stronger crawlable content system.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p) => (
            <Link key={p.slug} href={`/pillars/${p.slug}`} className="pillar-card">
              <span>Finance Pillar</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <strong>Read full guide →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-authority-section">
        <div className="about-authority-card">
          <span className="eyebrow">Authority Map</span>
          <h2>Built to own high-value financial decision topics.</h2>
          <p>
            BankDeMark is built around modern financial decision-making:
            personal finance, investing, business credit, banking optimization,
            debt reduction, retirement systems, calculators, diagnostics, and
            long-term wealth building.
          </p>
          <p>
            The platform combines strategic education, interactive tools, and
            connected internal links so readers can move naturally from learning
            to planning to action.
          </p>
        </div>
      </section>

      <section className="about-semantics-section">
        <div className="section-header">
          <span className="eyebrow">Financial Intelligence Platform</span>
          <h2>Built for modern money decisions.</h2>
          <p>
            BankDeMark helps users understand budgeting, investing, retirement
            planning, debt payoff, net worth growth, credit optimization,
            business finance, banking systems, and long-term financial
            independence through calculators, strategic guides, and connected
            financial frameworks.
          </p>
        </div>
      </section>

      <section className="about-faq-section">
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

      <SEOLinkMap currentPath="/about" />

    </>
  );
}
