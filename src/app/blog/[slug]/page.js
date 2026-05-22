import { getAllPosts, getPostBySlug, renderPostHtml } from "../../../lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTABanner from "../../components/CTABanner";
import SEOLinkMap from "../../components/SEOLinkMap";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | BankDeMark`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const html = renderPostHtml(post.content);

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

        <div
          className="prose post-prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="prose" style={{ paddingTop: 0 }}>
          <p style={{ marginTop: "32px" }}>
            <Link href="/blog" className="btn-ghost" style={{ display: "inline-block" }}>
              Back to Blog
            </Link>
          </p>
        </div>
      </article>

      <SEOLinkMap currentPath={`/blog/${post.slug}`} />

      <CTABanner
        title="Want more finance tools and guides?"
        sub="Explore BankDeMark calculators, roadmap tools, and pillar guides built for smarter money decisions."
        btnText="Open Calculator Hub"
        btnHref="/calculators"
      />
    </>
  );
}
