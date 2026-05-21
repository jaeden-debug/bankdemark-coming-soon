import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Banking Guide",
  description: "Optimize your banking relationships, find the best high-yield savings accounts, and eliminate unnecessary fees with BankDeMark banking guide.",
};

export default function BankingPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Finance Pillar: Banking</p>
        <h1>Banking: Optimize Every Account You Hold</h1>
        <p>Stop leaving interest on the table. Here is how to structure your banking relationships for maximum efficiency and minimum fees.</p>
      </div>
      <div className="pillar-page">
        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#hysa">High-Yield Savings Accounts</a></li>
            <li><a href="#checking">Choosing a Checking Account</a></li>
            <li><a href="#fees">Eliminating Bank Fees</a></li>
            <li><a href="#structure">Account Structure Strategy</a></li>
            <li><a href="#business">Business Banking</a></li>
          </ol>
        </div>
        <div id="hysa" className="pillar-section">
          <h2>High-Yield Savings Accounts</h2>
          <p>Traditional savings accounts at big banks pay as little as 0.01% APY. High-yield savings accounts at online banks currently pay 4 to 5% APY. On a $10,000 emergency fund, that is the difference between $1 and $400 to $500 per year in interest.</p>
          <ul>
            <li>Compare rates at sites like Bankrate and NerdWallet</li>
            <li>Confirm FDIC insurance up to $250,000 per depositor</li>
            <li>Look for no monthly fees and no minimum balance requirements</li>
            <li>Set up automatic transfers from your checking on payday</li>
          </ul>
        </div>
        <div id="checking" className="pillar-section">
          <h2>Choosing a Checking Account</h2>
          <p>Your checking account should have zero monthly fees, a large ATM network or ATM fee reimbursement, mobile check deposit, and instant P2P transfer capabilities. In 2025, there is no reason to pay monthly fees for a checking account.</p>
        </div>
        <div id="fees" className="pillar-section">
          <h2>Eliminating Bank Fees</h2>
          <p>Bank fees are one of the most invisible financial drains. Monthly maintenance fees, overdraft fees, ATM fees, and wire transfer fees can easily cost $200 to $500 per year or more.</p>
          <ul>
            <li>Switch to fee-free accounts immediately</li>
            <li>Set up low balance alerts to avoid overdrafts</li>
            <li>Use your bank ATM network exclusively, or get ATM rebates</li>
            <li>Call your bank and negotiate fee waivers, it often works</li>
          </ul>
        </div>
        <div id="structure" className="pillar-section">
          <h2>Account Structure Strategy</h2>
          <p>Optimal structure: one primary checking account for income and bill pay, one HYSA for emergency fund, one or more goal-specific savings accounts, and investment accounts separate from all of these. Automate all transfers on payday.</p>
        </div>
        <div id="business" className="pillar-section">
          <h2>Business Banking</h2>
          <p>If you run a business, a dedicated business checking account is non-negotiable. Mixing personal and business finances complicates taxes, weakens liability protection, and makes bookkeeping a nightmare.</p>
        </div>
      </div>
      <CTABanner
        title="Small banking changes. Big long-term impact."
        sub="Start with your savings account. Switching to a HYSA is the single easiest money move you can make today."
        btnText="Read Banking Articles"
        btnHref="/blog"
      />
    </>
  );
}
