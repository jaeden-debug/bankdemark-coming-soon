import Link from "next/link";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Financial Calculators | Free Money Tools by BankDeMark",
  description:
    "Explore BankDeMark's free financial calculators for compound interest, mortgages, investing, retirement, RRSP, TFSA, budgeting, debt payoff, and FIRE planning.",
  alternates: {
    canonical: "/calculators",
  },
};

const calculators = [
  {
    href: "/financial-freedom-quiz",
    title: "Financial Freedom Quiz",
    tag: "Lead Magnet",
    desc: "Find your money personality, wealth stage, and next best financial move.",
  },
  {
    href: "/calculators/emergency-fund-calculator",
    title: "Emergency Fund Calculator",
    tag: "Safety Fund",
    desc: "Estimate emergency savings needed, current coverage, savings gap, and time to goal.",
  },
  {
    href: "/money-health-score",
    title: "Money Health Score",
    tag: "Financial Diagnostic",
    desc: "Get a live financial health score across cash flow, debt, savings, investing, housing, and credit strength.",
  },
  {
    href: "/financial-freedom-roadmap",
    title: "Financial Freedom Roadmap Generator",
    tag: "Custom Plan",
    desc: "Answer key money questions and generate a custom 30-day, 90-day, and 12-month financial freedom plan.",
  },
  {
    href: "/calculators/net-worth-calculator",
    title: "Net Worth Calculator",
    tag: "Wealth Tracker",
    desc: "Track assets, liabilities, net worth, liquidity, debt ratio, and your current wealth stage.",
  },
  {
    href: "/calculators/compound-interest-calculator",
    title: "Compound Interest Calculator",
    tag: "Growth",
    desc: "Estimate savings, investment growth, monthly contributions, and long-term compound returns.",
  },
  {
    href: "/calculators/rent-vs-buy-calculator",
    title: "Rent vs Buy Calculator",
    tag: "Housing",
    desc: "Compare renting versus buying using mortgage costs, rent increases, home growth, and investment returns.",
  },
  {
    href: "/calculators/mortgage-calculator",
    title: "Mortgage Calculator",
    tag: "Home Buying",
    desc: "Estimate monthly mortgage payments for Canada or the U.S. with taxes, insurance, and fees.",
  },
  {
    href: "/calculators/investment-calculator",
    title: "Investment Calculator",
    tag: "Investing",
    desc: "Project portfolio growth with contributions, returns, fees, and Canada/U.S. currency options.",
  },
  {
    href: "/calculators/retirement-calculator",
    title: "Retirement Calculator",
    tag: "Financial Freedom",
    desc: "Estimate retirement readiness, nest egg targets, withdrawal income, and savings gaps.",
  },
  {
    href: "/calculators/rrsp-calculator",
    title: "RRSP Calculator",
    tag: "Canada",
    desc: "Estimate RRSP room, tax refund potential, and projected tax-deferred retirement growth.",
  },
  {
    href: "/calculators/tfsa-calculator",
    title: "TFSA Calculator",
    tag: "Canada",
    desc: "Estimate TFSA room, tax-free growth, and long-term Canadian investment value.",
  },
  {
    href: "/calculators/credit-card-payoff-calculator",
    title: "Credit Card Payoff Optimizer",
    tag: "Debt Strategy",
    desc: "Compare avalanche vs snowball across multiple credit cards and find the best payoff order.",
  },
  {
    href: "/calculators/debt-payoff-calculator",
    title: "Debt Payoff Calculator",
    tag: "Debt",
    desc: "Estimate debt-free date, total interest, and extra payment payoff strategies.",
  },
  {
    href: "/calculators/budget-calculator",
    title: "Budget Calculator",
    tag: "Personal Finance",
    desc: "Build a monthly budget, calculate cash flow, and organize income against expenses.",
  },
  {
    href: "/calculators/fire-calculator",
    title: "FIRE Calculator",
    tag: "FIRE",
    desc: "Estimate your FIRE number, time to financial independence, and Coast FIRE timeline.",
  },
];

export default function CalculatorsPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Free Financial Tools</p>
        <h1>Financial Calculators</h1>

<div className="zylx-powered">
  <span>Powered by</span>
  <strong>ZYLX.ai</strong>
</div>

        <p>
          Use BankDeMark’s free calculators to plan investing, debt payoff,
          retirement, budgeting, mortgages, and financial freedom.
        </p>
      </div>

      <section className="calculators-hub">
        <div className="calculators-grid">
          {calculators.map((tool) => (
            <Link href={tool.href} className="calculator-hub-card" key={tool.href}>
              <span>{tool.tag}</span>
              <h2>{tool.title}</h2>
              <p>{tool.desc}</p>
              <strong>Open calculator →</strong>
            </Link>
          ))}
        </div>
      </section>
      <SEOLinkMap currentPath="/calculators" />

    </>
  );
}
