import Link from "next/link";
import Script from "next/script";
import CreditCardPayoffOptimizer from "../../components/CreditCardPayoffOptimizer";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Credit Card Payoff Calculator | Avalanche vs Snowball Optimizer",
  description:
    "Use BankDeMark's credit card payoff calculator to compare avalanche vs snowball, estimate payoff time, total interest, and debt-free strategy.",
  alternates: { canonical: "/calculators/credit-card-payoff-calculator" },
};

const faq = [
  {
    q: "What is a credit card payoff calculator?",
    a: "A credit card payoff calculator estimates how long it may take to pay off one or more credit cards based on balances, APRs, minimum payments, and extra payments.",
  },
  {
    q: "What is the debt avalanche method?",
    a: "The debt avalanche method puts extra payments toward the highest-interest card first while continuing minimum payments on the rest. It usually saves the most interest.",
  },
  {
    q: "What is the debt snowball method?",
    a: "The debt snowball method puts extra payments toward the smallest balance first while continuing minimum payments on the rest. It can build motivation through faster wins.",
  },
  {
    q: "Which credit card should I pay first?",
    a: "Mathematically, the highest APR card is usually the best first target. Behaviorally, some people prefer paying the smallest balance first to build momentum.",
  },
];

export default async function CreditCardPayoffCalculatorPage({ searchParams }) {
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
    name: "How to use a credit card payoff calculator",
    description:
      "Compare avalanche and snowball payoff strategies across multiple credit cards.",
    step: [
      { "@type": "HowToStep", name: "Enter each credit card balance" },
      { "@type": "HowToStep", name: "Enter each card APR" },
      { "@type": "HowToStep", name: "Enter each minimum payment" },
      { "@type": "HowToStep", name: "Add extra monthly payment amount" },
      { "@type": "HowToStep", name: "Compare avalanche and snowball results" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Credit Card Payoff Calculator",
    url: "https://bankdemark.com/calculators/credit-card-payoff-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="credit-card-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="credit-card-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="credit-card-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <CreditCardPayoffOptimizer />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-a-credit-card-payoff-calculator">What is a credit card payoff calculator?</a>
          <a href="#avalanche-vs-snowball">Avalanche vs snowball</a>
          <a href="#how-to-use">How to use it</a>
          <a href="#payoff-mistakes">Common mistakes</a>
          <a href="#credit-card-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-a-credit-card-payoff-calculator">
            <span className="calculator-seo-kicker">Credit Card Payoff Calculator</span>
            <h2>What Is a Credit Card Payoff Calculator?</h2>
            <p>
              A credit card payoff calculator helps estimate how long it may take to become debt-free
              based on card balances, APRs, minimum payments, and extra monthly payments.
            </p>
            <p>
              BankDeMark’s payoff optimizer compares avalanche and snowball strategies so you can see
              the potential interest difference, payoff timeline, and best attack order.
            </p>
          </section>

          <section id="avalanche-vs-snowball">
            <h2>Debt Avalanche vs Debt Snowball</h2>
            <p>
              The avalanche method targets the highest APR first. The snowball method targets the smallest
              balance first. Avalanche usually wins mathematically, while snowball can help with motivation.
            </p>

            <div className="seo-two-column">
              <div><h3>Avalanche</h3><p>Best for reducing total interest and attacking expensive debt first.</p></div>
              <div><h3>Snowball</h3><p>Best for creating quick wins and simplifying your debt list faster.</p></div>
            </div>
          </section>

          <section id="how-to-use">
            <h2>How to Use the Credit Card Payoff Calculator</h2>
            <ol className="seo-steps">
              <li>Enter each credit card balance.</li>
              <li>Add the APR for every card.</li>
              <li>Enter the minimum payment for each card.</li>
              <li>Add any extra monthly payment you can afford.</li>
              <li>Compare avalanche, snowball, interest cost, and payoff timeline.</li>
            </ol>
            <p>
              Pair this with the{" "}
              <Link href="/calculators/debt-payoff-calculator">debt payoff calculator</Link>,{" "}
              <Link href="/calculators/budget-calculator">budget calculator</Link>,{" "}
              <Link href="/pillars/debt-management">debt management guide</Link>, and{" "}
              <Link href="/money-health-score">Money Health Score</Link>.
            </p>
          </section>

          <section id="payoff-mistakes">
            <h2>Common Credit Card Payoff Mistakes</h2>
            <ul className="seo-steps">
              <li>Paying only minimum payments.</li>
              <li>Ignoring APR and attacking low-interest balances first.</li>
              <li>Continuing to add new debt while paying old debt.</li>
              <li>Not budgeting for a consistent extra payment.</li>
              <li>Missing payments and triggering fees or penalty rates.</li>
            </ul>
          </section>

          <section id="credit-card-faq">
            <h2>Credit Card Payoff Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/credit-card-payoff-calculator" />
    </>
  );
}
