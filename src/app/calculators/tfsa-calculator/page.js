import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import RegisteredAccountCalculator from "../../components/RegisteredAccountCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import GlobalCalculatorShare from "@/app/components/GlobalCalculatorShare";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "TFSA Calculator Canada | Free TFSA Contribution & Growth Calculator",
  description:
    "Use BankDeMark's free TFSA calculator for Canada to estimate TFSA contribution room, tax-free investment growth, projected account value, and long-term savings strategy.",
  alternates: {
    canonical: "/calculators/tfsa-calculator",
  },
};

const faq = [
  {
    q: "What is a TFSA calculator?",
    a: "A TFSA calculator estimates TFSA contribution room, projected tax-free growth, and future account value based on contributions, current balance, return, and timeline.",
  },
  {
    q: "What is the TFSA limit for 2026?",
    a: "The 2026 TFSA dollar limit is $7,000. Unused contribution room can carry forward if you were eligible.",
  },
  {
    q: "Are TFSA withdrawals taxable?",
    a: "Eligible TFSA withdrawals are generally tax-free. Withdrawn amounts are added back to contribution room on January 1 of the following year.",
  },
  {
    q: "Is a TFSA better than an RRSP?",
    a: "A TFSA may be better for flexible tax-free withdrawals, while an RRSP may be better when tax deductions are valuable. The best choice depends on income, tax bracket, goals, and timeline.",
  },
];

export default async function TFSACalculatorPage({ searchParams }) {
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
    name: "How to use a TFSA calculator",
    description:
      "Estimate TFSA contribution room, tax-free growth, and projected account value.",
    step: [
      { "@type": "HowToStep", name: "Enter current TFSA balance" },
      { "@type": "HowToStep", name: "Enter planned contribution" },
      { "@type": "HowToStep", name: "Add unused contribution room" },
      { "@type": "HowToStep", name: "Set expected return and timeline" },
      { "@type": "HowToStep", name: "Review projected TFSA value and tax-free growth" },
    ],
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />
      <Script id="tfsa-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="tfsa-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-hero">
        <p className="eyebrow">Canada Finance Calculator</p>
        <h1>TFSA Calculator Canada</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>
          Estimate TFSA contribution room, tax-free growth, and long-term account value for Canadian investors.
        </p>
      </div>

      <div className="pillar-page">
        <RegisteredAccountCalculator mode="tfsa" />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-tfsa-calculator">What a TFSA calculator is</a></li>
            <li><a href="#how-tfsas-work">How TFSAs work</a></li>
            <li><a href="#tfsa-vs-rrsp">TFSA vs RRSP</a></li>
            <li><a href="#mistakes">Common TFSA mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-tfsa-calculator" className="pillar-section">
          <h2>What Is a TFSA Calculator?</h2>
          <p>
            A TFSA calculator helps Canadians estimate contribution room, projected tax-free growth, and future account value.
          </p>
          <p>
            BankDeMark’s TFSA calculator is built for flexible savings, investing, tax-free compounding, and long-term Canadian wealth planning.
          </p>
        </div>

        <div id="how-tfsas-work" className="pillar-section">
          <h2>How TFSAs Work</h2>
          <p>
            TFSA contributions are not tax-deductible, but eligible growth and withdrawals are generally tax-free. This makes the TFSA one of Canada’s most flexible wealth-building accounts.
          </p>
          <ul>
            <li><strong>Contribution room:</strong> annual limits plus unused room and eligible re-contribution room.</li>
            <li><strong>Tax-free growth:</strong> eligible investment gains are sheltered from tax.</li>
            <li><strong>Withdrawals:</strong> generally tax-free.</li>
            <li><strong>Re-contribution:</strong> withdrawn amounts return to room the following January 1.</li>
          </ul>
        </div>

        <div id="tfsa-vs-rrsp" className="pillar-section">
          <h2>TFSA vs RRSP</h2>
          <p>
            A TFSA is often better for flexibility, tax-free withdrawals, emergency funds, medium-term goals, and long-term investing. An RRSP may be better when the tax deduction is valuable.
          </p>
          <p>
            Compare this with the <Link href="/calculators/rrsp-calculator">RRSP calculator</Link>,{" "}
            <Link href="/calculators/investment-calculator">investment calculator</Link>, and{" "}
            <Link href="/pillars/investing">investing guide</Link>.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common TFSA Mistakes</h2>
          <ul>
            <li>Contributing without checking available room.</li>
            <li>Re-contributing withdrawals too early.</li>
            <li>Using the TFSA only as a savings account when investing may fit long-term goals.</li>
            <li>Over-contributing and creating penalties.</li>
            <li>Ignoring the TFSA when building a retirement plan.</li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>TFSA Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/tfsa-calculator" />

      <CTABanner
        title="Turn TFSA room into tax-free growth."
        sub="Use BankDeMark calculators and finance pillars to compare TFSAs, RRSPs, investing, savings, and financial freedom."
        btnText="Join the Newsletter"
        btnHref="/contact"
      />
          <GlobalCalculatorShare />
    </>
  );
}
