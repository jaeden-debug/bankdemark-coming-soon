import Link from "next/link";
import Script from "next/script";
import MortgageCalculator from "../../components/MortgageCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Mortgage Calculator | Monthly Mortgage Payment Calculator",
  description:
    "Use BankDeMark's mortgage calculator to estimate monthly payments, loan amount, interest, property taxes, insurance, and total home ownership cost.",
  alternates: { canonical: "/calculators/mortgage-calculator" },
};

const faq = [
  {
    q: "What is a mortgage calculator?",
    a: "A mortgage calculator estimates your monthly home loan payment based on home price, down payment, interest rate, loan term, property taxes, insurance, and optional HOA or condo fees.",
  },
  {
    q: "How is a mortgage payment calculated?",
    a: "A mortgage payment is usually calculated using the loan amount, interest rate, and repayment term. A fuller estimate also includes property tax, insurance, and monthly fees.",
  },
  {
    q: "Does this calculator include property taxes and insurance?",
    a: "Yes. This calculator includes optional fields for annual property taxes, annual home insurance, and monthly HOA or condo fees.",
  },
  {
    q: "What is included in a full monthly housing payment?",
    a: "A full monthly housing payment may include principal, interest, property taxes, homeowners insurance, mortgage insurance, HOA or condo fees, utilities, maintenance, and repairs.",
  },
];

export default async function MortgageCalculatorPage({ searchParams }) {
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
    name: "How to use a mortgage calculator",
    description:
      "Estimate monthly mortgage payments using home price, down payment, interest rate, loan term, taxes, insurance, and monthly fees.",
    step: [
      { "@type": "HowToStep", name: "Enter the home price" },
      { "@type": "HowToStep", name: "Add your down payment" },
      { "@type": "HowToStep", name: "Choose your mortgage interest rate" },
      { "@type": "HowToStep", name: "Select the loan term or amortization period" },
      { "@type": "HowToStep", name: "Add property taxes, insurance, and HOA or condo fees" },
      { "@type": "HowToStep", name: "Review the estimated monthly mortgage payment" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Mortgage Calculator",
    url: "https://bankdemark.com/calculators/mortgage-calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="mortgage-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="mortgage-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="mortgage-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <MortgageCalculator />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-a-mortgage-calculator">What is a mortgage calculator?</a>
          <a href="#how-payments-work">How mortgage payments work</a>
          <a href="#mortgage-formula">Mortgage payment formula</a>
          <a href="#ownership-costs">Costs beyond the mortgage</a>
          <a href="#mortgage-mistakes">Common mistakes</a>
          <a href="#mortgage-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-a-mortgage-calculator">
            <span className="calculator-seo-kicker">Mortgage Calculator</span>
            <h2>What Is a Mortgage Calculator?</h2>
            <p>
              A mortgage calculator estimates the monthly cost of buying a home using home price,
              down payment, interest rate, repayment timeline, property taxes, insurance, and monthly fees.
            </p>
            <p>
              BankDeMark’s mortgage calculator helps you understand the full payment picture before committing
              to a property, so you can compare affordability, cash flow, debt load, and long-term wealth impact.
            </p>
          </section>

          <section id="how-payments-work">
            <h2>How Mortgage Payments Work</h2>
            <p>
              A mortgage payment is usually built around principal and interest. Principal reduces the loan balance.
              Interest is the cost of borrowing money. A realistic housing estimate should also include ownership costs.
            </p>

            <div className="seo-two-column">
              <div><h3>Home price</h3><p>The purchase price of the property.</p></div>
              <div><h3>Down payment</h3><p>The cash you pay upfront before financing.</p></div>
              <div><h3>Loan amount</h3><p>The home price minus down payment, plus any applicable insurance premium.</p></div>
              <div><h3>Interest rate</h3><p>The annual rate charged by the lender.</p></div>
            </div>
          </section>

          <section id="mortgage-formula">
            <h2>Mortgage Payment Formula</h2>
            <div className="formula-card">
              <strong>M = P[r(1 + r)^n] / [(1 + r)^n - 1]</strong>
              <p>
                M is the monthly principal and interest payment, P is the loan principal,
                r is the monthly interest rate, and n is the number of monthly payments.
              </p>
            </div>
          </section>

          <section id="ownership-costs">
            <h2>Costs Beyond the Mortgage Payment</h2>
            <p>
              Many buyers only look at principal and interest. The real ownership stack can include taxes,
              insurance, mortgage insurance, HOA or condo fees, utilities, repairs, maintenance, and closing costs.
            </p>
            <p>
              Pair this with the{" "}
              <Link href="/calculators/rent-vs-buy-calculator">rent vs buy calculator</Link>,{" "}
              <Link href="/calculators/budget-calculator">budget calculator</Link>,{" "}
              <Link href="/pillars/banking">banking guide</Link>, and{" "}
              <Link href="/pillars/personal-finance">personal finance guide</Link>.
            </p>
          </section>

          <section id="mortgage-mistakes">
            <h2>Common Mortgage Calculator Mistakes</h2>
            <ul className="seo-steps">
              <li>Shopping for the maximum approval instead of a comfortable payment.</li>
              <li>Ignoring taxes, insurance, repairs, utilities, and maintenance.</li>
              <li>Using a low rate without stress-testing higher rates.</li>
              <li>Forgetting closing costs and emergency savings.</li>
              <li>Buying before fixing high-interest debt and cash flow problems.</li>
            </ul>
          </section>

          <section id="mortgage-faq">
            <h2>Mortgage Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/mortgage-calculator" />
    </>
  );
}
