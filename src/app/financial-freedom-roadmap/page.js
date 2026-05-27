import Link from "next/link";
import Script from "next/script";
import FinancialFreedomRoadmap from "../components/FinancialFreedomRoadmap";
import SEOLinkMap from "../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Financial Freedom Roadmap | Free Money Plan Generator",
  description:
    "Use BankDeMark's Financial Freedom Roadmap generator to identify your money stage, next best move, and path toward financial stability, wealth building, and freedom.",
  alternates: { canonical: "/financial-freedom-roadmap" },
};

const faq = [
  {
    q: "What is a financial freedom roadmap?",
    a: "A financial freedom roadmap is a step-by-step plan that helps you improve cash flow, reduce debt, build savings, invest consistently, and move toward long-term independence.",
  },
  {
    q: "How does the roadmap generator work?",
    a: "It reviews your cash flow, debt, emergency savings, investing habit, goal, and timeline to estimate your current financial stage and next best move.",
  },
  {
    q: "What should I do first?",
    a: "Most people should start by stabilizing monthly cash flow, building a starter emergency fund, and controlling high-interest debt before making aggressive investing decisions.",
  },
  {
    q: "Is financial freedom the same as retirement?",
    a: "Not always. Financial freedom can mean having enough control, assets, cash flow, or flexibility to make life decisions without depending entirely on a paycheck.",
  },
];

export default async function FinancialFreedomRoadmapPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const sharedData = resolvedSearchParams?.data || "";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use a financial freedom roadmap generator",
    description:
      "Generate a financial freedom roadmap using cash flow, debt, emergency savings, investing habits, goals, and timeline.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Select your monthly cash flow situation" },
      { "@type": "HowToStep", name: "Choose your debt and emergency savings stage" },
      { "@type": "HowToStep", name: "Select your investing habit and main goal" },
      { "@type": "HowToStep", name: "Review your financial freedom stage and next move" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Financial Freedom Roadmap",
    url: "https://bankdemark.com/financial-freedom-roadmap",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="roadmap-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="roadmap-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="roadmap-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <FinancialFreedomRoadmap />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-a-roadmap">What is a financial freedom roadmap?</a>
          <a href="#how-it-works">How the roadmap works</a>
          <a href="#freedom-stages">Financial freedom stages</a>
          <a href="#roadmap-mistakes">Common mistakes</a>
          <a href="#roadmap-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-a-roadmap">
            <span className="calculator-seo-kicker">Financial Freedom Roadmap</span>
            <h2>What Is a Financial Freedom Roadmap?</h2>
            <p>
              A financial freedom roadmap turns scattered money decisions into a clear system.
              Instead of guessing what to do next, it helps identify your current stage and the next move that matters most.
            </p>
            <p>
              The goal is to move from pressure and confusion toward stability, margin, wealth building, and eventually financial independence.
            </p>
          </section>

          <section id="how-it-works">
            <h2>How the Roadmap Generator Works</h2>
            <p>
              The roadmap looks at the major parts of your financial system: cash flow, debt, emergency savings, investing, goals, and timeline.
            </p>

            <div className="seo-two-column">
              <div><h3>Cash flow</h3><p>Shows whether your monthly money system has margin or pressure.</p></div>
              <div><h3>Debt</h3><p>Identifies whether repayment should be a priority before aggressive investing.</p></div>
              <div><h3>Emergency savings</h3><p>Shows how protected you are from unexpected expenses or income shocks.</p></div>
              <div><h3>Investing habit</h3><p>Shows whether your money is already working toward long-term freedom.</p></div>
            </div>
          </section>

          <section id="freedom-stages">
            <h2>Financial Freedom Stages</h2>
            <div className="seo-stage-grid">
              <div><h3>Foundation Phase</h3><p>Stabilize cash flow, create a starter emergency fund, and reduce high-pressure debt.</p></div>
              <div><h3>Growth Phase</h3><p>Fix the weakest link and build consistency across savings, debt payoff, and investing.</p></div>
              <div><h3>Momentum Phase</h3><p>Increase investing, track net worth, and protect the system you are building.</p></div>
              <div><h3>Optimization Phase</h3><p>Focus on tax efficiency, FIRE planning, retirement strategy, and freedom design.</p></div>
            </div>
          </section>

          <section id="roadmap-mistakes">
            <h2>Common Financial Freedom Mistakes</h2>
            <ul className="seo-steps">
              <li>Trying to invest aggressively while monthly cash flow is negative.</li>
              <li>Ignoring high-interest debt because long-term investing feels more exciting.</li>
              <li>Skipping emergency savings and relying on credit cards during surprises.</li>
              <li>Tracking income but not net worth, debt ratio, or savings rate.</li>
              <li>Using vague goals instead of a clear roadmap.</li>
            </ul>

            <p>
              Pair this with the{" "}
              <Link href="/money-health-score">Money Health Score</Link>,{" "}
              <Link href="/calculators/budget-calculator">Budget Calculator</Link>,{" "}
              <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link>,{" "}
              <Link href="/calculators/fire-calculator">FIRE Calculator</Link>, and{" "}
              <Link href="/pillars/financial-freedom">Financial Freedom Pillar</Link>.
            </p>
          </section>

          <section id="roadmap-faq">
            <h2>Financial Freedom Roadmap FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/financial-freedom-roadmap" />
    </>
  );
}
