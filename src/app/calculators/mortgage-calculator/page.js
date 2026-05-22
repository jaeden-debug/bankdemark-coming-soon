import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import MortgageCalculator from "../../components/MortgageCalculator";

export const metadata = {
  title: "Mortgage Calculator | Free Monthly Mortgage Payment Calculator",
  description:
    "Use BankDeMark's free mortgage calculator to estimate monthly mortgage payments, interest, property taxes, home insurance, down payment, and total loan cost.",
  alternates: {
    canonical: "/calculators/mortgage-calculator",
  },
};

const faq = [
  {
    q: "What is a mortgage calculator?",
    a: "A mortgage calculator estimates your monthly home loan payment based on home price, down payment, interest rate, loan term, property taxes, insurance, and optional HOA fees.",
  },
  {
    q: "How is a mortgage payment calculated?",
    a: "A mortgage payment is usually calculated using the loan amount, interest rate, and loan term. Many estimates also include property tax, homeowners insurance, and HOA or condo fees.",
  },
  {
    q: "Does this calculator include property taxes and insurance?",
    a: "Yes. This calculator includes optional fields for annual property taxes, annual home insurance, and monthly HOA or condo fees so the estimate is closer to a real monthly housing cost.",
  },
  {
    q: "What is included in a monthly mortgage payment?",
    a: "A full housing payment may include principal, interest, property taxes, homeowners insurance, mortgage insurance, HOA fees, utilities, maintenance, and repairs.",
  },
];

export default function MortgageCalculatorPage() {
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
    name: "How to use a mortgage calculator",
    description:
      "Estimate your monthly mortgage payment using home price, down payment, interest rate, loan term, taxes, insurance, and HOA fees.",
    step: [
      { "@type": "HowToStep", name: "Enter the home price" },
      { "@type": "HowToStep", name: "Add your down payment" },
      { "@type": "HowToStep", name: "Choose your mortgage interest rate" },
      { "@type": "HowToStep", name: "Select the loan term" },
      { "@type": "HowToStep", name: "Add property taxes, insurance, and HOA fees" },
      { "@type": "HowToStep", name: "Review your estimated monthly mortgage payment" },
    ],
  };

  return (
    <>
      <Script id="mortgage-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="mortgage-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-hero">
        <p className="eyebrow">Free Finance Calculator</p>
        <h1>Mortgage Calculator</h1>
        <p>
          Estimate your monthly mortgage payment, compare loan scenarios, and understand the real cost of buying a home.
        </p>
      </div>

      <div className="pillar-page">
        <MortgageCalculator />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-mortgage-calculator">What a mortgage calculator is</a></li>
            <li><a href="#how-payments-work">How mortgage payments work</a></li>
            <li><a href="#formula">Mortgage payment formula</a></li>
            <li><a href="#costs">Costs beyond the mortgage</a></li>
            <li><a href="#mistakes">Common mortgage mistakes</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-mortgage-calculator" className="pillar-section">
          <h2>What Is a Mortgage Calculator?</h2>
          <p>
            A mortgage calculator helps estimate the monthly cost of buying a home. It uses your home price, down payment, mortgage rate, and loan term to estimate principal and interest. A stronger calculator also includes property taxes, home insurance, and HOA or condo fees.
          </p>
          <p>
            BankDeMark’s mortgage calculator is designed to help you see the full picture before committing to a property. The monthly payment is only one part of home ownership. The real goal is to understand affordability, cash flow, risk, and long-term wealth impact.
          </p>
        </div>

        <div id="how-payments-work" className="pillar-section">
          <h2>How Mortgage Payments Work</h2>
          <p>
            A mortgage payment is usually built around principal and interest. Principal reduces the loan balance. Interest is the cost of borrowing money. Early in the loan, more of the payment usually goes toward interest. Later, more of it goes toward principal.
          </p>
          <ul>
            <li><strong>Home price:</strong> the purchase price of the property.</li>
            <li><strong>Down payment:</strong> the cash you pay upfront.</li>
            <li><strong>Loan amount:</strong> the home price minus the down payment.</li>
            <li><strong>Interest rate:</strong> the annual rate charged by the lender.</li>
            <li><strong>Loan term:</strong> how long you take to repay the mortgage.</li>
            <li><strong>Taxes and insurance:</strong> ongoing ownership costs often paid monthly.</li>
          </ul>
        </div>

        <div id="formula" className="pillar-section">
          <h2>Mortgage Payment Formula</h2>
          <p>The standard mortgage payment formula is:</p>
          <p><strong>M = P[r(1 + r)^n] / [(1 + r)^n - 1]</strong></p>
          <ul>
            <li><strong>M</strong> = monthly principal and interest payment</li>
            <li><strong>P</strong> = loan principal</li>
            <li><strong>r</strong> = monthly interest rate</li>
            <li><strong>n</strong> = number of monthly payments</li>
          </ul>
          <p>
            This formula estimates principal and interest. To estimate real monthly housing cost, add property tax, home insurance, mortgage insurance if required, HOA or condo fees, utilities, maintenance, and repair reserves.
          </p>
        </div>

        <div id="costs" className="pillar-section">
          <h2>Costs Beyond the Mortgage Payment</h2>
          <p>
            Many buyers only look at the mortgage payment and forget the ownership stack. A house can look affordable on paper but become stressful when taxes, insurance, maintenance, utilities, repairs, and emergency expenses are included.
          </p>
          <ul>
            <li>Property taxes</li>
            <li>Homeowners insurance</li>
            <li>Mortgage insurance or default insurance</li>
            <li>HOA, condo, or association fees</li>
            <li>Repairs and maintenance</li>
            <li>Utilities and heating costs</li>
            <li>Closing costs and moving costs</li>
          </ul>
          <p>
            For a stronger financial system, use this with BankDeMark’s{" "}
            <Link href="/pillars/personal-finance">personal finance guide</Link>,{" "}
            <Link href="/pillars/banking">banking guide</Link>, and{" "}
            <Link href="/pillars/debt-management">debt management guide</Link>.
          </p>
        </div>

        <div id="mistakes" className="pillar-section">
          <h2>Common Mortgage Mistakes</h2>
          <ul>
            <li>Shopping for the maximum approval instead of a comfortable payment.</li>
            <li>Ignoring taxes, insurance, repairs, and utilities.</li>
            <li>Using a low teaser rate without stress-testing higher rates.</li>
            <li>Forgetting closing costs and emergency savings.</li>
            <li>Assuming the cheapest monthly payment is always the best option.</li>
            <li>Buying before fixing high-interest debt and cash flow problems.</li>
          </ul>
        </div>

        <div className="pillar-section">
          <h2>Build a Smarter Home Buying System</h2>
          <p>
            A mortgage is one of the biggest financial decisions most people make. Use this calculator as a starting point, then build a complete plan around income, debt, savings, credit, banking, investing, and long-term freedom.
          </p>
          <ul>
            <li><Link href="/">Return to the BankDeMark homepage</Link></li>
            <li><Link href="/pillars">Explore all finance pillars</Link></li>
            <li><Link href="/calculators/compound-interest-calculator">Use the compound interest calculator</Link></li>
            <li><Link href="/contact">Join the newsletter</Link></li>
          </ul>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Mortgage Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <CTABanner
        title="Make the mortgage decision part of the full money system."
        sub="Use BankDeMark calculators and finance pillars to compare debt, banking, investing, and long-term wealth decisions."
        btnText="Join the Newsletter"
        btnHref="/contact"
      />
    </>
  );
}
