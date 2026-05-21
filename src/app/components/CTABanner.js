import Link from "next/link";

export default function CTABanner({ title, sub, btnText, btnHref }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        <h2>{title || "Ready to take control of your finances?"}</h2>
        <p>{sub || "Join thousands getting smarter about money every week."}</p>
        <Link href={btnHref || "/contact"} className="cta-btn-large">
          {btnText || "Get Started Free"}
        </Link>
      </div>
    </section>
  );
}
