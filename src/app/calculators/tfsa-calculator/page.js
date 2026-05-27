import Link from "next/link";
import Script from "next/script";
import RegisteredAccountCalculator from "../../components/RegisteredAccountCalculator";
import SEOLinkMap from "../../components/SEOLinkMap";
import CalculatorStateHydrator from "@/app/components/CalculatorStateHydrator";

export const metadata = {
  title: "TFSA Calculator Canada | Contribution Room & Tax-Free Growth",
  description:
    "Use BankDeMark's TFSA calculator to estimate TFSA contribution room, tax-free growth, projected value, and long-term savings potential.",
  alternates: { canonical: "/calculators/tfsa-calculator" },
};

const faq = [
  {
    q: "What is a TFSA calculator?",
    a: "A TFSA calculator estimates contribution room, tax-free growth, projected account value, and long-term savings potential.",
  },
  {
    q: "Are TFSA withdrawals taxable?",
    a: "Eligible TFSA withdrawals are generally tax-free.",
  },
  {
    q: "Do TFSA withdrawals create new room?",
    a: "TFSA withdrawals are generally added back to contribution room on January 1 of the following year.",
  },
  {
    q: "Should I use a TFSA or RRSP?",
    a: "TFSAs are often useful for flexible tax-free growth, while RRSPs may be useful when your current tax rate is high.",
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
    step: [
      { "@type": "HowToStep", name: "Enter current TFSA balance" },
      { "@type": "HowToStep", name: "Enter planned contribution" },
      { "@type": "HowToStep", name: "Add unused contribution room" },
      { "@type": "HowToStep", name: "Choose timeline and return assumption" },
      { "@type": "HowToStep", name: "Review projected TFSA value" },
    ],
  };

  return (
    <>
      <CalculatorStateHydrator encodedData={sharedData} />

      <Script id="tfsa-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="tfsa-howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <RegisteredAccountCalculator mode="tfsa" />

      <section className="calculator-seo-section">
        <aside className="calculator-toc-card">
          <span>In this guide</span>
          <a href="#what-is-a-tfsa-calculator">What is a TFSA calculator?</a>
          <a href="#how-tfsa-room-works">How TFSA room works</a>
          <a href="#tax-free-growth">Tax-free growth</a>
          <a href="#tfsa-mistakes">Common mistakes</a>
          <a href="#tfsa-faq">FAQ</a>
        </aside>

        <div className="calculator-seo-content">
          <section id="what-is-a-tfsa-calculator">
            <span className="calculator-seo-kicker">TFSA Calculator</span>
            <h2>What Is a TFSA Calculator?</h2>
            <p>A TFSA calculator estimates how your Tax-Free Savings Account could grow based on your balance, planned contribution, unused room, timeline, and return assumption.</p>
          </section>

          <section id="how-tfsa-room-works">
            <h2>How TFSA Contribution Room Works</h2>
            <p>TFSA contribution room depends on eligibility, annual limits, unused room, and previous withdrawals. Confirm exact room with CRA before contributing.</p>
          </section>

          <section id="tax-free-growth">
            <h2>Why TFSA Growth Matters</h2>
            <p>TFSA growth can be powerful because eligible withdrawals are generally tax-free. This makes the TFSA useful for investing, savings goals, emergency flexibility, and long-term wealth building.</p>
            <p>
              Pair this with the{" "}
              <Link href="/calculators/rrsp-calculator">RRSP calculator</Link>,{" "}
              <Link href="/calculators/investment-calculator">investment calculator</Link>, and{" "}
              <Link href="/pillars/investing">investing guide</Link>.
            </p>
          </section>

          <section id="tfsa-mistakes">
            <h2>Common TFSA Calculator Mistakes</h2>
            <ul className="seo-steps">
              <li>Over-contributing without checking CRA room.</li>
              <li>Assuming withdrawals return room immediately.</li>
              <li>Using the TFSA only as cash when investing may fit the goal.</li>
              <li>Forgetting that contribution room depends on eligibility.</li>
            </ul>
          </section>

          <section id="tfsa-faq">
            <h2>TFSA Calculator FAQ</h2>
            {faq.map((item) => (
              <div className="faq-card" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <SEOLinkMap currentPath="/calculators/tfsa-calculator" />
    </>
  );
}
