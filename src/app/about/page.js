import CTABanner from "../components/CTABanner";

export const metadata = {
  title: "About BankDeMark",
  description: "Learn about BankDeMark, a modern finance intelligence platform built to help individuals and businesses make smarter financial decisions.",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">Behind the Brand</p>
        <h1>Built for people serious about money.</h1>
        <p>BankDeMark was built because quality financial education should not be buried behind paywalls, buried in jargon, or compromised by advertiser interests.</p>
      </div>
      <div className="about-grid">
        <div>
          <div className="about-values">
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <div>
                <h4>Clarity Over Complexity</h4>
                <p>Finance is complex. Good finance education does not have to be. We translate expert-level knowledge into language that drives action, not confusion.</p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-icon">🔍</span>
              <div>
                <h4>Research-Backed Content</h4>
                <p>Every article, guide, and recommendation on BankDeMark is grounded in data, primary research, and real-world application, not opinions dressed as facts.</p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-icon">🚫</span>
              <div>
                <h4>No Hidden Agendas</h4>
                <p>We do not get paid to recommend products we would not use. When we feature a tool, service, or strategy, it is because it is genuinely the best available option.</p>
              </div>
            </div>
            <div className="value-item">
              <span className="value-icon">⚡</span>
              <div>
                <h4>Actionable by Design</h4>
                <p>Reading is only valuable if it leads to action. Every piece of content on BankDeMark ends with something you can implement, not just think about.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>The financial services industry has historically been built to benefit institutions, not individuals. BankDeMark exists to rebalance that equation.</p>
          <p style={{ marginTop: "18px" }}>We cover the full financial picture: personal finance fundamentals, investing strategy, business credit building, banking optimization, debt elimination, and the path to financial independence.</p>
          <p style={{ marginTop: "18px" }}>Our audience ranges from people just starting to take money seriously, to entrepreneurs building seven-figure businesses, to investors managing complex portfolios. The common thread: they want real information, clearly delivered, without the noise.</p>
          <p style={{ marginTop: "18px", color: "var(--gold)", fontWeight: "600" }}>That is what BankDeMark delivers.</p>
        </div>
      </div>
      <CTABanner
        title="Ready to get serious about your finances?"
        sub="Start with our six core finance pillars, the foundation of everything we cover."
        btnText="Explore Finance Pillars"
        btnHref="/pillars"
      />
    </>
  );
}
