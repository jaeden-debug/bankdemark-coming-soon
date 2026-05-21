import CTABanner from "../../components/CTABanner";
import Link from "next/link";

export const metadata = {
  title: "Personal Finance Guide",
  description: "Master personal finance with BankDeMark comprehensive guide to budgeting, saving, emergency funds, and building long-term financial stability.",
};

export default function PersonalFinancePage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Finance Pillar: Personal Finance</p>
        <h1>Personal Finance: The Complete Guide</h1>
        <p>Your step-by-step framework for taking control of your money, from your first budget to long-term financial stability.</p>
      </div>
      <div className="pillar-page">
        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#budgeting">Building a Budget That Works</a></li>
            <li><a href="#saving">Saving Strategies That Stick</a></li>
            <li><a href="#emergency">Emergency Fund Fundamentals</a></li>
            <li><a href="#insurance">Insurance and Risk Management</a></li>
            <li><a href="#networth">Tracking Your Net Worth</a></li>
          </ol>
        </div>
        <div id="budgeting" className="pillar-section">
          <h2>Building a Budget That Works</h2>
          <p>A budget is not a restriction, it is a plan. The goal is to tell your money where to go before the month starts. The 50/30/20 rule allocates 50% of after-tax income to needs, 30% to wants, and 20% to savings and debt repayment.</p>
          <ul>
            <li>Zero-based budgeting: every dollar gets assigned a job</li>
            <li>Envelope method: cash-based physical allocation system</li>
            <li>Pay yourself first: automate savings before spending</li>
            <li>Review spending weekly, not just monthly</li>
          </ul>
        </div>
        <div id="saving" className="pillar-section">
          <h2>Saving Strategies That Stick</h2>
          <p>Saving money consistently is less about willpower and more about system design. Automate transfers to a high-yield savings account on payday. Target a savings rate of at least 20% of gross income. If that is not immediately achievable, start with 5% and increase by 1% every 60 days.</p>
          <ul>
            <li>Automate savings on every payday</li>
            <li>Use separate accounts for separate goals</li>
            <li>Save windfalls at 50% or more</li>
            <li>Reduce recurring subscriptions aggressively</li>
          </ul>
        </div>
        <div id="emergency" className="pillar-section">
          <h2>Emergency Fund Fundamentals</h2>
          <p>An emergency fund is the single most important financial buffer you can build. Target 3 months of essential expenses minimum. 6 months is the standard recommendation. Keep this money in a high-yield savings account, accessible but not convenient.</p>
        </div>
        <div id="insurance" className="pillar-section">
          <h2>Insurance and Risk Management</h2>
          <p>Insurance is risk transfer. You pay a known premium to eliminate unknown catastrophic losses. The most important types:</p>
          <ul>
            <li>Health insurance: non-negotiable for financial protection</li>
            <li>Term life insurance: essential if anyone depends on your income</li>
            <li>Disability insurance: protects your income if you cannot work</li>
            <li>Renters or homeowners insurance: protects your assets</li>
          </ul>
        </div>
        <div id="networth" className="pillar-section">
          <h2>Tracking Your Net Worth</h2>
          <p>Net worth is the single most important financial metric you can track. It is calculated simply: Assets minus Liabilities. Track it monthly. Even a $200 improvement month-over-month compounds dramatically over years.</p>
          <p>Once your budget is established and savings are automated, explore our <Link href="/pillars/investing" style={{color: "var(--gold)"}}>Investing Pillar</Link> or <Link href="/pillars/debt-management" style={{color: "var(--gold)"}}>Debt Management guide</Link> next.</p>
        </div>
      </div>
      <CTABanner
        title="Ready to take your personal finances further?"
        sub="Explore our other finance pillars for a complete wealth-building strategy."
        btnText="View All Pillars"
        btnHref="/pillars"
      />
    </>
  );
}
