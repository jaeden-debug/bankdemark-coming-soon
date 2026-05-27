import Link from "next/link";
import { getAllPosts } from "../../lib/blog";
import SEOLinkMap from "../components/SEOLinkMap";
import BrandText from "../components/BrandText";

export const metadata = {
  alternates: {
    canonical: "/blog",
  },
  title: "Finance Blog | BankDeMark",
  description:
    "Expert articles on personal finance, investing, business credit, banking, debt management, AI tools, SEO, and financial freedom from BankDeMark.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="page-hero hub-hero">
        <p className="eyebrow"><BrandText dotcom /></p>
        <h1>Finance intelligence, no filler.</h1>
        <p>
          Deep-dive guides for building wealth, eliminating debt, improving
          credit, growing businesses, and making smarter financial decisions.
        </p>
      </div>

      <section className="hub-section section">
        <div className="hub-grid blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="hub-card blog-card">
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
      </section>
      <SEOLinkMap currentPath="/blog" />

    </>
  );
}
