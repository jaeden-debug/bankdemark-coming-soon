import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import RetirementCalculator from "../../components/RetirementCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import GlobalCalculatorShare from "@/app/components/GlobalCalculatorShare";

export const metadata = {
  title: "Retirement Calculator | Free Retirement Savings Calculator",
  description:
    "Use BankDeMark's free retirement calculator to estimate retirement savings, nest egg targets, monthly contributions, inflation-adjusted spending, and retirement readiness in Canada or the U.S.",
  alternates: {
    canonical: "/calculators/retirement-calculator",
  },
};

const faq = [
  {
    q: "What is a retirement calculator?",
    a: "A retirement calculator estimates whether your current savings, monthly contributions, expected return, retirement age, and spending goals may be enough to support retirement.",
  },
  {
    q: "How much money do I need to retire?",
    a: "A common starting point is estimating 25 times your desired annual retirement spending, but the real number depends on lifestyle, taxes, pensions, government benefits, inflation, investment returns, and withdrawal strategy.",
  },
  {
    q: "Does this retirement calculator work for Canada and the United States?",
    a: "Yes. You can switch between Canada and the United States. The calculator changes the selected country, flag, currency, and account examples.",
  },
  {
    q: "What return should I use for retirement planning?",
    a: "Use conservative assumptions and test multiple scenarios. Many people compare 4%, 5%, 6%, and 7% return assumptions instead of relying on one optimistic number.",
  },
];

export default function RetirementCalculatorPage() {
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
    name: "How to use a retirement calculator",
    description:
      "Estimate retirement readiness using current age, retirement age, savings, monthly contributions, expected return, inflation, and annual retirement spending.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Enter your current age and retirement age" },
      { "@type": "HowToStep", name: "Add your current retirement savings" },
      { "@type": "HowToStep", name: "Add your monthly contribution" },
      { "@type": "HowToStep", name: "Choose return and inflation assumptions" },
      { "@type": "HowToStep", name: "Review your projected nest egg and retirement gap" },
    ],
  };

  return (
    <>
      <Script
        id="retirement-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="retirement-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>Retirement Calculator</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>
          Estimate your retirement nest egg, savings gap, inflation-adjusted spending, and long-term financial freedom plan.
        </p>
      </div>

      <div className="pillar-page">
        <RetirementCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-retirement-calculator">What a retirement calculator is</a></li>
            <li><a href="#how-retirement-planning-works">How retirement planning works</a></li>
            <li><a href="#canada-vs-us">Canada vs U.S. retirement planning</a></li>
            <li><a href="#retirement-number">How to estimate your retirement number</a></li>
            <li><a href="#mistakes">Common retirement mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-retirement-calculator" className="pillar-section">
          <h2>What Is a Retirement Calculator?</h2>
          <p>
            A retirement calculator estimates whether your current savings and future contributions may be enough to support your desired retirement lifestyle. It combines your age, retirement timeline, savings balance, monthly contributions, return assumptions, inflation, and spending goals.
          </p>
          <p>
            BankDeMark’s retirement calculator is built for both Canadian and U.S. planning. You can switch between Canada and the United States to view CAD or USD projections and account examples that match the selected market.
          </p>
        </div>

        <div id="how-retirement-planning-works" className="pillar-section">
          <h2>How Retirement Planning Works</h2>
          <p>
            Retirement planning is about building enough assets to replace employment income, cover living expenses, and protect against inflation, taxes, market volatility, and longevity risk. The earlier you start, the more time your money has to compound.
          </p>
          <ul>
            <li><strong>Current savings:</strong> money already invested for retirement.</li>
            <li><strong>Monthly contribution:</strong> how much you keep adding.</li>
            <li><strong>Expected return:</strong> your assumed annual investment growth.</li>
            <li><strong>Inflation:</strong> the rising cost of future spending.</li>
            <li><strong>Retirement age:</strong> when you plan to stop working or reduce work.</li>
            <li><strong>Spending goal:</strong> your desired annual retirement lifestyle cost.</li>
          </ul>
        </div>

        <div id="canada-vs-us" className="pillar-section">
          <h2>Canada vs U.S. Retirement Planning</h2>
          <p>
            The retirement math is similar in both countries, but the account systems are different. Canadian planning often includes TFSA, RRSP, pensions, CPP, OAS, FHSA, and non-registered accounts. U.S. planning often includes 401(k), IRA, Roth IRA, pensions, Social Security, and taxable brokerage accounts.
          </p>
          <p>
            This calculator gives a directional estimate, not a tax plan. For deeper strategy, read BankDeMark’s{" "}
            <Link href="/pillars/financial-freedom">financial freedom guide</Link>,{" "}
            <Link href="/pillars/investing">investing guide</Link>, and{" "}
            <Link href="/pillars/personal-finance">personal finance guide</Link>.
          </p>
        </div>

        <div id="retirement-number" className="pillar-section">
          <h2>How to Estimate Your Retirement Number</h2>
          <p>
            A common starting point is the 25x rule: multiply your desired annual retirement spending by 25. For example, if you want $60,000 per year, a simple target would be about $1.5 million. This is only a rough planning shortcut.
          </p>
          <p>
            Your true retirement number can change based on taxes, housing costs, investment returns, pensions, government benefits, healthcare, debt, family needs, and whether you continue earning income in retirement.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Retirement Planning Mistakes</h2>
          <ul>
            <li>Starting too late and relying on large future contributions.</li>
            <li>Ignoring inflation and rising living costs.</li>
            <li>Using return assumptions that are too optimistic.</li>
            <li>Forgetting taxes, healthcare, housing, and emergency costs.</li>
            <li>Failing to account for market volatility near retirement.</li>
            <li>Assuming retirement projections are guarantees.</li>
          </ul>
        </div>

        <div className="pillar-section">
          <h2>Build the Full BankDeMark Retirement System</h2>
          <p>
            This calculator is part of BankDeMark’s financial freedom system. Use it with the investing, personal finance, banking, debt, and compound growth calculators to build a stronger long-term plan.
          </p>
          <ul>
            <li><Link href="/">Return to the BankDeMark homepage</Link></li>
            <li><Link href="/pillars/financial-freedom">Read the financial freedom guide</Link></li>
            <li><Link href="/pillars/investing">Read the investing guide</Link></li>
            <li><Link href="/calculators/investment-calculator">Use the investment calculator</Link></li>
            <li><Link href="/calculators/compound-interest-calculator">Use the compound interest calculator</Link></li>
            <li><Link href="/contact">Join the newsletter</Link></li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Retirement Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/retirement-calculator" />

      <CTABanner
        title="Turn retirement goals into a financial freedom system."
        sub="Use BankDeMark calculators and finance pillars to compare saving, investing, debt, banking, and long-term wealth decisions."
        btnText="Join the Newsletter"
        btnHref="/contact"
      />
    </>
  );
}
