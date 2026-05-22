import Link from "next/link";
import { getAllPosts } from "../../lib/blog";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Finance Blog | BankDeMark",
  description:
    "Expert articles on personal finance, investing, business credit, banking, debt management, AI tools, SEO, and financial freedom from BankDeMark.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">The BankDeMark Blog</p>
        <h1>Finance intelligence, no filler.</h1>
        <p>
          Deep-dive guides for building wealth, eliminating debt, improving
          credit, growing businesses, and making smarter financial decisions.
        </p>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="blog-grid">
          {posts.map((post) => (
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
      </section>
      <SEOLinkMap currentPath="/blog" />

    </>
  );
}
