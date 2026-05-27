import Link from "next/link";
import Script from "next/script";
import EmergencyFundCalculator from "../../components/EmergencyFundCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Emergency Fund Calculator | Safety Savings Target",
  description:
    "Use BankDeMark's emergency fund calculator to estimate how much emergency savings you need, current coverage, savings gap, and time to goal.",
  alternates: { canonical: "/calculators/emergency-fund-calculator" },
};

const faq = [
  {
    q: "What is an emergency fund calculator?",
    a: "An emergency fund calculator estimates how much cash you should keep for emergencies based on monthly expenses, current savings, target months, and income stability.",
  },
  {
    q: "How much should I have in an emergency fund?",
    a: "Many people target 3 to 6 months of essential expenses, while variable-income or higher-risk households may prefer 6 to 12 months.",
  },
  {
    q: "Where should I keep my emergency fund?",
    a: "Emergency funds are usually kept in safe, liquid accounts such as high-interest savings accounts, not risky investments.",
  },
  {
    q: "Should I build an emergency fund before investing?",
    a: "A starter emergency fund usually comes before aggressive investing. Once stable, you can balance savings, debt payoff, and investing.",
  },
];

export default async function EmergencyFundCalculatorPage({ searchParams }) {
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
    name: "How to use an emergency fund calculator",
    description:
      "Estimate your emergency fund target by entering monthly expenses, current savings, target months, monthly contribution, and income stability.",
    step: [
      { "@type": "HowToStep", name: "Enter monthly essential expenses" },
      { "@type": "HowToStep", name: "Enter current emergency savings" },
      { "@type": "HowToStep", name: "Choose target months" },
      { "@type": "HowToStep", name: "Add monthly savings contribution" },
      { "@type": "HowToStep", name: "Review emergency fund gap and timeline" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Emergency Fund Calculator",
    url: "https://bankdemark.com/calculators/emergency-fund-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="emergency-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="emergency-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="emergency-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <EmergencyFundCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-an-emergency-fund">What is an emergency fund?</a>
          <a href="#how-much">How much you need</a>
          <a href="#where-to-keep-it">Where to keep it</a>
          <a href="#emergency-mistakes">Common mistakes</a>
          <a href="#emergency-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-an-emergency-fund">
            <span className="calculator-seo-kicker">Emergency Fund Calculator</span>
            <h2>What Is an Emergency Fund?</h2>
            <p>
              An emergency fund is cash set aside for unexpected expenses or income disruption.
              It protects your financial system from job loss, urgent repairs, medical costs,
              family emergencies, and surprise bills.
            </p>
            <p>
              BankDeMark’s emergency fund calculator estimates your safety fund target,
              current coverage, savings gap, risk-based target, and time to goal.
            </p>
          </section>

          <section id="how-much">
            <h2>How Much Emergency Savings Do You Need?</h2>
            <p>
              A common target is 3 to 6 months of essential expenses. If your income is variable,
              your job is unstable, or you are self-employed, a larger buffer can make sense.
            </p>

            <div className="seo-stage-grid">
              <div><h3>3 months</h3><p>Often useful for stable income and lower household risk.</p></div>
              <div><h3>6 months</h3><p>A balanced target for many households.</p></div>
              <div><h3>9+ months</h3><p>Useful for variable income, business owners, or higher uncertainty.</p></div>
              <div><h3>Starter fund</h3><p>A small first buffer before aggressive debt payoff or investing.</p></div>
            </div>
          </section>

          <section id="where-to-keep-it">
            <h2>Where Should You Keep an Emergency Fund?</h2>
            <p>
              Emergency money should be safe, liquid, and easy to access. It is usually better
              suited for a high-interest savings account than volatile investments.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/pillars/banking">banking guide</Link>,{" "}
              <Link href="/calculators/budget-calculator">budget calculator</Link>, and{" "}
              <Link href="/money-health-score">Money Health Score</Link>.
            </p>
          </section>

          <section id="emergency-mistakes">
            <h2>Common Emergency Fund Mistakes</h2>
            <ul className="seo-steps">
              <li>Keeping no cash buffer.</li>
              <li>Investing emergency money too aggressively.</li>
              <li>Using the fund for non-emergencies.</li>
              <li>Not rebuilding it after withdrawals.</li>
              <li>Ignoring variable income or unstable work risk.</li>
            </ul>
          </section>

          <section id="emergency-faq">
            <h2>Emergency Fund Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/emergency-fund-calculator" />
    </>
  );
}
