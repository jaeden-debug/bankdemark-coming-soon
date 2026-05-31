import Link from "next/link";

/**
 * CommandCenterCTA
 * Persistent CTA strip shown at the bottom of every calculator.
 * Links users to the AI Financial Dashboard + contextually relevant next tools.
 *
 * Props:
 *   links  — optional override array of { href, label } objects
 *            defaults to the universal set below
 */

const DEFAULT_LINKS = [
  { href: "/money-health-score",                          label: "Money Health Score" },
  { href: "/financial-freedom-roadmap",                   label: "Roadmap Generator" },
  { href: "/calculators/budget-calculator",               label: "Budget Calculator" },
  { href: "/calculators/emergency-fund-calculator",       label: "Emergency Fund Calculator" },
  { href: "/calculators/net-worth-calculator",            label: "Net Worth Calculator" },
  { href: "/calculators/investment-calculator",           label: "Investment Calculator" },
  { href: "/calculators/retirement-calculator",           label: "Retirement Calculator" },
  { href: "/calculators/compound-interest-calculator",    label: "Compound Interest Calculator" },
];

export default function CommandCenterCTA({ links = DEFAULT_LINKS }) {
  return (
    <div className="cmd-cta-wrap">
      <div className="cmd-cta-card">
        {/* Left — headline block */}
        <div className="cmd-cta-left">
          <span className="cmd-cta-eyebrow">BankDeMark Command</span>
          <h3 className="cmd-cta-headline">
            Turn these numbers into a live financial plan.
          </h3>
          <p className="cmd-cta-sub">
            The AI Financial Dashboard connects your calculators, tracks net
            worth, models scenarios, and gives you a full financial command
            centre — in one place.
          </p>
          <a
            href="https://command.bankdemark.com/command"
            className="cmd-cta-primary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open AI Financial Dashboard →
          </a>
        </div>

        {/* Right — next tools grid */}
        <div className="cmd-cta-right">
          <span className="cmd-cta-tools-label">Recommended Next Tools</span>
          <div className="cmd-cta-tools-grid">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="cmd-cta-tool-link">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
