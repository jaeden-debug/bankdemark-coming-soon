import Link from "next/link";
import Script from "next/script";
import NetWorthCalculator from "../../components/NetWorthCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Net Worth Calculator | Assets, Liabilities & Wealth Tracker",
  description:
    "Use BankDeMark's free net worth calculator to calculate assets, liabilities, debt ratio, liquidity, wealth stage, and long-term financial progress.",
  alternates: {
    canonical: "/calculators/net-worth-calculator",
  },
};

const faq = [
  {
    q: "What is a net worth calculator?",
    a: "A net worth calculator adds up your assets, subtracts your liabilities, and shows your estimated net worth.",
  },
  {
    q: "What counts as an asset?",
    a: "Assets can include cash, savings, investments, retirement accounts, real estate equity, vehicles, business assets, and other property with resale value.",
  },
  {
    q: "What counts as a liability?",
    a: "Liabilities include mortgages, credit cards, personal loans, auto loans, student loans, business debt, unpaid taxes, and other money owed.",
  },
  {
    q: "How often should I calculate my net worth?",
    a: "Monthly or quarterly tracking is usually enough. The goal is to watch your long-term trend, not react to every short-term change.",
  },
  {
    q: "How do I improve net worth?",
    a: "Improve net worth by increasing assets, reducing liabilities, improving cash flow, paying down high-interest debt, and investing consistently.",
  },
];

export default async function NetWorthCalculatorPage({ searchParams }) {
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
    name: "How to calculate net worth",
    description:
      "Calculate net worth by adding assets, subtracting liabilities, and reviewing financial ratios.",
    step: [
      { "@type": "HowToStep", name: "Enter cash and savings" },
      { "@type": "HowToStep", name: "Enter investments and retirement accounts" },
      { "@type": "HowToStep", name: "Enter real estate, vehicles, and other assets" },
      { "@type": "HowToStep", name: "Enter mortgages, credit cards, loans, and other liabilities" },
      { "@type": "HowToStep", name: "Review net worth, debt ratio, liquidity, and wealth stage" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Net Worth Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    url: "https://bankdemark.com/calculators/net-worth-calculator",
    description:
      "A free calculator for tracking assets, liabilities, liquidity, debt ratio, and wealth stage.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://bankdemark.com" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://bankdemark.com/calculators" },
      { "@type": "ListItem", position: 3, name: "Net Worth Calculator", item: "https://bankdemark.com/calculators/net-worth-calculator" },
    ],
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="net-worth-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="net-worth-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="net-worth-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <Script id="net-worth-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <NetWorthCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-net-worth">What net worth is</a>
          <a href="#net-worth-formula">Net worth formula</a>
          <a href="#assets-liabilities">Assets vs liabilities</a>
          <a href="#wealth-stages">Good net worth by stage</a>
          <a href="#improve-net-worth">How to improve net worth</a>
          <a href="#common-mistakes">Common mistakes</a>
          <a href="#net-worth-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-net-worth">
            <span className="calculator-seo-kicker">Net Worth Guide</span>
            <h2>What is net worth?</h2>
            <p>
              Net worth is the difference between everything you own and everything you owe. It gives you a clear snapshot of financial position because it combines cash, investments, real estate, business assets, vehicles, credit cards, loans, and mortgages into one number.
            </p>
            <p>
              The BankDeMark Net Worth Calculator helps turn that number into a useful financial dashboard by showing total assets, total liabilities, liquid assets, investable assets, debt ratio, liquidity ratio, and wealth stage.
            </p>
          </section>

          <section id="net-worth-formula">
            <h2>Net worth formula</h2>
            <div className="formula-card">
              <strong>Net Worth = Total Assets − Total Liabilities</strong>
              <p>
                Assets are what you own. Liabilities are what you owe. The goal is to grow assets faster than liabilities while reducing expensive debt over time.
              </p>
            </div>
          </section>

          <section id="assets-liabilities">
            <h2>Assets vs liabilities</h2>
            <div className="seo-two-column">
              <div>
                <h3>Assets</h3>
                <p>Cash, savings, investments, retirement accounts, home equity, vehicles, business equity, and property with resale value.</p>
              </div>
              <div>
                <h3>Liabilities</h3>
                <p>Mortgages, credit cards, personal loans, auto loans, student loans, tax debt, business debt, and other obligations.</p>
              </div>
            </div>
          </section>

          <section id="wealth-stages">
            <h2>Good net worth by stage</h2>
            <div className="seo-stage-grid">
              <div><h3>Negative net worth</h3><p>Debt is greater than assets. Priority: stabilize cash flow and attack high-interest debt.</p></div>
              <div><h3>Foundation stage</h3><p>Net worth is positive but still early. Priority: emergency fund, debt reduction, and investing consistency.</p></div>
              <div><h3>Builder stage</h3><p>Assets are growing steadily. Priority: increase savings rate and improve investment allocation.</p></div>
              <div><h3>Freedom stage</h3><p>Investable assets begin creating meaningful optionality. Priority: protect, optimize, and compound.</p></div>
            </div>
          </section>

          <section id="improve-net-worth">
            <h2>How to improve net worth</h2>
            <ol className="seo-steps">
              <li>Use the <Link href="/calculators/budget-calculator">Budget Calculator</Link> to increase monthly cash flow.</li>
              <li>Use the <Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link> to reduce liabilities faster.</li>
              <li>Use the <Link href="/calculators/investment-calculator">Investment Calculator</Link> to project long-term asset growth.</li>
              <li>Use the <Link href="/money-health-score">Money Health Score</Link> to find weak points across your full financial picture.</li>
              <li>Use the <Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link> to turn your numbers into an action plan.</li>
            </ol>
          </section>

          <section id="common-mistakes">
            <h2>Common net worth tracking mistakes</h2>
            <div className="seo-two-column">
              <div><h3>Ignoring debt ratio</h3><p>A higher net worth can still be fragile if too much of it is supported by debt.</p></div>
              <div><h3>Overvaluing vehicles</h3><p>Cars and recreational assets often depreciate, so conservative values are safer.</p></div>
              <div><h3>Forgetting liquidity</h3><p>Home equity is useful, but cash and liquid investments matter when emergencies happen.</p></div>
              <div><h3>Tracking too often</h3><p>Monthly or quarterly tracking is usually better than obsessing over daily changes.</p></div>
            </div>
          </section>

          <section id="net-worth-faq">
            <h2>Net Worth Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/net-worth-calculator" />
</>
  );
}
