import CTABanner from "../../components/CTABanner";

export const metadata = {
  title: "Investing Guide",
  description: "Learn how to invest intelligently with BankDeMark complete investing guide covering index funds, ETFs, asset allocation, and long-term wealth building.",
};

export default function InvestingPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Finance Pillar: Investing</p>
        <h1>Investing: Grow Wealth Through Disciplined Capital</h1>
        <p>From your first index fund to a diversified portfolio, the principles of intelligent long-term investing made clear.</p>
      </div>
      <div className="pillar-page">
        <div className="pillar-toc">
          <h4>In this guide</h4>
          <ol>
            <li><a href="#why">Why Invest at All</a></li>
            <li><a href="#accounts">Account Types Explained</a></li>
            <li><a href="#indexfunds">Index Funds and ETFs</a></li>
            <li><a href="#allocation">Asset Allocation</a></li>
            <li><a href="#dca">Dollar Cost Averaging</a></li>
            <li><a href="#compound">Compound Growth</a></li>
          </ol>
        </div>
        <div id="why" className="pillar-section">
          <h2>Why Invest at All</h2>
          <p>Inflation erodes the purchasing power of cash. Money sitting in a checking account loses value every year. The US stock market has returned an average of approximately 10% annually over the long run. At that rate, money doubles roughly every 7 years.</p>
        </div>
        <div id="accounts" className="pillar-section">
          <h2>Account Types Explained</h2>
          <p>Before choosing investments, choose the right account type. Tax-advantaged accounts should always be maximized before investing in taxable brokerage accounts.</p>
          <ul>
            <li>401(k) or 403(b): employer-sponsored, pre-tax. Maximize match first.</li>
            <li>Traditional IRA: pre-tax contributions, taxed on withdrawal.</li>
            <li>Roth IRA: after-tax contributions, tax-free growth and withdrawal.</li>
            <li>HSA: triple tax advantage. Invest inside an HSA for maximum efficiency.</li>
            <li>Taxable Brokerage: no contribution limits, full flexibility.</li>
          </ul>
        </div>
        <div id="indexfunds" className="pillar-section">
          <h2>Index Funds and ETFs</h2>
          <p>Index funds passively track a market index and consistently outperform the majority of actively managed funds over long periods. For most investors, a simple three-fund portfolio provides all the diversification needed.</p>
          <ul>
            <li>Vanguard VTI: US Total Market</li>
            <li>Vanguard VXUS: International</li>
            <li>Vanguard BND: Bonds</li>
          </ul>
        </div>
        <div id="allocation" className="pillar-section">
          <h2>Asset Allocation</h2>
          <p>Asset allocation is how you divide investments across stocks, bonds, and other asset classes. A common rule of thumb: subtract your age from 110 to get your stock allocation percentage. Risk tolerance matters more than age.</p>
        </div>
        <div id="dca" className="pillar-section">
          <h2>Dollar Cost Averaging</h2>
          <p>Dollar cost averaging means investing a fixed amount at regular intervals, regardless of market conditions. You buy more shares when prices are low and fewer when prices are high. Set up automatic monthly investments and let the system work.</p>
        </div>
        <div id="compound" className="pillar-section">
          <h2>Compound Growth</h2>
          <p>Five hundred dollars per month invested at 8% average annual return grows to over $1.5 million in 40 years, from $240,000 contributed. Time is the most valuable asset in investing. Start now, even imperfectly.</p>
        </div>
      </div>
      <CTABanner
        title="Ready to put your money to work?"
        sub="Explore our blog for specific investing strategies, account comparisons, and fund recommendations."
        btnText="Read Investing Articles"
        btnHref="/blog"
      />
    </>
  );
}
