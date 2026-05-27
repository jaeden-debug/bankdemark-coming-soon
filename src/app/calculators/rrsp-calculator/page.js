import Link from "next/link";
import Script from "next/script";
import RegisteredAccountCalculator from "../../components/RegisteredAccountCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "RRSP Calculator Canada | Contribution Room, Refund & Growth",
  description:
    "Use BankDeMark's RRSP calculator to estimate RRSP contribution room, tax refund potential, projected account value, and tax-deferred growth.",
  alternates: { canonical: "/calculators/rrsp-calculator" },
};

const faq = [
  {
    q: "What is an RRSP calculator?",
    a: "An RRSP calculator estimates contribution room, possible tax refund, projected account growth, and tax-deferred retirement value.",
  },
  {
    q: "How is RRSP room estimated?",
    a: "RRSP room is commonly based on 18% of earned income up to the annual limit, plus unused contribution room, but your exact amount should be confirmed with CRA.",
  },
  {
    q: "Are RRSP contributions tax deductible?",
    a: "RRSP contributions may reduce taxable income, but withdrawals are taxable later.",
  },
  {
    q: "Should I use an RRSP or TFSA?",
    a: "RRSPs are often useful when your current tax rate is high. TFSAs are often useful for flexible, tax-free growth and withdrawals.",
  },
];

export default async function RRSPCalculatorPage({ searchParams }) {
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
    name: "How to use an RRSP calculator",
    step: [
      { "@type": "HowToStep", name: "Enter annual income" },
      { "@type": "HowToStep", name: "Enter current RRSP balance" },
      { "@type": "HowToStep", name: "Enter planned contribution" },
      { "@type": "HowToStep", name: "Add unused contribution room" },
      { "@type": "HowToStep", name: "Review projected value and refund estimate" },
    ],
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="rrsp-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="rrsp-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <RegisteredAccountCalculator mode="rrsp" />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-an-rrsp-calculator">What is an RRSP calculator?</a>
          <a href="#how-rrsp-room-works">How RRSP room works</a>
          <a href="#rrsp-refund">RRSP refund estimate</a>
          <a href="#rrsp-mistakes">Common mistakes</a>
          <a href="#rrsp-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-an-rrsp-calculator">
            <span className="calculator-seo-kicker">RRSP Calculator</span>
            <h2>What Is an RRSP Calculator?</h2>
            <p>An RRSP calculator estimates how much you may be able to contribute, how much tax refund potential you may create, and how your account could grow over time.</p>
          </section>

          <section id="how-rrsp-room-works">
            <h2>How RRSP Contribution Room Works</h2>
            <p>RRSP contribution room is generally based on earned income, the annual RRSP limit, unused room, and pension adjustments. Always confirm your exact room through CRA before contributing.</p>
          </section>

          <section id="rrsp-refund">
            <h2>RRSP Tax Refund Estimate</h2>
            <p>RRSP contributions may reduce taxable income. The refund estimate depends on your contribution and marginal tax rate.</p>
            <p>
              Pair this with the{" "}
              <Link href="/calculators/tfsa-calculator">TFSA calculator</Link>,{" "}
              <Link href="/calculators/investment-calculator">investment calculator</Link>, and{" "}
              <Link href="/pillars/investing">investing guide</Link>.
            </p>
          </section>

          <section id="rrsp-mistakes">
            <h2>Common RRSP Calculator Mistakes</h2>
            <ul className="seo-steps">
              <li>Guessing contribution room instead of checking CRA.</li>
              <li>Ignoring pension adjustments.</li>
              <li>Contributing without considering future tax rates.</li>
              <li>Confusing tax-deferred growth with tax-free growth.</li>
            </ul>
          </section>

          <section id="rrsp-faq">
            <h2>RRSP Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/rrsp-calculator" />
    </>
  );
}
