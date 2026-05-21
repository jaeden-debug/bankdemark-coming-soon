import Link from "next/link";

export default function CTABanner({ title, sub, btnText, btnHref }) {
  return (
    <section className="cta-banner">
      <div className="cta-banner-inner">
        <span className="eyebrow">BankDeMark Intelligence</span>
        <h2>{title}</h2>
        <p>{sub}</p>
        <Link href={btnHref} className="cta-btn-large">
          {btnText}
        </Link>
      </div>
    </section>
  );
}
