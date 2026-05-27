import Link from "next/link";
import Script from "next/script";
import RentVsBuyCalculator from "../../components/RentVsBuyCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Rent vs Buy Calculator | Should You Rent or Buy?",
  description:
    "Use BankDeMark's rent vs buy calculator to compare renting versus buying, mortgage payments, home equity, investment value, and long-term wealth impact.",
  alternates: { canonical: "/calculators/rent-vs-buy-calculator" },
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
    q: "How do I know if renting or buying is better?",
    a: "The better option depends on home price, rent, interest rates, time horizon, maintenance, taxes, investment return, and how long you plan to stay.",
  },
];

export default async function RentVsBuyCalculatorPage({ searchParams }) {
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

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Rent vs Buy Calculator",
    url: "https://bankdemark.com/calculators/rent-vs-buy-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="rent-buy-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rent-buy-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="rent-buy-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <RentVsBuyCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-rent-vs-buy">What is a rent vs buy calculator?</a>
          <a href="#buying-costs">Buying costs</a>
          <a href="#renting-costs">Renting costs</a>
          <a href="#which-is-better">Which option is better?</a>
          <a href="#rent-buy-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-rent-vs-buy">
            <span className="calculator-seo-kicker">Housing Calculator</span>
            <h2>What Is a Rent vs Buy Calculator?</h2>
            <p>
              A rent vs buy calculator compares the financial outcome of renting versus buying.
              It estimates owner equity, renter investment value, mortgage payments, housing costs,
              and the long-term difference between both choices.
            </p>
          </section>

          <section id="buying-costs">
            <h2>Buying Costs to Include</h2>
            <p>
              Buying is not just the mortgage payment. Ownership can include property taxes,
              insurance, maintenance, repairs, closing costs, condo or HOA fees, and transaction costs.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/calculators/mortgage-calculator">mortgage calculator</Link>,{" "}
              <Link href="/calculators/budget-calculator">budget calculator</Link>, and{" "}
              <Link href="/pillars/banking">banking guide</Link>.
            </p>
          </section>

          <section id="renting-costs">
            <h2>Renting Costs to Include</h2>
            <p>
              Renting usually has lower upfront costs and more flexibility. The key question is what happens
              to the money that would have gone toward a down payment and ownership costs. If that money is
              invested consistently, renting can sometimes compete with buying.
            </p>
          </section>

          <section id="which-is-better">
            <h2>Renting vs Buying: Which Is Better?</h2>
            <div className="seo-two-column">
              <div><h3>Buying may win when</h3><p>You stay long enough, housing costs are reasonable, and the property appreciates.</p></div>
              <div><h3>Renting may win when</h3><p>Prices are stretched, flexibility matters, or investing the difference creates stronger returns.</p></div>
            </div>
            <p>
              For a full plan, use the{" "}
              <Link href="/money-health-score">Money Health Score</Link>,{" "}
              <Link href="/financial-freedom-roadmap">Financial Freedom Roadmap</Link>, and{" "}
              <Link href="/calculators/net-worth-calculator">Net Worth Calculator</Link>.
            </p>
          </section>

          <section id="rent-buy-faq">
            <h2>Rent vs Buy Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/rent-vs-buy-calculator" />
    </>
  );
}
