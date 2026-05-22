import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import InvestmentCalculator from "../../components/InvestmentCalculator";

export const metadata = {
  title: "Investment Calculator | Free Portfolio Growth Calculator",
  description:
    "Use BankDeMark's free investment calculator to estimate portfolio growth, monthly contributions, investment returns, fees, taxes, and long-term wealth building in Canada or the U.S.",
  alternates: {
    canonical: "/calculators/investment-calculator",
  },
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
    q: "Is this investment calculator for Canada and the U.S.?",
    a: "Yes. You can switch between Canada and the United States. The calculator changes the displayed country, flag, currency, and account examples.",
  },
  {
    q: "What return should I use?",
    a: "Use a conservative long-term assumption. Many investors test multiple scenarios such as 4%, 6%, 7%, or 8% instead of relying on one optimistic number.",
  },
];

export default function InvestmentCalculatorPage() {
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
    name: "How to use an investment calculator",
    description:
      "Estimate future portfolio value using starting balance, monthly contributions, expected return, timeline, investment fees, and tax drag.",
    step: [
      { "@type": "HowToStep", name: "Choose Canada or the United States" },
      { "@type": "HowToStep", name: "Enter your starting investment" },
      { "@type": "HowToStep", name: "Add your monthly contribution" },
      { "@type": "HowToStep", name: "Choose an expected annual return" },
      { "@type": "HowToStep", name: "Add fees or tax drag if needed" },
      { "@type": "HowToStep", name: "Review projected portfolio value" },
    ],
  };

  return (
    <>
      <Script
        id="investment-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="investment-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>Investment Calculator</h1>
        <p>
          Estimate future portfolio value, compare contribution strategies, and see how fees, taxes, and time affect long-term wealth.
        </p>
      </div>

      <div className="pillar-page">
        <InvestmentCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-an-investment-calculator">What an investment calculator is</a></li>
            <li><a href="#how-investment-growth-works">How investment growth works</a></li>
            <li><a href="#canada-vs-us">Canada vs U.S. investment planning</a></li>
            <li><a href="#fees-and-taxes">Fees and taxes</a></li>
            <li><a href="#mistakes">Common investment mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-an-investment-calculator" className="pillar-section">
          <h2>What Is an Investment Calculator?</h2>
          <p>
            An investment calculator estimates how your money may grow over time when you combine a starting balance, recurring contributions, an expected annual return, and a long-term timeline. It helps connect today’s investing habits with future portfolio value.
          </p>
          <p>
            BankDeMark’s investment calculator is built for both Canadian and U.S. planning. You can switch between Canada and the United States to view CAD or USD projections and account examples that match the selected market.
          </p>
        </div>

        <div id="how-investment-growth-works" className="pillar-section">
          <h2>How Investment Growth Works</h2>
          <p>
            Investment growth usually comes from capital appreciation, dividends, interest, and reinvested returns. Over long periods, consistent contributions and time in the market often matter more than trying to perfectly time short-term moves.
          </p>
          <ul>
            <li><strong>Starting investment:</strong> your current portfolio or initial deposit.</li>
            <li><strong>Monthly contribution:</strong> the amount you invest consistently.</li>
            <li><strong>Expected return:</strong> your assumed average annual investment growth.</li>
            <li><strong>Timeline:</strong> how many years the money remains invested.</li>
            <li><strong>Fees:</strong> MERs, fund fees, advisory fees, or platform costs.</li>
            <li><strong>Tax drag:</strong> optional reduction for taxable account friction.</li>
          </ul>
        </div>

        <div id="canada-vs-us" className="pillar-section">
          <h2>Canada vs U.S. Investment Planning</h2>
          <p>
            The core math behind investment growth is similar in Canada and the United States, but the account systems are different. Canadian investors often compare TFSA, RRSP, FHSA, RESP, and non-registered accounts. U.S. investors often compare 401(k), IRA, Roth IRA, and taxable brokerage accounts.
          </p>
          <p>
            The calculator does not replace tax planning, but it helps visualize how contributions, fees, and time can change the final outcome. For deeper strategy, read BankDeMark’s{" "}
            <Link href="/pillars/investing">investing guide</Link> and{" "}
            <Link href="/pillars/personal-finance">personal finance guide</Link>.
          </p>
        </div>

        <div id="fees-and-taxes" className="pillar-section">
          <h2>Why Fees and Taxes Matter</h2>
          <p>
            Small annual fees can become large over decades because they reduce the amount of money left to compound. A 1% difference in annual cost may look small in one year, but over 20 or 30 years it can create a major difference in final portfolio value.
          </p>
          <p>
            Tax drag can also reduce real-world returns in taxable accounts. Tax-advantaged accounts may reduce or delay this drag, depending on the country, account type, contribution rules, and withdrawal rules.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Investment Calculator Mistakes</h2>
          <ul>
            <li>Using overly optimistic return assumptions.</li>
            <li>Ignoring fees, MERs, advisory costs, and platform costs.</li>
            <li>Forgetting that taxable accounts may grow differently than tax-sheltered accounts.</li>
            <li>Stopping contributions during volatility.</li>
            <li>Comparing investments without considering risk.</li>
            <li>Assuming projections are guarantees.</li>
          </ul>
        </div>

        <div className="pillar-section">
          <h2>Build the Full BankDeMark Investing System</h2>
          <p>
            This calculator is part of BankDeMark’s financial intelligence system. Use it with the investing, personal finance, banking, debt, and financial freedom pillars to build a stronger long-term plan.
          </p>
          <ul>
            <li><Link href="/">Return to the BankDeMark homepage</Link></li>
            <li><Link href="/pillars/investing">Read the investing guide</Link></li>
            <li><Link href="/calculators/compound-interest-calculator">Use the compound interest calculator</Link></li>
            <li><Link href="/calculators/mortgage-calculator">Use the mortgage calculator</Link></li>
            <li><Link href="/contact">Join the newsletter</Link></li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Investment Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner
        title="Turn investment projections into a real money system."
        sub="Use BankDeMark calculators and finance pillars to compare investing, saving, debt, banking, and long-term wealth decisions."
        btnText="Join the Newsletter"
        btnHref="/contact"
      />
    </>
  );
}
