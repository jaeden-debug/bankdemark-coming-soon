import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import RentVsBuyCalculator from "../../components/RentVsBuyCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import GlobalCalculatorShare from "@/app/components/GlobalCalculatorShare";

export const metadata = {
  title: "Rent vs Buy Calculator | Should You Rent or Buy?",
  description:
    "Use BankDeMark's free rent vs buy calculator to compare renting versus buying a home, including mortgage payments, rent increases, property taxes, home growth, investment returns, and long-term net worth.",
  alternates: {
    canonical: "/calculators/rent-vs-buy-calculator",
  },
};

const faq = [
  {
    q: "What is a rent vs buy calculator?",
    a: "A rent vs buy calculator compares the long-term cost and wealth impact of renting a home versus buying a home.",
  },
  {
    q: "Is buying always better than renting?",
    a: "No. Buying can build equity, but renting can be better if home costs are high, ownership is short-term, investment returns are strong, or flexibility matters.",
  },
  {
    q: "What costs should I include when comparing rent vs buy?",
    a: "Include mortgage payments, down payment, property tax, insurance, maintenance, rent increases, home appreciation, investment returns, and the time horizon.",
  },
  {
    q: "Does this calculator work for Canada and the United States?",
    a: "Yes. You can switch between Canada and the United States to show CAD or USD estimates.",
  },
];

export default function RentVsBuyCalculatorPage() {
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
    name: "How to use a rent vs buy calculator",
    description:
      "Compare renting and buying using home price, down payment, mortgage rate, rent, property taxes, maintenance, home growth, and investment return assumptions.",
    step: [
      { "@type": "HowToStep", name: "Enter home purchase details" },
      { "@type": "HowToStep", name: "Enter rent details" },
      { "@type": "HowToStep", name: "Choose growth and return assumptions" },
      { "@type": "HowToStep", name: "Set your time horizon" },
      { "@type": "HowToStep", name: "Compare owner equity and renter investment value" },
    ],
  };

  return (
    <>
      <Script
        id="rent-buy-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="rent-buy-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero rentbuy-page-hero">
        <p className="eyebrow">Housing Decision Tool</p>
        <h1>Rent vs Buy Calculator</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>
          Compare renting versus buying a home and estimate which path may build
          more wealth over time.
        </p>
      </div>

      <div className="pillar-page">
        <RentVsBuyCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-rent-vs-buy">What rent vs buy means</a></li>
            <li><a href="#buying-costs">Buying costs</a></li>
            <li><a href="#renting-costs">Renting costs</a></li>
            <li><a href="#which-is-better">Which option is better?</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-rent-vs-buy" className="pillar-section">
          <h2>What Is a Rent vs Buy Calculator?</h2>
          <p>
            A rent vs buy calculator compares the financial outcome of renting
            versus buying. It estimates owner equity, renter investment value,
            mortgage payments, housing costs, and the long-term difference
            between both choices.
          </p>
        </div>

        <div id="buying-costs" className="pillar-section">
          <h2>Buying Costs to Include</h2>
          <p>
            Buying is not just the mortgage payment. Ownership can also include
            property taxes, insurance, maintenance, repairs, closing costs, condo
            or HOA fees, and transaction costs when selling.
          </p>
          <p>
            Pair this with the <Link href="/calculators/mortgage-calculator">Mortgage Calculator</Link> for a deeper monthly payment estimate.
          </p>
        </div>

        <div id="renting-costs" className="pillar-section">
          <h2>Renting Costs to Include</h2>
          <p>
            Renting usually has lower upfront costs and more flexibility. The key
            question is what happens to the money that would have gone toward a
            down payment and ownership costs. If that money is invested
            consistently, renting can sometimes compete with buying.
          </p>
        </div>

        <div id="which-is-better" className="pillar-section">
          <h2>Renting vs Buying: Which Is Better?</h2>
          <p>
            Buying may be better when you stay long enough, housing costs are
            reasonable, and the home appreciates. Renting may be better when
            prices are stretched, flexibility matters, or investing the
            difference produces stronger long-term results.
          </p>
          <p>
            For a full plan, use the <Link href="/money-health-score">Money Health Score</Link>,{" "}
            <Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link>, and{" "}
            <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link>.
          </p>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Rent vs Buy Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/rent-vs-buy-calculator" />

      <CTABanner
        title="Turn housing decisions into a wealth-building system."
        sub="Use BankDeMark calculators and finance pillars to compare housing, cash flow, investing, debt, and financial freedom."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
    </>
  );
}
