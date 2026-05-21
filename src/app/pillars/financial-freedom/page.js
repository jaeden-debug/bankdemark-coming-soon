import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Financial Freedom Guide",
  description: "Your complete roadmap to financial independence, from covering basics to building passive income and retiring on your own terms.",
};

export default function FinancialFreedomPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Finance Pillar: Financial Freedom</p>
        <h1>Financial Freedom: Design a Life Where Work Is Optional</h1>
        <p>The seven-stage roadmap from financial stress to complete independence, with real milestones for every income level.</p>
      </div>
      <div className="pillar-page">
        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#stages">The Seven Stages</a></li>
            <li><a href="#fire">The FIRE Movement</a></li>
            <li><a href="#number">Your FI Number</a></li>
            <li><a href="#income">Building Passive Income</a></li>
            <li><a href="#mindset">The Mindset Shift</a></li>
          </ol>
        </div>
        <div id="stages" className="pillar-section">
          <h2>The Seven Stages of Financial Freedom</h2>
          <ul>
            <li>Stage 1, Clarity: You know what you earn, what you spend, and what you owe.</li>
            <li>Stage 2, Self-Sufficiency: You cover all expenses without help from family, government, or credit.</li>
            <li>Stage 3, Breathing Room: You have a funded emergency fund and a small investment account.</li>
            <li>Stage 4, Stability: Debt-free except possibly a mortgage. Regular investing.</li>
            <li>Stage 5, Flexibility: Enough savings to take a career risk or survive a year without income.</li>
            <li>Stage 6, Financial Independence: Investment income covers your expenses. Work is optional.</li>
            <li>Stage 7, Abundant Wealth: Significant assets beyond what you need. Freedom to give generously.</li>
          </ul>
        </div>
        <div id="fire" className="pillar-section">
          <h2>The FIRE Movement</h2>
          <p>FIRE stands for Financial Independence, Retire Early. It is a movement built around aggressive saving, intentional spending, and investment in passive income. FIRE has several flavors: LeanFIRE, FatFIRE, BaristaFIRE, and CoastFIRE.</p>
        </div>
        <div id="number" className="pillar-section">
          <h2>Your FI Number</h2>
          <p>Your FI number is how much you need invested to live off returns indefinitely. Formula: Annual expenses multiplied by 25. If you spend $60,000 per year, you need $1.5 million invested. Reducing lifestyle inflation is the most powerful lever for reaching FI faster.</p>
        </div>
        <div id="income" className="pillar-section">
          <h2>Building Passive Income</h2>
          <p>Passive income bridges the gap between saving and full financial independence. Common vehicles include dividend investing, real estate rental income, REITs, digital products, and bonds.</p>
        </div>
        <div id="mindset" className="pillar-section">
          <h2>The Mindset Shift</h2>
          <p>Financial freedom begins with a simple reframe: your most valuable asset is time, not money. Money is simply the tool you use to buy back your time. Every financial decision is a trade between something you want now versus the time you would buy back later.</p>
        </div>
      </div>
      <CTABanner
        title="Financial freedom is a system, not a dream."
        sub="Start by calculating your FI number today. That single number changes your relationship with every financial decision."
        btnText="Explore All Pillars"
        btnHref="/pillars"
      />
    </>
  );
}
