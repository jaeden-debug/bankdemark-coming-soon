import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import NetWorthCalculator from "../../components/NetWorthCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import GlobalCalculatorShare from "@/app/components/GlobalCalculatorShare";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Net Worth Calculator | Free Assets and Liabilities Tracker",
  description:
    "Use BankDeMark's free net worth calculator to track assets, liabilities, wealth stage, debt ratio, liquidity, and long-term financial progress in Canada or the U.S.",
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
    q: "How do you calculate net worth?",
    a: "Net worth is calculated as total assets minus total liabilities. Assets include cash, investments, retirement accounts, real estate, vehicles, and business assets. Liabilities include mortgages, credit cards, loans, and other debts.",
  },
  {
    q: "What is a good net worth?",
    a: "A good net worth depends on age, income, goals, location, and lifestyle. The important part is whether your net worth is increasing consistently over time.",
  },
  {
    q: "How often should I track net worth?",
    a: "Monthly or quarterly tracking is usually enough. The goal is to watch the trend, not obsess over daily changes.",
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
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to use a net worth calculator",
    description:
      "Calculate net worth by adding assets, subtracting liabilities, and reviewing your wealth stage.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Enter your assets" },
      { "@type": "HowToStep", name: "Enter your liabilities" },
      { "@type": "HowToStep", name: "Review total net worth" },
      { "@type": "HowToStep", name: "Track your wealth stage and next move" },
    ],
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />
      <Script
        id="net-worth-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="net-worth-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero networth-page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>Net Worth Calculator</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>
          Track your assets, liabilities, wealth stage, liquidity, and financial
          progress with a clean net worth snapshot.
        </p>
      </div>

      <div className="pillar-page">
        <NetWorthCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-net-worth">What net worth is</a></li>
            <li><a href="#assets-vs-liabilities">Assets vs liabilities</a></li>
            <li><a href="#wealth-stages">Wealth stages</a></li>
            <li><a href="#how-to-improve">How to improve net worth</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-net-worth" className="pillar-section">
          <h2>What Is Net Worth?</h2>
          <p>
            Net worth is the difference between what you own and what you owe.
            It is one of the clearest snapshots of financial progress because it
            combines savings, investing, real estate, business assets, and debt
            into one number.
          </p>
          <p>
            BankDeMark’s net worth calculator helps you track the full picture:
            total assets, total liabilities, liquid assets, investable assets,
            debt ratio, liquidity ratio, and your current wealth stage.
          </p>
        </div>

        <div id="assets-vs-liabilities" className="pillar-section">
          <h2>Assets vs Liabilities</h2>
          <p>
            Assets are things you own that have value. Liabilities are debts or
            obligations you owe. Net worth rises when assets increase, debts
            decrease, or both happen at the same time.
          </p>
          <ul>
            <li><strong>Assets:</strong> cash, investments, retirement accounts, real estate, vehicles, business assets, and other property.</li>
            <li><strong>Liabilities:</strong> mortgages, credit cards, personal loans, auto loans, student debt, and other debt.</li>
          </ul>
        </div>

        <div id="wealth-stages" className="pillar-section">
          <h2>Wealth Stages</h2>
          <p>
            The calculator assigns a simple wealth stage so the number becomes
            easier to understand. Someone with negative net worth needs a
            different strategy than someone building toward their first
            $250,000 or first $1 million.
          </p>
        </div>

        <div id="how-to-improve" className="pillar-section">
          <h2>How to Improve Net Worth</h2>
          <p>
            The best strategy is usually simple: increase monthly cash flow, pay
            down high-interest debt, build emergency reserves, invest
            consistently, and track progress every month.
          </p>
          <p>
            Pair this with the <Link href="/money-health-score">Money Health Score</Link>,{" "}
            <Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link>,{" "}
            <Link href="/calculators/budget-calculator">Budget Calculator</Link>, and{" "}
            <Link href="/calculators/investment-calculator">Investment Calculator</Link>.
          </p>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Net Worth Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/net-worth-calculator" />

      <CTABanner
        title="Turn net worth tracking into a wealth-building system."
        sub="Use BankDeMark calculators and finance pillars to improve cash flow, reduce liabilities, grow assets, and build financial freedom."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
          <GlobalCalculatorShare />
    </>
  );
}
