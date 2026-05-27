import Link from "next/link";
import Script from "next/script";
import CompoundInterestCalculator from "../../components/CompoundInterestCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "Compound Interest Calculator | Free Growth Calculator",
  description:
    "Use BankDeMark's compound interest calculator to estimate future value, monthly contributions, investment growth, savings growth, and long-term compounding.",
  alternates: { canonical: "/calculators/compound-interest-calculator" },
};

const faq = [
  { q: "What is a compound interest calculator?", a: "A compound interest calculator estimates how money grows when interest, dividends, or investment returns are reinvested over time." },
  { q: "How do you calculate compound interest?", a: "Compound interest is calculated by applying growth to the starting principal plus accumulated growth over repeated compounding periods." },
  { q: "Is compound interest only for investing?", a: "No. Compound interest can apply to savings accounts, high-interest savings, CDs, retirement accounts, ETFs, index funds, and long-term portfolios." },
  { q: "What return should I use?", a: "Use a conservative estimated annual return and test multiple scenarios instead of relying on one optimistic projection." },
];

export default async function CompoundInterestCalculatorPage({ searchParams }) {
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
    name: "How to use a compound interest calculator",
    step: [
      { "@type": "HowToStep", name: "Enter your starting amount" },
      { "@type": "HowToStep", name: "Enter your monthly contribution" },
      { "@type": "HowToStep", name: "Choose an annual return" },
      { "@type": "HowToStep", name: "Select your timeline" },
      { "@type": "HowToStep", name: "Review future value and estimated growth" },
    ],
  };

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "BankDeMark Compound Interest Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    url: "https://bankdemark.com/calculators/compound-interest-calculator",
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />
      <Script id="compound-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="compound-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Script id="compound-app-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <CompoundInterestCalculator />

      <section className="calculator-seo-section">
        <nav className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-compound-interest">What compound interest is</a>
          <a href="#formula">Compound interest formula</a>
          <a href="#growth-factors">Growth factors</a>
          <a href="#investing-vs-saving">Investing vs saving</a>
          <a href="#mistakes">Common mistakes</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="calculator-seo-content">
          <section id="what-is-compound-interest">
            <div className="calculator-seo-kicker">Compound Growth</div>
            <h2>What Is Compound Interest?</h2>
            <p>
              Compound interest is growth earned on both your original money and the growth that money has already produced.
              Instead of only earning on the starting balance, your money begins building on itself.
            </p>
            <p>
              This is why time matters so much in saving, investing, retirement planning, and financial freedom.
              The earlier money starts compounding, the more years it has to produce future growth.
            </p>
          </section>

          <section id="formula">
            <h2>Compound Interest Formula</h2>
            <div className="formula-card">
              <strong>A = P(1 + r / n)^(nt)</strong>
              <p>A is future value, P is starting principal, r is annual return, n is compounding periods per year, and t is years.</p>
            </div>
          </section>

          <section id="growth-factors">
            <h2>What Affects Compound Growth?</h2>
            <div className="seo-two-column">
              <div><h3>Starting amount</h3><p>A larger starting balance gives compounding more money to work with immediately.</p></div>
              <div><h3>Monthly contributions</h3><p>Consistent deposits can matter more than trying to time the perfect entry point.</p></div>
              <div><h3>Return rate</h3><p>Higher returns increase projected growth, but aggressive assumptions can create misleading expectations.</p></div>
              <div><h3>Timeline</h3><p>Time is the strongest compounding advantage because growth has more years to build on itself.</p></div>
            </div>
          </section>

          <section id="investing-vs-saving">
            <h2>Compound Interest for Investing vs Savings</h2>
            <p>
              In investing, compounding may come from reinvested dividends, capital growth, ETFs, index funds, and retirement accounts.
              In savings, compounding may come from interest paid by a high-interest savings account or similar cash account.
            </p>
            <p>
              For a bigger planning system, pair this with the{" "}
              <Link href="/calculators/investment-calculator">Investment Calculator</Link>,{" "}
              <Link href="/calculators/retirement-calculator">Retirement Calculator</Link>, and{" "}
              <Link href="/pillars/investing">Investing Pillar</Link>.
            </p>
          </section>

          <section id="mistakes">
            <h2>Common Compound Interest Mistakes</h2>
            <ul className="seo-steps">
              <li>Starting too late and expecting large future contributions to make up for lost time.</li>
              <li>Using unrealistic return assumptions.</li>
              <li>Ignoring investment fees, taxes, and account costs.</li>
              <li>Stopping contributions during volatility.</li>
              <li>Confusing projections with guaranteed results.</li>
            </ul>
          </section>

          <section id="faq">
            <h2>Compound Interest Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/compound-interest-calculator" />
    </>
  );
}
