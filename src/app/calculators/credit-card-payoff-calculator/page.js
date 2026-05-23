import Link from "next/link";
import Script from "next/script";
import CTABanner from "../../components/CTABanner";
import CreditCardPayoffOptimizer from "../../components/CreditCardPayoffOptimizer";
import SEOLinkMap from "../../components/SEOLinkMap";
import GlobalCalculatorShare from "@/app/components/GlobalCalculatorShare";

export const metadata = {
  title: "Credit Card Payoff Calculator | Avalanche vs Snowball Optimizer",
  description:
    "Use BankDeMark's free credit card payoff calculator to compare debt avalanche vs debt snowball, optimize multiple card payments, estimate interest, and find your debt-free timeline.",
  alternates: {
    canonical: "/calculators/credit-card-payoff-calculator",
  },
};

const faq = [
  {
    q: "What is a credit card payoff optimizer?",
    a: "A credit card payoff optimizer compares different repayment strategies across multiple credit cards to estimate payoff time, total interest, and the best payment order.",
  },
  {
    q: "What is the debt avalanche method?",
    a: "The debt avalanche method puts extra payments toward the highest-interest debt first while continuing minimum payments on all other debts. It usually saves the most interest.",
  },
  {
    q: "What is the debt snowball method?",
    a: "The debt snowball method puts extra payments toward the smallest balance first while continuing minimum payments on all other debts. It can build momentum with faster wins.",
  },
  {
    q: "Which is better, avalanche or snowball?",
    a: "Avalanche is usually better mathematically because it targets high-interest debt first. Snowball may be better behaviorally if quick wins help you stay consistent.",
  },
];

export default function CreditCardPayoffCalculatorPage() {
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
    name: "How to use a credit card payoff calculator",
    description:
      "Compare avalanche and snowball payoff strategies across multiple credit cards.",
    step: [
      { "@type": "HowToStep", name: "Enter each credit card balance" },
      { "@type": "HowToStep", name: "Enter each APR" },
      { "@type": "HowToStep", name: "Enter minimum payments" },
      { "@type": "HowToStep", name: "Add extra monthly payment amount" },
      { "@type": "HowToStep", name: "Compare avalanche and snowball results" },
    ],
  };

  return (
    <>
      <Script
        id="credit-card-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="credit-card-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <div className="page-hero cc-page-hero">
        <p className="eyebrow">Debt Strategy Tool</p>
        <h1>Credit Card Payoff Optimizer</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>
          Compare avalanche vs snowball across multiple credit cards, estimate
          payoff time, and find the strategy that fits your debt-free plan.
        </p>
      </div>

      <div className="pillar-page">
        <CreditCardPayoffOptimizer />

        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#what-is-a-credit-card-payoff-optimizer">What a payoff optimizer is</a></li>
            <li><a href="#avalanche-method">Debt avalanche method</a></li>
            <li><a href="#snowball-method">Debt snowball method</a></li>
            <li><a href="#which-method">Which method should you use?</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ol>
        </div>

        <div id="what-is-a-credit-card-payoff-optimizer" className="pillar-section">
          <h2>What Is a Credit Card Payoff Optimizer?</h2>
          <p>
            A credit card payoff optimizer helps you compare repayment strategies
            across multiple cards. Instead of guessing which card to attack first,
            it estimates payoff time, total interest, and the best order based on
            your balances, APRs, minimum payments, and extra monthly cash.
          </p>
        </div>

        <div id="avalanche-method" className="pillar-section">
          <h2>Debt Avalanche Method</h2>
          <p>
            The avalanche method targets the highest-interest credit card first
            while making minimum payments on the rest. Once the highest-interest
            card is paid off, that payment rolls into the next highest-interest
            card.
          </p>
          <p>
            This method usually saves the most money because it attacks the most
            expensive debt first.
          </p>
        </div>

        <div id="snowball-method" className="pillar-section">
          <h2>Debt Snowball Method</h2>
          <p>
            The snowball method targets the smallest balance first while making
            minimum payments on the rest. Once the smallest card is paid off, the
            payment rolls into the next smallest balance.
          </p>
          <p>
            This method can be powerful if you need quick wins and motivation to
            stay consistent.
          </p>
        </div>

        <div id="which-method" className="pillar-section">
          <h2>Avalanche vs Snowball: Which Method Should You Use?</h2>
          <p>
            Use avalanche if your main goal is saving the most interest. Use
            snowball if your main problem is motivation, consistency, or feeling
            overwhelmed by too many balances.
          </p>
          <p>
            Pair this with the <Link href="/calculators/debt-payoff-calculator">Debt Payoff Calculator</Link>,{" "}
            <Link href="/calculators/budget-calculator">Budget Calculator</Link>, and{" "}
            <Link href="/pillars/debt-management">Debt Management Guide</Link>.
          </p>
        </div>

        <div id="faq" className="pillar-section">
          <h2>Credit Card Payoff Calculator FAQ</h2>
          {faq.map((item) => (
            <div key={item.q} style={{ marginBottom: "28px" }}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <SEOLinkMap currentPath="/calculators/credit-card-payoff-calculator" />

      <CTABanner
        title="Turn credit card payoff into a debt-free system."
        sub="Use BankDeMark calculators and finance pillars to control cash flow, reduce interest, and build financial freedom."
        btnText="Explore Calculators"
        btnHref="/calculators"
      />
    </>
  );
}
