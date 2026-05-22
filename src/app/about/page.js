import Link from "next/link";
import Script from "next/script";
import CTABanner from "../components/CTABanner";
import { pillars } from "../data/pillars";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "About BankDeMark | Modern Finance, Business & AI Intelligence",
  description:
    "BankDeMark is a modern finance intelligence platform built around personal finance, business credit, investing, banking, debt management, and financial freedom.",
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

const platformLinks = [
  {
    href: "/calculators",
    icon: "🧮",
    title: "Financial Calculators",
    desc: "Use BankDeMark tools for budgeting, debt payoff, investing, retirement, mortgages, FIRE, net worth, and more.",
  },
  {
    href: "/blog",
    icon: "✍️",
    title: "Finance Blog",
    desc: "Read practical guides, comparisons, and strategy articles built around modern money decisions.",
  },
  {
    href: "/money-health-score",
    icon: "◆",
    title: "Money Health Score",
    desc: "Diagnose cash flow, debt, savings, investing, housing load, credit strength, and your next best move.",
  },
  {
    href: "/financial-freedom-roadmap",
    icon: "🧭",
    title: "Freedom Roadmap",
    desc: "Generate a custom step-by-step plan for cash flow, debt, savings, investing, retirement, and financial freedom.",
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

      <div className="page-hero about-hero">
        <p className="eyebrow">About BankDeMark</p>
        <h1>Modern finance intelligence for serious builders.</h1>
        <p>
          BankDeMark simplifies money, credit, investing, banking, debt, and
          financial freedom into one clear system for modern decision makers.
        </p>

        <div className="about-hero-actions">
          <Link href="/calculators" className="btn-primary">
            Explore products
          </Link>
          <Link href="/blog" className="btn-ghost">
            Read the Blog
          </Link>
        </div>
      </div>

      <section className="about-shell">
        <div className="about-feature-grid">
          <div className="about-feature-main">
            <p className="eyebrow">The Mission</p>
            <h2>Financial clarity should be a system, not a guessing game.</h2>
            <p>
              Most finance content is either too shallow, too technical, too
              biased, or too disconnected from real decisions. BankDeMark is
              being built as a cleaner alternative: practical education,
              interactive tools, and connected financial systems.
            </p>
            <p>
              The platform focuses on personal finance, business credit,
              investing, banking optimization, debt payoff, retirement planning,
              and long-term financial independence.
            </p>
          </div>

          <div className="about-feature-card">
            <span>01</span>
            <h3>Clarity Over Complexity</h3>
            <p>
              Practical frameworks that turn confusing money topics into steps
              people can understand and use.
            </p>
          </div>

          <div className="about-feature-card">
            <span>02</span>
            <h3>Built Around Six Pillars</h3>
            <p>
              Every guide connects back to personal finance, business credit,
              investing, banking, debt management, or financial freedom.
            </p>
          </div>

          <div className="about-feature-card">
            <span>03</span>
            <h3>Tools First</h3>
            <p>
              Calculators and diagnostics help users act instead of only reading
              passive finance content.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-section-tight">
        <div className="section-header">
          <span className="eyebrow">Platform System</span>
          <h2>Start with the tool that matches your next decision.</h2>
          <p>
            BankDeMark combines calculators, guides, diagnostics, and roadmap
            tools into one connected money system.
          </p>
        </div>

        <div className="about-tool-grid">
          {platformLinks.map((item) => (
            <Link href={item.href} className="about-tool-card" key={item.href}>
              <span className="about-tool-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <strong>Open →</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section about-section-tight">
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
      </section>

      <section className="about-shell">
        <div className="about-authority-card">
          <p className="eyebrow">Authority Map</p>
          <h2>The topics BankDeMark is built to own.</h2>
          <p>
            BankDeMark is designed to build authority across high-value finance,
            business, and automation topics: personal finance education,
            investing education, business credit strategies, debt payoff,
            financial planning, banking optimization, wealth building, AI tools,
            business automation, and online business systems.
          </p>
          <p>
            For founders who need the execution layer behind those systems,{" "}
            <a href="https://stillawakemedia.com" target="_blank" rel="noopener noreferrer">
              StillAwake Media
            </a>{" "}
            builds websites, software, SaaS platforms, creative systems, and
            modern digital infrastructure.{" "}
            <a href="https://zylx.ai" target="_blank" rel="noopener noreferrer">
              ZYLX.ai
            </a>{" "}
            expands that ecosystem into AI agents, dashboards, and business
            operating systems.
          </p>

          <div className="about-button-row">
            <Link href="/pillars" className="btn-ghost">
              Explore Pillars
            </Link>
            <Link href="/calculators" className="btn-primary">
              Open Calculator Hub
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-section-tight">
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

      <section className="section about-section-tight">
        <div className="pillars-grid">
          <Link href="/" className="pillar-card">
            <span className="pillar-icon">⌂</span>
            <h3>Home</h3>
            <p>Return to the main BankDeMark finance intelligence hub.</p>
            <span className="pillar-link">Visit homepage →</span>
          </Link>

          <Link href="/blog" className="pillar-card">
            <span className="pillar-icon">✍️</span>
            <h3>Blog Hub</h3>
            <p>Read BankDeMark finance guides, comparisons, and strategy articles.</p>
            <span className="pillar-link">Read the blog →</span>
          </Link>

          <Link href="/calculators" className="pillar-card">
            <span className="pillar-icon">🧮</span>
            <h3>Calculator Hub</h3>
            <p>Use every BankDeMark calculator, quiz, roadmap, and diagnostic tool.</p>
            <span className="pillar-link">Open calculators →</span>
          </Link>
        </div>
      </section>

      <SEOLinkMap currentPath="/pillars" />

      <CTABanner
        title="Start with the system. Build from there."
        sub="Explore BankDeMark’s finance pillars, calculators, blog guides, and roadmap tools."
        btnText="Explore Finance Pillars"
        btnHref="/pillars"
      />
    </>
  );
}
