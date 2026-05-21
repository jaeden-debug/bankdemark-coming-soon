import Link from "next/link";
import { posts } from "../data/posts";

export const metadata = {
  title: "Finance Blog",
  description: "Expert articles on personal finance, investing, business credit, banking, debt management, and financial freedom from BankDeMark.",
};

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        <p className="eyebrow">The BankDeMark Blog</p>
        <h1>Finance intelligence, no filler.</h1>
        <p>Deep-dive guides written for people serious about building wealth, eliminating debt, and making smarter money decisions.</p>
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
    </>
  );
}
