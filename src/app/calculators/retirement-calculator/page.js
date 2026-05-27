import Link from "next/link";
import Script from "next/script";
import RetirementCalculator from "../../components/RetirementCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Retirement Calculator | Retirement Savings Calculator",
  description:
    "Use BankDeMark's retirement calculator to estimate retirement savings, nest egg targets, monthly contributions, inflation-adjusted spending, and retirement readiness.",
  alternates: { canonical: "/calculators/retirement-calculator" },
};

const faq = [
  {
    q: "What is a retirement calculator?",
    a: "A retirement calculator estimates whether your current savings, monthly contributions, expected return, retirement age, and spending goals may be enough to support retirement.",
  },
  {
    q: "How much money do I need to retire?",
    a: "A common starting point is estimating 25 times your desired annual retirement spending, but the real number depends on lifestyle, taxes, pensions, benefits, inflation, returns, and withdrawal strategy.",
  },
  {
    q: "What return should I use?",
    a: "Use conservative assumptions and test multiple scenarios such as 4%, 5%, 6%, and 7% instead of relying on one optimistic number.",
  },
  {
    q: "Does inflation matter for retirement?",
    a: "Yes. Inflation raises future spending needs, which can increase the nest egg required to support the same lifestyle.",
  },
];

export default async function RetirementCalculatorPage({ searchParams }) {
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
    name: "How to use a retirement calculator",
    description:
      "Estimate retirement readiness using current age, retirement age, savings, monthly contributions, expected return, inflation, and annual retirement spending.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Enter your current age and retirement age" },
      { "@type": "HowToStep", name: "Add current retirement savings" },
      { "@type": "HowToStep", name: "Add monthly contributions" },
      { "@type": "HowToStep", name: "Choose return and inflation assumptions" },
      { "@type": "HowToStep", name: "Review your projected nest egg and retirement gap" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Retirement Calculator",
    url: "https://bankdemark.com/calculators/retirement-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="retirement-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="retirement-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="retirement-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <RetirementCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-a-retirement-calculator">What is a retirement calculator?</a>
          <a href="#how-retirement-planning-works">How retirement planning works</a>
          <a href="#retirement-number">Retirement number</a>
          <a href="#retirement-mistakes">Common mistakes</a>
          <a href="#retirement-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-a-retirement-calculator">
            <span className="calculator-seo-kicker">Retirement Calculator</span>
            <h2>What Is a Retirement Calculator?</h2>
            <p>
              A retirement calculator estimates whether your current savings and future contributions may be enough
              to support your desired retirement lifestyle.
            </p>
            <p>
              It combines age, savings, monthly contributions, return assumptions, inflation, and spending goals into
              a planning snapshot.
            </p>
          </section>

          <section id="how-retirement-planning-works">
            <h2>How Retirement Planning Works</h2>
            <p>
              Retirement planning is about building enough assets to replace income, cover living expenses, and protect
              against inflation, taxes, market volatility, and longevity risk.
            </p>

            <div className="seo-two-column">
              <div><h3>Current savings</h3><p>Money already invested for retirement.</p></div>
              <div><h3>Monthly contribution</h3><p>How much you keep adding before retirement.</p></div>
              <div><h3>Expected return</h3><p>Your assumed annual investment growth.</p></div>
              <div><h3>Spending goal</h3><p>Your desired annual retirement lifestyle cost.</p></div>
            </div>
          </section>

          <section id="retirement-number">
            <h2>How to Estimate Your Retirement Number</h2>
            <p>
              A common starting point is the 25x rule: multiply desired annual retirement spending by 25.
              This is a rough planning shortcut, not a guarantee.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/pillars/financial-freedom">financial freedom guide</Link>,{" "}
              <Link href="/calculators/fire-calculator">FIRE calculator</Link>,{" "}
              <Link href="/calculators/investment-calculator">investment calculator</Link>, and{" "}
              <Link href="/financial-freedom-roadmap">financial freedom roadmap</Link>.
            </p>
          </section>

          <section id="retirement-mistakes">
            <h2>Common Retirement Planning Mistakes</h2>
            <ul className="seo-steps">
              <li>Starting too late and relying on large future contributions.</li>
              <li>Ignoring inflation and rising living costs.</li>
              <li>Using return assumptions that are too optimistic.</li>
              <li>Forgetting taxes, healthcare, housing, and emergency costs.</li>
              <li>Assuming retirement projections are guarantees.</li>
            </ul>
          </section>

          <section id="retirement-faq">
            <h2>Retirement Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/retirement-calculator" />
    </>
  );
}
