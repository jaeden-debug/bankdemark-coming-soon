import Link from "next/link";
import { getRelatedLinks } from "../data/seoMap";

// Derive type badge from href — used for aria labels and visual chips
function getType(href) {
  if (href.includes("/calculators/") && href.split("/").length > 2) return "Calculator";
  if (href === "/calculators") return "Hub";
  if (href.startsWith("/pillars/") && href.split("/").length > 2) return "Pillar";
  if (href === "/pillars") return "Hub";
  if (href.startsWith("/blog/")) return "Guide";
  if (href === "/blog") return "Hub";
  if (href.includes("quiz")) return "Quiz";
  if (href.includes("roadmap")) return "Roadmap";
  if (href.includes("money-health-score")) return "Score";
  return "Resource";
}

// Icon per type — pure CSS-safe characters, no emoji dependency
function getIcon(type) {
  const icons = {
    Calculator: "∑",
    Guide:      "◈",
    Pillar:     "⬡",
    Hub:        "⊞",
    Quiz:       "◎",
    Roadmap:    "↗",
    Score:      "◐",
    Resource:   "→",
  };
  return icons[type] ?? "→";
}

// Section heading varies by cluster for relevance signaling
function getSectionHeading(cluster) {
  const headings = {
    "compound-interest": "Tools & Guides for This Topic",
    "investing":         "Build Your Investment Knowledge",
    "personal-finance":  "Your Next Steps in Personal Finance",
    "debt":              "Debt & Credit Resources",
    "freedom":           "Your Path to Financial Freedom",
    "ecommerce":         "Grow Your Business",
    "business-credit":   "Business Finance Resources",
    "banking":           "Banking & Savings Tools",
    "hub":               "Explore BankDeMark",
  };
  return headings[cluster] ?? "Continue Building Your Financial System";
}

export default function SEOLinkMap({ currentPath }) {
  const links = getRelatedLinks(currentPath, 6);
  if (!links.length) return null;

  const [featured, ...secondary] = links;
  const sectionHeading = getSectionHeading(featured.cluster);
  const featuredType = getType(featured.href);

  return (
    <section className="seo-link-map smart-link-map" aria-label="Related resources">
      <div className="smart-link-inner">

        <div className="smart-link-copy">
          <span className="eyebrow">Recommended Next Steps</span>
          <h2>{sectionHeading}</h2>
          <p>
            Curated tools, guides, and pillars connected to this page — each one
            moves you further along the BankDeMark financial system.
          </p>
        </div>

        <div className="smart-link-content">

          {/* Featured card — primary CTA */}
          <Link href={featured.href} className="smart-link-featured">
            <span className="smart-link-type">
              <i aria-hidden="true">{getIcon(featuredType)}</i>
              {featuredType}
            </span>
            <strong>{featured.label}</strong>
            {featured.desc && <p className="smart-link-desc">{featured.desc}</p>}
            <span className="smart-link-cta">Open {featuredType} →</span>
          </Link>

          {/* Secondary links grid */}
          {secondary.length > 0 && (
            <div className="smart-link-list">
              {secondary.map((link) => {
                const type = getType(link.href);
                return (
                  <Link key={link.href} href={link.href} className="smart-link-row">
                    <span className="smart-link-type">
                      <i aria-hidden="true">{getIcon(type)}</i>
                      {type}
                    </span>
                    <strong>{link.label}</strong>
                    {link.desc && <small className="smart-link-desc">{link.desc}</small>}
                    <span className="smart-link-arrow" aria-hidden="true">→</span>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
