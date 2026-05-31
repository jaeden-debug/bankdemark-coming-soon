import Link from "next/link";
import SEOLinkMap from "../components/SEOLinkMap";

export const metadata = {
  title: "Financial Disclaimer | BankDeMark",
  description:
    "Important disclosures about BankDeMark content — all articles, calculators, and guides are educational only, not personalized financial advice.",
  alternates: { canonical: "/disclaimer" },
  openGraph: {
    title: "Financial Disclaimer | BankDeMark",
    description:
      "BankDeMark content is educational only. Read our full financial disclaimer and disclosure.",
    url: "https://bankdemark.com/disclaimer",
    siteName: "BankDeMark",
    type: "website",
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="legal-page">
        <div className="legal-hero">
          <p className="eyebrow">Legal</p>
          <h1>Financial Disclaimer</h1>
          <p>
            Please read this disclaimer carefully before relying on any content
            published on BankDeMark.
          </p>
          <span className="legal-datestamp">Last updated: May 2026</span>
        </div>

        <div className="legal-tools-strip">
          <span>BankDeMark</span>
          <Link href="/calculators/compound-interest-calculator">Compound Interest Calculator →</Link>
          <Link href="/calculators/retirement-calculator">Retirement Calculator →</Link>
          <Link href="/calculators/investment-calculator">Investment Calculator →</Link>
          <Link href="/pillars/financial-freedom">Financial Freedom →</Link>
        </div>

        <div className="legal-shell">

          {/* Primary disclaimer — prominent notice card */}
          <div className="legal-notice-card">
            <h2>Educational Content Only</h2>
            <p>
              Everything published on BankDeMark — articles, pillar pages,
              blog posts, financial calculators, guides, frameworks, and all
              other materials — is provided for <strong>informational and
              educational purposes only</strong>. Nothing on this Site
              constitutes professional financial advice, investment advice, tax
              advice, legal advice, or any other form of personalized
              professional advice.
            </p>
            <p>
              Always consult a qualified professional — such as a Certified
              Financial Planner (CFP), Certified Public Accountant (CPA), or
              licensed attorney — before making any significant financial
              decision.
            </p>
          </div>

          <div className="legal-card">
            <h2>No Client Relationship</h2>
            <p>
              Reading content on BankDeMark does not create a client-advisor
              relationship between you and BankDeMark or any of its
              contributors. No content on this Site should be interpreted as
              personalized advice for your specific financial situation.
            </p>
            <p>
              A qualified financial professional who understands your individual
              circumstances, risk tolerance, goals, and tax situation is the
              appropriate source for personalized guidance.
            </p>
          </div>

          <div className="legal-card">
            <h2>Individual Circumstances Vary</h2>
            <p>
              Financial strategies, investment approaches, and money management
              techniques discussed on BankDeMark may not be appropriate for
              every individual. Your financial situation, income, debt load,
              risk tolerance, tax circumstances, and long-term goals are unique
              to you.
            </p>
            <p>
              What is appropriate for one person may be entirely inappropriate
              for another. Use BankDeMark content to build financial literacy,
              not as a substitute for advice tailored to your circumstances.
            </p>
          </div>

          <div className="legal-card">
            <h2>No Guarantees of Results</h2>
            <p>
              Any examples, case studies, projections, or calculator outputs
              mentioned on BankDeMark are illustrative only. They represent
              hypothetical scenarios designed to help you understand financial
              concepts.
            </p>
            <p>
              Past performance is not indicative of future results. Investing
              involves risk, including the possible loss of principal. There are
              no guarantees that any strategy, framework, or approach described
              on this Site will achieve any particular financial outcome.
            </p>
          </div>

          <div className="legal-card">
            <h2>Calculator Outputs Are Illustrative</h2>
            <p>
              BankDeMark&rsquo;s financial calculators — including our{" "}
              <Link href="/calculators/compound-interest-calculator">
                Compound Interest Calculator
              </Link>
              ,{" "}
              <Link href="/calculators/retirement-calculator">
                Retirement Calculator
              </Link>
              , and{" "}
              <Link href="/calculators/investment-calculator">
                Investment Calculator
              </Link>{" "}
              — use inputs you provide to generate projections based on standard
              financial formulas.
            </p>
            <p>
              These outputs are estimates only. They do not account for taxes,
              fees, inflation variability, market volatility, or changes in
              your personal situation. Do not make financial decisions based
              solely on calculator results.
            </p>
          </div>

          <div className="legal-card">
            <h2>Content Accuracy</h2>
            <p>
              We make reasonable efforts to ensure the accuracy of information
              published on BankDeMark. However, financial regulations, tax
              laws, interest rates, and market conditions change frequently.
              Information accurate at time of publication may no longer reflect
              current conditions.
            </p>
            <p>
              Always verify important financial, legal, and tax information with
              authoritative primary sources before acting on it.
            </p>
            <h3>Canada and USA Notes</h3>
            <p>
              BankDeMark content covers both Canadian and American financial
              contexts where relevant. Tax laws, financial regulations, and
              account structures differ significantly between the two countries.
              Content marked as applicable to one jurisdiction may not apply to
              the other. Confirm jurisdiction-specific details with a local
              professional.
            </p>
          </div>

          <div className="legal-card">
            <h2>Affiliate Disclosure</h2>
            <p>
              BankDeMark may feature affiliate links or sponsored content. When
              this occurs, it will be clearly disclosed at the beginning of the
              relevant article or section. Our editorial content and
              recommendations are not influenced by commercial relationships.
            </p>
            <p>
              We do not accept payment to alter, inflate, or suppress editorial
              coverage. Our mission is to provide accurate, independent finance
              education.
            </p>
          </div>

          <div className="legal-card">
            <h2>Questions</h2>
            <p>
              Questions about this disclaimer or our editorial approach? Reach
              us through our{" "}
              <Link href="/contact">contact page</Link>. We respond within
              1–2 business days.
            </p>
          </div>
        </div>
      </div>

      <SEOLinkMap currentPath="/disclaimer" />
    </>
  );
}