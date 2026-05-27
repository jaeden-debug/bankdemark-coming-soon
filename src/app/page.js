import Link from "next/link";
import BrandText from "./components/BrandText";
import Image from "next/image";
import SEOLinkMap from "./components/SEOLinkMap";

export const metadata = {
  title: "BankDeMark | Modern Finance Tools & Money Guides",
  description:
    "BankDeMark helps you make smarter money decisions with free financial calculators, practical guides, and simple frameworks for investing, debt, credit, retirement, and wealth building.",
};

const featuredTools = [
  [
    "Compound Interest",
    "/calculators/compound-interest-calculator",
    "Project long-term wealth.",
    "Calculate Growth →",
  ],

  [
    "Retirement Planning",
    "/calculators/retirement-calculator",
    "Estimate your future number.",
    "Plan Retirement →",
  ],

  [
    "Debt Payoff",
    "/calculators/debt-payoff-calculator",
    "Build your payoff strategy.",
    "Reduce Debt →",
  ],

  [
    "Mortgage Planning",
    "/calculators/mortgage-calculator",
    "Understand affordability clearly.",
    "Explore Mortgage →",
  ],
];

const topics = [
  ["Investment Strategy", "/pillars/investing"],
  ["Debt Management", "/pillars/debt-management"],
  ["Business Credit", "/pillars/business-credit"],
  ["Modern Banking", "/pillars/banking"],
  ["Financial Freedom", "/pillars/financial-freedom"],
  ["Personal Finance", "/pillars/personal-finance"],
];

export default function Home() {
  return (
    <>
      <section className="premium-hero home-hero-full">
        <div className="premium-hero-inner">
          <p className="premium-kicker"><BrandText dotcom /></p>

          <h1>Modern Financial<br />Planning</h1>

          <p className="premium-sub">
            AI-powered calculators, strategic insights, and modern wealth intelligence.
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

      <section className="premium-section premium-tools-section">
        <div className="premium-section-head">
          <span>Start here</span>
         <h2>Tools built for smarter money decisions.</h2>
         <p>

  Run projections, compare outcomes, and plan wealth with modern financial calculators designed for real-world strategy.
</p>
        </div>

        <div className="premium-tool-grid">
          {featuredTools.map(([title, href, desc, cta]) => (
            <Link href={href} className="premium-tool-card" key={href}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <strong>{cta}</strong>
            </Link>
          ))}
        </div>

        <div className="premium-center-link">
          <Link href="/calculators">Explore All Wealth Tools →</Link>
        </div>
      </section>

      <section className="premium-section premium-topic-section">
        <div className="premium-section-head">
          <span>Financial Intelligence</span>
          <h2>Build a stronger financial framework.</h2>
          <p>
            Modern guidance for investing, cash flow, debt, credit, and wealth strategy.
          </p>
        </div>

        <div className="premium-topic-grid">
          {topics.map(([title, href]) => (
            <Link href={href} className="premium-topic-card" key={href}>
              {title}
            </Link>
          ))}
        </div>
      </section>

          <SEOLinkMap currentPath="/" />
    </>
  );
}
