import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="brand">
            Bank<span>DeMark</span>
          </Link>
          <p className="footer-tagline">
            Modern finance intelligence for smarter business, money, and wealth decisions.
          </p>
          <p className="footer-credit">
            Built by{" "}
            {/* Added a modern, glowing gold underline animation on hover */}
            <a 
              href="https://stillawakemedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-(--cream) relative font-medium transition-colors hover:text-(--gold) duration-200 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 hover:after:w-full after:bg-(--gold) after:transition-all after:duration-300"
            >
              StillAwake Media
            </a>
          </p>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Explore</h4>
            <Link href="/pillars">Finance Pillars</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Topics</h4>
            <Link href="/pillars/personal-finance">Personal Finance</Link>
            <Link href="/pillars/investing">Investing</Link>
            <Link href="/pillars/business-credit">Business Credit</Link>
            <Link href="/pillars/financial-freedom">Financial Freedom</Link>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 BankDeMark. All rights reserved.</p>
        <p className="footer-legal-note">
          Informational content only. Not financial advice.{" "}
          <Link href="/disclaimer">See disclaimer.</Link>
        </p>
      </div>
    </footer>
  );
}