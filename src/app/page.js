import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { pillars } from "./data/pillars";
import CTABanner from "./components/CTABanner";

export const metadata = {
  title: "BankDeMark | Modern Finance Intelligence",
  description: "BankDeMark delivers expert insights across personal finance, investing, business credit, and financial freedom. Built for clarity. Built for results.",
};

export default function HomePage() {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((p) => p.featured).slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">bankdemark.com — Finance Intelligence</p>
          <h1>Money clarity.<br /><em>Built for the modern era.</em></h1>
          <p className="hero-sub">BankDeMark delivers expert-level finance insights across personal finance, investing, business credit, and wealth building without the jargon or the fluff.</p>
          <div className="hero-actions">
            <Link href="/pillars" className="btn-primary">Explore Topics</Link>
            <Link href="/blog" className="btn-ghost">Read the Blog</Link>
          </div>
          <div className="trust-row">
            <span className="trust-chip">Market Insights</span>
            <span className="trust-chip">Business Credit</span>
            <span className="trust-chip">Investing</span>
            <span className="trust-chip">Debt Strategies</span>
          </div>
        </div>
        <div className="visual-card">
          <div className="card-top">
            <div>
              <div className="card-label">Portfolio Signal</div>
              <div className="card-value">+18.4%</div>
            </div>
            <span className="card-badge">YTD</span>
          </div>
          <div className="chart">
            <span /><span /><span /><span /><span /><span />
          </div>
          <div className="mini-grid">
            <div className="mini-cell"><small>Assets</small><b>$248K</b></div>
            <div className="mini-cell"><small>Risk</small><b>Low</b></div>
            <div className="mini-cell"><small>Growth</small><b>Stable</b></div>
            <div className="mini-cell"><small>Outlook</small><b>Strong</b></div>
          </div>
        </div>
      </section>

      <div className="section">
        <div className="stats-row">
          <div className="stat-item"><div className="stat-num">6</div><div className="stat-label">Finance Pillars</div></div>
          <div className="stat-item"><div className="stat-num">100+</div><div className="stat-label">Expert Articles Planned</div></div>
          <div className="stat-item"><div className="stat-num">$0</div><div className="stat-label">Cost to Access</div></div>
          <div className="stat-item"><div className="stat-num">2025</div><div className="stat-label">Data and Strategies</div></div>
        </div>
      </div>

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">Core Topics</span>
          <h2>Six pillars of financial mastery</h2>
          <p>Every major area of personal and business finance covered with depth, clarity, and actionable guidance.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map((p) => (
            <Link key={p.slug} href={`/pillars/${p.slug}`} className="pillar-card">
              <span className="pillar-icon">{p.icon}</span>
              <h3>{p.title}</h3>
              <span className="sub">{p.subtitle}</span>
              <p>{p.description}</p>
              <span className="pillar-link">Explore topic</span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="Start building real financial clarity today."
        sub="Whether you are eliminating debt, building business credit, or planning for early retirement, BankDeMark has the guides you need."
        btnText="Browse All Topics"
        btnHref="/pillars"
      />

      <section className="section">
        <div className="section-header">
          <span className="eyebrow">From the Blog</span>
          <h2>Latest finance intelligence</h2>
          <p>Deep-dive articles written to move you forward, not to fill a page.</p>
        </div>
        <div className="blog-grid">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <span className="blog-cat">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-meta">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <span className="blog-read-more">Read article</span>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/blog" className="btn-ghost">View All Articles</Link>
        </div>
      </section>

      <CTABanner
        title="Stay ahead of every financial decision."
        sub="Join the BankDeMark community and get finance insights that actually move the needle."
        btnText="Get Early Access"
        btnHref="/contact"
      />
    </>
  );
}
