import Link from "next/link";
import { getRelatedLinks } from "../data/seoMap";

export default function SEOLinkMap({ currentPath, title = "Keep building your finance system", intro = "Explore the next most relevant tools, guides, and pillar pages connected to this topic." }) {
  const links = getRelatedLinks(currentPath, 6);

  return (
    <section className="seo-link-map">
      <div className="seo-link-map-head">
        <span className="eyebrow">Related BankDeMark Intelligence</span>
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>

      <div className="seo-link-map-grid">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="seo-link-card">
            <span>{link.label}</span>
            <small>Open resource →</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
