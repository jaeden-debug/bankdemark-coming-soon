import Link from "next/link";
import Script from "next/script";
import DebtPayoffCalculator from "../../components/DebtPayoffCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Debt Payoff Calculator | Debt-Free Timeline & Interest Cost",
  description:
    "Use BankDeMark's free debt payoff calculator to estimate debt-free date, payoff timeline, total interest, monthly strategy, and extra payment impact.",
  alternates: { canonical: "/calculators/debt-payoff-calculator" },
};

const faq = [
  {
    q: "What is a debt payoff calculator?",
    a: "A debt payoff calculator estimates how long it may take to pay off debt based on balance, interest rate, monthly payment, and extra payments.",
  },
  {
    q: "How can I pay off debt faster?",
    a: "You can pay off debt faster by increasing monthly payments, adding extra payments, lowering interest rates, consolidating strategically, or using avalanche or snowball methods.",
  },
  {
    q: "What is the debt avalanche method?",
    a: "The debt avalanche method focuses extra payments on the highest-interest debt first to reduce total interest paid.",
  },
  {
    q: "What is the debt snowball method?",
    a: "The debt snowball method focuses extra payments on the smallest balance first to build momentum and motivation.",
  },
  {
    q: "Why does my debt not go down?",
    a: "If your payment is too small, interest can consume most or all of the payment. Your payment must cover monthly interest and still reduce principal.",
  },
];

export default async function DebtPayoffCalculatorPage({ searchParams }) {
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
    name: "How to use a debt payoff calculator",
    description:
      "Estimate your debt payoff timeline by entering debt balance, interest rate, monthly payment, and extra payment strategy.",
    step: [
      { "@type": "HowToStep", name: "Enter current debt balance" },
      { "@type": "HowToStep", name: "Enter annual interest rate" },
      { "@type": "HowToStep", name: "Enter monthly payment" },
      { "@type": "HowToStep", name: "Add extra monthly payment if available" },
      { "@type": "HowToStep", name: "Review payoff timeline, total interest, and total paid" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Debt Payoff Calculator",
    url: "https://bankdemark.com/calculators/debt-payoff-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="debt-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="debt-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="debt-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <DebtPayoffCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-a-debt-payoff-calculator">What is a debt payoff calculator?</a>
          <a href="#how-debt-payoff-works">How debt payoff works</a>
          <a href="#avalanche-vs-snowball">Avalanche vs snowball</a>
          <a href="#debt-payoff-mistakes">Common mistakes</a>
          <a href="#debt-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-a-debt-payoff-calculator">
            <span className="calculator-seo-kicker">Debt Payoff Calculator</span>
            <h2>What Is a Debt Payoff Calculator?</h2>
            <p>
              A debt payoff calculator estimates how long it may take to become
              debt-free using your current balance, interest rate, monthly
              payment, and extra payment strategy.
            </p>
            <p>
              BankDeMark’s debt payoff calculator shows your estimated debt-free
              timeline, total interest cost, total amount paid, and combined
              monthly payoff strategy in one clean snapshot.
            </p>
          </section>

          <section id="how-debt-payoff-works">
            <h2>How Debt Payoff Works</h2>
            <p>
              Debt payoff is a battle between interest and cash flow. The higher
              the interest rate, the more your payment gets consumed before it
              reduces principal.
            </p>

            <div className="seo-two-column">
              <div><h3>Balance</h3><p>The amount you currently owe on the debt.</p></div>
              <div><h3>Interest rate</h3><p>The annual cost of carrying the balance.</p></div>
              <div><h3>Monthly payment</h3><p>Your base repayment amount each month.</p></div>
              <div><h3>Extra payment</h3><p>Additional money that speeds up payoff and reduces interest.</p></div>
            </div>
          </section>

          <section id="avalanche-vs-snowball">
            <h2>Debt Avalanche vs Debt Snowball</h2>
            <p>
              The avalanche method targets the highest interest rate first. The
              snowball method targets the smallest balance first. Avalanche
              usually saves more interest, while snowball can build motivation
              faster.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/pillars/debt-management">debt management guide</Link>,{" "}
              <Link href="/calculators/budget-calculator">budget calculator</Link>, and{" "}
              <Link href="/calculators/credit-card-payoff-calculator">credit card payoff optimizer</Link>.
            </p>
          </section>

          <section id="debt-payoff-mistakes">
            <h2>Common Debt Payoff Mistakes</h2>
            <ul className="seo-steps">
              <li>Paying only minimum payments while high interest keeps compounding.</li>
              <li>Ignoring interest rates and treating all debt the same.</li>
              <li>Adding new debt while trying to pay off old debt.</li>
              <li>Not building a small emergency buffer before aggressive payoff.</li>
              <li>Failing to track monthly cash flow with a realistic budget.</li>
            </ul>
          </section>

          <section id="debt-faq">
            <h2>Debt Payoff Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/debt-payoff-calculator" />
    </>
  );
}
