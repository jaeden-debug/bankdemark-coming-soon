import Link from "next/link";
import BrandText from "./BrandText";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">

          <div className="footer-brand-top">

            <div className="footer-brand-logo">
              <Image
                src="/branding/transparent-BankDeMark-logo.png"
                alt="BankDeMark Logo"
                width={56}
                height={56}
                priority
              />
            </div>

            <div>

              <Link href="/" className="brand">
                <BrandText />
              </Link>

              <p className="footer-tagline">
                Financial intelligence, strategic calculators, and modern wealth frameworks.
              </p>

              <p className="footer-credit">
                Built by{" "}
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

          </div>

        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <p className="footer-heading">Explore</p>
            <Link href="/pillars">Finance Pillars</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Topics</p>
            <Link href="/pillars/personal-finance">Personal Finance</Link>
            <Link href="/pillars/investing">Investing</Link>
            <Link href="/pillars/business-credit">Business Credit</Link>
            <Link href="/pillars/financial-freedom">Financial Freedom</Link>
          </div>

          <div className="footer-col">
            <p className="footer-heading">Legal</p>
              <a href="https://command.bankdemark.com/command">AI Financial Dashboard</a>
              <a href="https://command.bankdemark.com/command/marketplace">Financial Marketplace</a>
              <a href="https://command.bankdemark.com/command/coach">AI Financial Coach</a>
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
