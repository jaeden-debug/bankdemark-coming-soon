import Link from "next/link";
import Script from "next/script";
import InvestmentCalculator from "../../components/InvestmentCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Investment Calculator | Portfolio Growth Calculator",
  description:
    "Use BankDeMark's investment calculator to estimate portfolio growth, monthly contributions, fees, tax drag, and long-term wealth building.",
  alternates: { canonical: "/calculators/investment-calculator" },
};

const faq = [
  {
    q: "What is an investment calculator?",
    a: "An investment calculator estimates how your portfolio may grow over time based on your starting amount, monthly contributions, expected return, timeline, fees, and optional tax drag.",
  },
  {
    q: "How is investment growth calculated?",
    a: "Investment growth is estimated by compounding your starting balance and recurring contributions using an assumed annual return, then adjusting for fees or tax drag if included.",
  },
  {
    q: "What return should I use?",
    a: "Use a conservative long-term assumption and test multiple scenarios such as 4%, 6%, 7%, or 8% instead of relying on one optimistic number.",
  },
  {
    q: "Do fees matter in investing?",
    a: "Yes. Even small annual fees can reduce long-term portfolio value because they lower the amount of money left to compound.",
  },
];

export default async function InvestmentCalculatorPage({ searchParams }) {
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
    name: "How to use an investment calculator",
    description:
      "Estimate future portfolio value using starting balance, monthly contributions, expected return, timeline, fees, and optional tax drag.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Enter your starting investment" },
      { "@type": "HowToStep", name: "Add your monthly contribution" },
      { "@type": "HowToStep", name: "Choose an expected annual return" },
      { "@type": "HowToStep", name: "Add fees or tax drag if needed" },
      { "@type": "HowToStep", name: "Review projected portfolio value" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Investment Calculator",
    url: "https://bankdemark.com/calculators/investment-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="investment-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="investment-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="investment-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <InvestmentCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-an-investment-calculator">What is an investment calculator?</a>
          <a href="#how-growth-works">How investment growth works</a>
          <a href="#fees-and-taxes">Fees and tax drag</a>
          <a href="#investment-mistakes">Common mistakes</a>
          <a href="#investment-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-an-investment-calculator">
            <span className="calculator-seo-kicker">Investment Calculator</span>
            <h2>What Is an Investment Calculator?</h2>
            <p>
              An investment calculator estimates how money may grow over time when a starting balance,
              recurring contributions, expected return, and timeline work together.
            </p>
            <p>
              BankDeMark’s investment calculator helps compare contribution habits, fees, tax drag,
              and long-term portfolio growth in a clean planning snapshot.
            </p>
          </section>

          <section id="how-growth-works">
            <h2>How Investment Growth Works</h2>
            <p>
              Investment growth usually comes from capital appreciation, dividends, interest, and reinvested returns.
              Over long periods, consistent contributions and time in the market often matter more than perfect timing.
            </p>

            <div className="seo-two-column">
              <div><h3>Starting balance</h3><p>Your current portfolio or initial deposit.</p></div>
              <div><h3>Monthly contribution</h3><p>The amount invested consistently over time.</p></div>
              <div><h3>Expected return</h3><p>Your assumed average annual growth rate.</p></div>
              <div><h3>Timeline</h3><p>The number of years the money stays invested.</p></div>
            </div>
          </section>

          <section id="fees-and-taxes">
            <h2>Why Fees and Tax Drag Matter</h2>
            <p>
              Small annual fees can become large over decades because they reduce the money left to compound.
              Tax drag can also reduce real-world returns in taxable accounts.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/pillars/investing">investing guide</Link>,{" "}
              <Link href="/calculators/compound-interest-calculator">compound interest calculator</Link>,{" "}
              <Link href="/calculators/tfsa-calculator">TFSA calculator</Link>, and{" "}
              <Link href="/calculators/rrsp-calculator">RRSP calculator</Link>.
            </p>
          </section>

          <section id="investment-mistakes">
            <h2>Common Investment Calculator Mistakes</h2>
            <ul className="seo-steps">
              <li>Using overly optimistic return assumptions.</li>
              <li>Ignoring fees, MERs, advisory costs, and platform costs.</li>
              <li>Forgetting that taxable accounts may grow differently than tax-sheltered accounts.</li>
              <li>Stopping contributions during volatility.</li>
              <li>Assuming projections are guarantees.</li>
            </ul>
          </section>

          <section id="investment-faq">
            <h2>Investment Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/investment-calculator" />
    </>
  );
}
