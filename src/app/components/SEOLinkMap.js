import Link from "next/link";
import { getRelatedLinks } from "../data/seoMap";

function getType(href) {
  if (href.startsWith("/calculators") || href.includes("calculator")) return "Tool";
  if (href.startsWith("/pillars")) return "Pillar";
  if (href.startsWith("/blog")) return "Guide";
  if (href.includes("quiz")) return "Diagnostic";
  if (href.includes("roadmap")) return "Plan";
  if (href.includes("money-health-score")) return "Score";
  return "Resource";
}

export default function SEOLinkMap({ currentPath }) {
  const links = getRelatedLinks(currentPath, 5);
  if (!links.length) return null;

  const [featured, ...secondary] = links;

  return (
    <section className="seo-link-map smart-link-map">
      <div className="smart-link-inner">
        <div className="smart-link-copy">
          <span className="eyebrow">Recommended Next Steps</span>
          <h2>Continue Building Your Financial System</h2>
          <p>
            Follow the most relevant tools, guides, and finance pillars connected
            to this page.
          </p>
        </div>

        <div className="smart-link-content">
          <Link href={featured.href} className="smart-link-featured">
            <span>{getType(featured.href)}</span>
            <strong>{featured.label}</strong>
            <small>Best next move →</small>
          </Link>

          <div className="smart-link-list">
            {secondary.map((link) => (
              <Link key={link.href} href={link.href} className="smart-link-row">
                <span>{getType(link.href)}</span>
                <strong>{link.label}</strong>
                <small>Open →</small>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
