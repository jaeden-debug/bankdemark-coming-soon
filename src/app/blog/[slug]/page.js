import { posts } from "../../data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return (
    <>
      <article>
        <div className="post-header">
          <span className="blog-cat">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="post-meta">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="prose">
          <p>This is a comprehensive guide covering everything you need to know about this topic. The information presented here is based on current best practices, expert research, and real-world application.</p>
          <h2>Why This Matters in 2025</h2>
          <p>The financial landscape has shifted dramatically. Interest rates, inflation, and changing market dynamics have made it more important than ever to understand the fundamentals and act on them with precision.</p>
          <h2>The Core Framework</h2>
          <p>Understanding this topic starts with getting the foundational concepts right. Start by assessing your current position honestly. Next, set specific, measurable targets. From there, the execution becomes straightforward: follow the framework, track your progress weekly, and make small adjustments as you learn.</p>
          <h2>Common Mistakes to Avoid</h2>
          <p>The three mistakes that derail most people are trying to do too much at once, ignoring the small numbers, and waiting for the perfect moment. There is no perfect time to start. Starting imperfectly today beats starting perfectly next year every single time.</p>
          <h2>What to Do Next</h2>
          <p>Take the information from this guide and apply at least one concept this week. Real progress comes from implementation, not just reading.</p>
          <p style={{marginTop: "32px"}}>
            <Link href="/blog" className="btn-ghost" style={{display:"inline-block"}}>Back to Blog</Link>
          </p>
        </div>
      </article>
      <CTABanner
        title="Want more guides like this?"
        sub="Explore all our finance topics across six core pillars, all free, all actionable."
        btnText="Browse All Topics"
        btnHref="/pillars"
      />
    </>
  );
}
