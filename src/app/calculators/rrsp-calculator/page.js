import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import RegisteredAccountCalculator from "../../components/RegisteredAccountCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";

export const metadata = {
  title: "RRSP Calculator Canada | Free RRSP Contribution & Tax Refund Calculator",
  description:
    "Use BankDeMark's free RRSP calculator for Canada to estimate RRSP contribution room, tax refund potential, projected RRSP growth, and retirement planning strategy.",
  alternates: {
    canonical: "/calculators/rrsp-calculator",
  },
};

const faq = [
  {
    q: "What is an RRSP calculator?",
    a: "An RRSP calculator estimates RRSP contribution room, potential tax refund, projected account value, and tax-deferred retirement growth.",
  },
  {
    q: "How much can I contribute to my RRSP?",
    a: "Your RRSP contribution room is generally based on 18% of earned income from the previous year, up to the annual dollar limit, plus unused room and adjusted by pension factors.",
  },
  {
    q: "Does an RRSP contribution create a tax refund?",
    a: "An RRSP contribution may reduce taxable income and create a refund or reduce tax owing, depending on your income, marginal tax rate, and other deductions.",
  },
  {
    q: "Is an RRSP better than a TFSA?",
    a: "An RRSP is often useful when you are in a higher tax bracket today and expect a lower tax bracket later. A TFSA is often useful for flexible tax-free growth and withdrawals.",
  },
];

export default function RRSPCalculatorPage() {
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
    name: "How to use an RRSP calculator",
    description:
      "Estimate RRSP contribution room, tax refund potential, and projected retirement growth.",
    step: [
      { "@type": "HowToStep", name: "Enter your annual income" },
      { "@type": "HowToStep", name: "Add current RRSP balance" },
      { "@type": "HowToStep", name: "Enter planned contribution" },
      { "@type": "HowToStep", name: "Add unused contribution room" },
      { "@type": "HowToStep", name: "Set return, timeline, and tax rate" },
      { "@type": "HowToStep", name: "Review projected RRSP value and refund estimate" },
    ],
  };

  return (
    <>
      <Script id="rrsp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rrsp-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-hero">
        <p className="eyebrow">Canada Finance Calculator</p>
        <h1>RRSP Calculator Canada</h1>
        <p>
          Estimate RRSP contribution room, tax refund potential, tax-deferred growth, and long-term retirement value.
        </p>
      </div>

      <div className="pillar-page">
        <RegisteredAccountCalculator mode="rrsp" />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-an-rrsp-calculator">What an RRSP calculator is</a></li>
            <li><a href="#how-rrsps-work">How RRSPs work</a></li>
            <li><a href="#rrsp-vs-tfsa">RRSP vs TFSA</a></li>
            <li><a href="#mistakes">Common RRSP mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-an-rrsp-calculator" className="pillar-section">
          <h2>What Is an RRSP Calculator?</h2>
          <p>
            An RRSP calculator helps Canadian investors estimate how much they may be able to contribute, how much tax relief they may receive, and how their RRSP could grow over time.
          </p>
          <p>
            BankDeMark’s RRSP calculator is designed for retirement planning, tax strategy, and long-term wealth building in Canada.
          </p>
        </div>

        <div id="how-rrsps-work" className="pillar-section">
          <h2>How RRSPs Work</h2>
          <p>
            RRSP contributions may reduce taxable income today. Investments inside the RRSP grow tax-deferred, and withdrawals are taxable later.
          </p>
          <ul>
            <li><strong>Contribution room:</strong> based on CRA limits, earned income, unused room, and adjustments.</li>
            <li><strong>Tax refund:</strong> depends on your marginal tax rate.</li>
            <li><strong>Tax-deferred growth:</strong> investments compound without annual tax inside the account.</li>
            <li><strong>Withdrawals:</strong> generally taxable as income.</li>
          </ul>
        </div>

        <div id="rrsp-vs-tfsa" className="pillar-section">
          <h2>RRSP vs TFSA</h2>
          <p>
            RRSPs are often powerful for high-income years because they may create a deduction. TFSAs are powerful because withdrawals are generally tax-free and flexible.
          </p>
          <p>
            Compare this with the <Link href="/calculators/tfsa-calculator">TFSA calculator</Link>,{" "}
            <Link href="/calculators/retirement-calculator">retirement calculator</Link>, and{" "}
            <Link href="/pillars/financial-freedom">financial freedom guide</Link>.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common RRSP Mistakes</h2>
          <ul>
            <li>Contributing without checking exact CRA room.</li>
            <li>Spending the tax refund instead of reinvesting it.</li>
            <li>Ignoring future withdrawal tax.</li>
            <li>Using RRSPs before understanding TFSA strategy.</li>
            <li>Assuming RRSP contributions are always better than TFSA contributions.</li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>RRSP Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/rrsp-calculator" />

      <CTABanner
        title="Turn RRSP planning into a retirement system."
        sub="Use BankDeMark calculators and finance pillars to compare RRSPs, TFSAs, investing, taxes, and financial freedom."
        btnText="Join the Newsletter"
        btnHref="/contact"
      />
    </>
  );
}
