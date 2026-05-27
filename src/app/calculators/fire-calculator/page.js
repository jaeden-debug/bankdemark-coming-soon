import Link from "next/link";
import Script from "next/script";
import FireCalculator from "../../components/FireCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "FIRE Calculator | Financial Independence & Coast FIRE",
  description:
    "Use BankDeMark's FIRE calculator to estimate your FIRE number, time to financial independence, Coast FIRE age, and long-term financial freedom path.",
  alternates: { canonical: "/calculators/fire-calculator" },
};

const faq = [
  {
    q: "What is a FIRE calculator?",
    a: "A FIRE calculator estimates your financial independence number and timeline based on spending, invested assets, contributions, return assumptions, and withdrawal rate.",
  },
  {
    q: "What is Coast FIRE?",
    a: "Coast FIRE means you may have enough invested that, without more contributions, it could grow to your FIRE number by a future target age.",
  },
  {
    q: "How is a FIRE number calculated?",
    a: "A common shortcut is annual spending divided by withdrawal rate. At a 4% withdrawal rate, the FIRE number is annual spending multiplied by 25.",
  },
  {
    q: "Is the 4% rule guaranteed?",
    a: "No. The 4% rule is a planning shortcut, not a guarantee. Taxes, inflation, fees, returns, and lifestyle changes all matter.",
  },
];

export default async function FireCalculatorPage({ searchParams }) {
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
    name: "How to use a FIRE calculator",
    description:
      "Estimate your FIRE number and financial independence timeline using spending, investments, contributions, returns, and withdrawal rate assumptions.",
    step: [
      { "@type": "HowToStep", name: "Enter current age" },
      { "@type": "HowToStep", name: "Enter invested assets" },
      { "@type": "HowToStep", name: "Enter annual spending goal" },
      { "@type": "HowToStep", name: "Enter monthly investing and return assumptions" },
      { "@type": "HowToStep", name: "Review FIRE number, FIRE age, and Coast FIRE timeline" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark FIRE Calculator",
    url: "https://bankdemark.com/calculators/fire-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="fire-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="fire-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="fire-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <FireCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-a-fire-calculator">What is a FIRE calculator?</a>
          <a href="#how-fire-works">How FIRE works</a>
          <a href="#coast-fire">What Coast FIRE means</a>
          <a href="#fire-mistakes">Common mistakes</a>
          <a href="#fire-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-a-fire-calculator">
            <span className="calculator-seo-kicker">FIRE Calculator</span>
            <h2>What Is a FIRE Calculator?</h2>
            <p>
              A FIRE calculator estimates how much invested wealth may be needed
              to cover your lifestyle without depending on traditional employment
              income.
            </p>
            <p>
              BankDeMark’s FIRE calculator combines annual spending, invested
              assets, monthly investing, return assumptions, and withdrawal rate
              into a clear financial independence snapshot.
            </p>
          </section>

          <section id="how-fire-works">
            <h2>How FIRE Works</h2>
            <p>
              FIRE stands for Financial Independence, Retire Early. The core idea
              is to build enough invested assets that withdrawals can fund your
              lifestyle.
            </p>

            <div className="formula-card">
              <strong>FIRE Number = Annual Spending ÷ Withdrawal Rate</strong>
              <p>At a 4% withdrawal rate, this is the same as annual spending multiplied by 25.</p>
            </div>

            <div className="seo-two-column">
              <div><h3>Annual spending</h3><p>Your target lifestyle cost.</p></div>
              <div><h3>FIRE number</h3><p>The portfolio target needed to support that spending.</p></div>
              <div><h3>Withdrawal rate</h3><p>The assumed percentage withdrawn each year.</p></div>
              <div><h3>Invested assets</h3><p>Money already working toward financial independence.</p></div>
            </div>
          </section>

          <section id="coast-fire">
            <h2>What Is Coast FIRE?</h2>
            <p>
              Coast FIRE means your current investments may be large enough to
              grow into your future FIRE number without requiring additional
              contributions, assuming your return and timeline assumptions hold.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/pillars/financial-freedom">financial freedom guide</Link>,{" "}
              <Link href="/calculators/retirement-calculator">retirement calculator</Link>, and{" "}
              <Link href="/calculators/investment-calculator">investment calculator</Link>.
            </p>
          </section>

          <section id="fire-mistakes">
            <h2>Common FIRE Planning Mistakes</h2>
            <ul className="seo-steps">
              <li>Using unrealistic spending assumptions.</li>
              <li>Ignoring taxes, inflation, fees, and healthcare.</li>
              <li>Assuming the 4% rule is guaranteed.</li>
              <li>Not stress-testing lower return scenarios.</li>
              <li>Forgetting housing, family, and lifestyle changes.</li>
            </ul>
          </section>

          <section id="fire-faq">
            <h2>FIRE Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/fire-calculator" />
    </>
  );
}
