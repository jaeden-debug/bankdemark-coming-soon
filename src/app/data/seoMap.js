// ============================================================
// BANKDEMARK SEO LINK GRAPH
// Every blog post links to: Financial Freedom pillar,
// Retirement Calculator, Compound Interest Calculator,
// Investment Calculator (where contextually appropriate)
// plus cluster-relevant articles and tools.
// ============================================================

export const seoNodes = {

  // ----------------------------------------------------------
  // PILLAR NODES — FINANCIAL CALCULATORS CLUSTER
  // ----------------------------------------------------------
  "/pillars/financial-calculators": {
    label: "Financial Calculators Hub",
    cluster: "financial-calculators",
    desc: "Every BankDeMark financial calculator — compound interest, retirement, FIRE, net worth, debt, mortgage.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/calculators/investment-calculator",
      "/calculators/fire-calculator",
      "/calculators/net-worth-calculator",
      "/calculators/budget-calculator",
      "/calculators/debt-payoff-calculator",
      "/calculators/mortgage-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/command",
    ],
  },
  "/pillars/compound-interest-calculator": {
    label: "Compound Interest Calculator Guide",
    cluster: "compound-interest",
    desc: "The complete guide to compound interest — formula, inputs, Canada and U.S. strategies.",
    links: [
      "/pillars/financial-calculators",
      "/calculators/compound-interest-calculator",
      "/blog/what-is-compound-interest",
      "/blog/compound-interest-formula",
      "/blog/compound-growth-calculator",
      "/blog/daily-compound-interest",
      "/blog/monthly-compound-interest",
      "/blog/compound-interest-examples",
      "/blog/compound-interest-canada",
      "/blog/best-compound-interest-investments",
      "/blog/how-much-will-100-a-month-grow",
      "/blog/how-much-will-500-a-month-grow",
      "/blog/how-long-to-reach-1-million-investing",
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/command",
    ],
  },

  // ----------------------------------------------------------
  // COMPOUND INTEREST CLUSTER — SUPPORTING ARTICLES
  // ----------------------------------------------------------
  "/blog/what-is-compound-interest": {
    label: "What Is Compound Interest?",
    cluster: "compound-interest",
    desc: "Foundational guide to how compound interest works and why it matters.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/blog/compound-interest-formula",
      "/blog/compound-interest-examples",
      "/blog/compound-interest-canada",
    ],
  },
  "/blog/compound-interest-formula": {
    label: "Compound Interest Formula Explained",
    cluster: "compound-interest",
    desc: "Break down the math behind every compound interest calculation.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/what-is-compound-interest",
      "/blog/daily-compound-interest",
      "/blog/monthly-compound-interest",
    ],
  },
  "/blog/compound-growth-calculator": {
    label: "Compound Growth Calculator",
    cluster: "compound-interest",
    desc: "Project growth of an existing portfolio with regular contributions.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/compound-interest-formula",
      "/blog/how-much-will-500-a-month-grow",
      "/blog/compound-interest-canada",
    ],
  },
  "/blog/daily-compound-interest": {
    label: "Daily Compound Interest",
    cluster: "compound-interest",
    desc: "How daily compounding works and when it actually matters.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/pillars/financial-freedom",
      "/blog/compound-interest-formula",
      "/blog/monthly-compound-interest",
      "/blog/compound-interest-savings-account",
    ],
  },
  "/blog/monthly-compound-interest": {
    label: "Monthly Compound Interest",
    cluster: "compound-interest",
    desc: "Monthly compounding formula, tables, and how it applies to savings and mortgages.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/pillars/financial-freedom",
      "/blog/compound-interest-formula",
      "/blog/daily-compound-interest",
      "/blog/how-much-will-500-a-month-grow",
    ],
  },
  "/blog/compound-interest-examples": {
    label: "Compound Interest Examples",
    cluster: "compound-interest",
    desc: "15 real-world compound interest scenarios with full calculations.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/how-much-will-500-a-month-grow",
      "/blog/how-much-will-100-a-month-grow",
      "/blog/compound-interest-canada",
    ],
  },
  "/blog/compound-interest-canada": {
    label: "Compound Interest in Canada",
    cluster: "compound-interest",
    desc: "TFSA, RRSP, FHSA, and GIC compound interest strategies for Canadians.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/tfsa-calculator",
      "/calculators/rrsp-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/best-compound-interest-investments",
    ],
  },
  "/blog/best-compound-interest-investments": {
    label: "Best Compound Interest Investments",
    cluster: "compound-interest",
    desc: "Top investment vehicles for compounding in Canada and the USA.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/blog/compound-interest-canada",
      "/command",
    ],
  },
  "/blog/how-much-will-100-a-month-grow": {
    label: "How Much Will $100/Month Grow?",
    cluster: "compound-interest",
    desc: "Starter investor projections at $100/month contributions.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/compound-interest-examples",
      "/blog/how-much-will-500-a-month-grow",
    ],
  },
  "/blog/how-much-will-500-a-month-grow": {
    label: "How Much Will $500/Month Grow?",
    cluster: "compound-interest",
    desc: "Projections for investing $500 monthly at various rates.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/how-long-to-reach-1-million-investing",
      "/blog/compound-interest-examples",
    ],
  },
  "/blog/how-long-to-reach-1-million-investing": {
    label: "How Long to Reach $1 Million Investing",
    cluster: "compound-interest",
    desc: "Time-to-millionaire calculations at real contribution levels.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/fire-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/how-much-will-500-a-month-grow",
      "/command",
    ],
  },
  "/blog/compound-interest-savings-account": {
    label: "Compound Interest in Savings Accounts",
    cluster: "compound-interest",
    desc: "How savings accounts compound and which rates to target.",
    links: [
      "/pillars/compound-interest-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/emergency-fund-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog/daily-compound-interest",
    ],
  },

  // ----------------------------------------------------------
  // PERSONAL FINANCE CLUSTER
  // ----------------------------------------------------------
  "/blog/personal-finance-for-beginners": {
    label: "Personal Finance for Beginners",
    cluster: "personal-finance",
    desc: "The complete money system — budgeting, saving, debt, credit, investing.",
    links: [
      "/pillars/personal-finance",
      "/pillars/financial-freedom",
      "/calculators/budget-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-budget-money",
    ],
  },
  "/blog/how-to-budget-money": {
    label: "How to Budget Money",
    cluster: "personal-finance",
    desc: "Step-by-step budgeting frameworks that actually stick.",
    links: [
      "/calculators/budget-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/personal-finance",
      "/pillars/financial-freedom",
      "/blog/how-to-save-money-emergency-fund",
    ],
  },
  "/blog/how-to-save-money-emergency-fund": {
    label: "How to Save Money & Build an Emergency Fund",
    cluster: "personal-finance",
    desc: "Build your financial safety net in 90 days.",
    links: [
      "/calculators/emergency-fund-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/personal-finance",
      "/pillars/financial-freedom",
      "/blog/how-to-budget-money",
    ],
  },
  "/blog/how-to-build-credit": {
    label: "How to Build Credit",
    cluster: "debt",
    desc: "Build a strong credit score from scratch or repair a damaged one.",
    links: [
      "/pillars/debt-management",
      "/pillars/financial-freedom",
      "/calculators/credit-card-payoff-calculator",
      "/calculators/debt-payoff-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-build-business-credit",
    ],
  },

  // ----------------------------------------------------------
  // INVESTING CLUSTER
  // ----------------------------------------------------------
  "/blog/investing-for-beginners": {
    label: "Investing for Beginners",
    cluster: "investing",
    desc: "First principles of building wealth through markets.",
    links: [
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/index-funds-vs-etfs",
      "/blog/what-is-compound-interest",
    ],
  },
  "/blog/index-funds-vs-etfs": {
    label: "Index Funds vs ETFs",
    cluster: "investing",
    desc: "The definitive comparison for passive investors.",
    links: [
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/investing-for-beginners",
      "/blog/best-compound-interest-investments",
    ],
  },
  "/blog/how-to-start-investing": {
    label: "How to Start Investing",
    cluster: "investing",
    desc: "A practical first-steps guide for new investors.",
    links: [
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/investing-for-beginners",
      "/blog/index-funds-vs-etfs",
    ],
  },
  "/blog/index-fund-investing": {
    label: "Index Fund Investing Guide",
    cluster: "investing",
    desc: "How to build a passive portfolio with index funds.",
    links: [
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/index-funds-vs-etfs",
      "/blog/best-compound-interest-investments",
    ],
  },
  "/blog/average-stock-market-return": {
    label: "Average Stock Market Return",
    cluster: "investing",
    desc: "Historical returns data and what you can realistically expect.",
    links: [
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-long-to-reach-1-million-investing",
      "/blog/best-compound-interest-investments",
    ],
  },
  "/blog/investment-calculator-guide": {
    label: "Investment Calculator Guide",
    cluster: "investing",
    desc: "How to use an investment calculator to plan your wealth journey.",
    links: [
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/blog/how-much-will-500-a-month-grow",
      "/blog/how-long-to-reach-1-million-investing",
    ],
  },

  // ----------------------------------------------------------
  // FINANCIAL FREEDOM CLUSTER
  // ----------------------------------------------------------
  "/blog/financial-freedom-roadmap": {
    label: "Financial Freedom Roadmap",
    cluster: "freedom",
    desc: "The stage-by-stage path from debt to full financial independence.",
    links: [
      "/pillars/financial-freedom",
      "/financial-freedom-roadmap",
      "/financial-freedom-quiz",
      "/calculators/fire-calculator",
      "/calculators/retirement-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
    ],
  },

  // ----------------------------------------------------------
  // BUSINESS CREDIT & SYSTEMS CLUSTER
  // ----------------------------------------------------------
  "/blog/how-to-build-business-credit": {
    label: "How to Build Business Credit",
    cluster: "business-credit",
    desc: "Step-by-step: EIN, DUNS, trade lines, and building a PAYDEX score.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/blog/best-business-credit-cards-new-business",
      "/blog/how-to-build-credit",
    ],
  },
  "/blog/best-business-credit-cards-new-business": {
    label: "Best Business Credit Cards for New Businesses",
    cluster: "business-credit",
    desc: "How to evaluate business cards when your credit file is thin.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-build-business-credit",
    ],
  },
  "/blog/ai-finance-tools": {
    label: "AI Finance Tools",
    cluster: "business-credit",
    desc: "The best AI tools for financial management and business automation.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ai-automation-small-business",
      "/blog/how-to-build-business-credit",
    ],
  },
  "/blog/ai-automation-small-business": {
    label: "AI Automation for Small Business",
    cluster: "business-credit",
    desc: "How small businesses use AI to reduce costs and scale faster.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ai-finance-tools",
      "/blog/zylx-ai-workflow-automation-case-study",
    ],
  },
  "/blog/ai-operating-system-entrepreneurs": {
    label: "AI Operating System for Entrepreneurs",
    cluster: "business-credit",
    desc: "Building an AI-first business infrastructure from scratch.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ai-automation-small-business",
      "/blog/zylx-ai-workflow-automation-case-study",
    ],
  },
  "/blog/zylx-ai-workflow-automation-case-study": {
    label: "ZYLX AI Workflow Automation Case Study",
    cluster: "business-credit",
    desc: "How ZYLX.ai automates multi-brand business operations.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ai-automation-small-business",
      "/blog/ai-operating-system-entrepreneurs",
    ],
  },
  "/blog/blackwater-aquatics-case-study": {
    label: "Blackwater Aquatics Case Study",
    cluster: "business-credit",
    desc: "How a niche ecommerce brand was built from zero with zero paid ads.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-build-an-ecommerce-brand",
      "/blog/niche-ecommerce-topical-authority",
    ],
  },

  // ----------------------------------------------------------
  // ECOMMERCE & SEO CLUSTER
  // ----------------------------------------------------------
  "/blog/ai-seo-tools-small-business": {
    label: "AI SEO Tools for Small Business",
    cluster: "ecommerce",
    desc: "AI-powered SEO tools that level the playing field for small businesses.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/shopify-seo-guide",
      "/blog/ecommerce-seo-strategy",
    ],
  },
  "/blog/shopify-seo-guide": {
    label: "Shopify SEO Guide",
    cluster: "ecommerce",
    desc: "How to rank Shopify product and collection pages in Google.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ecommerce-seo-strategy",
      "/blog/how-to-build-an-ecommerce-brand",
    ],
  },
  "/blog/ecommerce-seo-strategy": {
    label: "Ecommerce SEO Strategy",
    cluster: "ecommerce",
    desc: "Full-funnel ecommerce SEO playbook for sustainable organic growth.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/shopify-seo-guide",
      "/blog/niche-ecommerce-topical-authority",
    ],
  },
  "/blog/how-to-build-an-ecommerce-brand": {
    label: "How to Build an Ecommerce Brand",
    cluster: "ecommerce",
    desc: "From product idea to profitable DTC brand — the complete guide.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/niche-ecommerce-topical-authority",
      "/blog/shopify-seo-guide",
    ],
  },
  "/blog/niche-ecommerce-topical-authority": {
    label: "Niche Ecommerce Topical Authority",
    cluster: "ecommerce",
    desc: "How to dominate a niche category with content-first SEO.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-build-an-ecommerce-brand",
      "/blog/ecommerce-seo-strategy",
    ],
  },
  "/blog/shopify-seo-strategy": {
    label: "Shopify SEO Strategy",
    cluster: "ecommerce",
    desc: "Advanced Shopify SEO strategy for scaling DTC stores.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/shopify-seo-guide",
      "/blog/ecommerce-seo-strategy",
    ],
  },
  "/blog/content-marketing-strategy-revenue": {
    label: "Content Marketing Strategy for Revenue",
    cluster: "ecommerce",
    desc: "How to turn a content calendar into a direct revenue engine.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/niche-ecommerce-topical-authority",
      "/blog/ecommerce-seo-strategy",
    ],
  },
  "/blog/ecommerce-conversion-rate-optimization": {
    label: "Ecommerce Conversion Rate Optimization",
    cluster: "ecommerce",
    desc: "CRO tactics that reduce cart abandonment and increase revenue per visitor.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-build-an-ecommerce-brand",
      "/blog/shopify-seo-guide",
    ],
  },
  "/blog/email-marketing-automation-ecommerce": {
    label: "Email Marketing Automation for Ecommerce",
    cluster: "ecommerce",
    desc: "Automated email flows that recover carts and drive repeat purchases.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ecommerce-conversion-rate-optimization",
      "/blog/content-marketing-strategy-revenue",
    ],
  },
  "/blog/local-seo-for-small-business": {
    label: "Local SEO for Small Business",
    cluster: "ecommerce",
    desc: "Google Business Profile and local search strategy for service businesses.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ai-seo-tools-small-business",
      "/blog/content-marketing-strategy-revenue",
    ],
  },
  "/blog/pricing-strategy-small-business": {
    label: "Pricing Strategy for Small Business",
    cluster: "ecommerce",
    desc: "Value-based pricing, anchoring, and margin frameworks for small businesses.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/small-business-financial-metrics",
      "/blog/how-to-build-an-ecommerce-brand",
    ],
  },
  "/blog/small-business-financial-metrics": {
    label: "Small Business Financial Metrics",
    cluster: "ecommerce",
    desc: "CAC, LTV, gross margin, burn rate, and the metrics that predict survival.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/pricing-strategy-small-business",
      "/blog/how-to-build-business-credit",
    ],
  },
  "/blog/dropshipping-vs-inventory-ecommerce": {
    label: "Dropshipping vs Inventory Ecommerce",
    cluster: "ecommerce",
    desc: "The full comparison: margins, risk, brand control, and scalability.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-build-an-ecommerce-brand",
      "/blog/pricing-strategy-small-business",
    ],
  },

  // ----------------------------------------------------------
  // WEB & BRAND CLUSTER
  // ----------------------------------------------------------
  "/blog/seo-driven-web-design-for-business": {
    label: "SEO-Driven Web Design for Business",
    cluster: "ecommerce",
    desc: "How to build a website that ranks and converts from day one.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/local-seo-for-small-business",
      "/blog/niche-ecommerce-topical-authority",
    ],
  },
  "/blog/stillawake-media-custom-website-development": {
    label: "StillAwake Media: Custom Website Development",
    cluster: "ecommerce",
    desc: "How StillAwake Media builds conversion-ready brand websites.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/seo-driven-web-design-for-business",
      "/blog/how-to-build-an-ecommerce-brand",
    ],
  },
  "/blog/how-to-build-online-business-ecosystem": {
    label: "How to Build a Modern Online Business Ecosystem",
    cluster: "ecommerce",
    desc: "The digital holding company model — multiple brands, one infrastructure.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/ai-automation-small-business",
      "/blog/seo-driven-web-design-for-business",
    ],
  },
  "/blog/how-to-build-personal-brand-online": {
    label: "How to Build a Personal Brand Online",
    cluster: "ecommerce",
    desc: "The system for building an authoritative personal brand that earns.",
    links: [
      "/pillars/business-credit",
      "/pillars/financial-freedom",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/content-marketing-strategy-revenue",
      "/blog/seo-driven-web-design-for-business",
    ],
  },

  // ----------------------------------------------------------
  // PILLAR PAGES
  // ----------------------------------------------------------
  "/pillars/personal-finance": {
    label: "Personal Finance Pillar",
    cluster: "personal-finance",
    desc: "Master budgeting, saving, debt, and money habits.",
    links: [
      "/calculators/budget-calculator",
      "/calculators/emergency-fund-calculator",
      "/calculators/net-worth-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/money-health-score",
      "/blog/personal-finance-for-beginners",
    ],
  },
  "/pillars/investing": {
    label: "Investing Pillar",
    cluster: "investing",
    desc: "Build wealth through markets, index funds, and tax-advantaged accounts.",
    links: [
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/calculators/tfsa-calculator",
      "/calculators/rrsp-calculator",
      "/blog/investing-for-beginners",
      "/blog/index-funds-vs-etfs",
    ],
  },
  "/pillars/debt-management": {
    label: "Debt Management Pillar",
    cluster: "debt",
    desc: "Eliminate debt strategically and rebuild your credit foundation.",
    links: [
      "/calculators/debt-payoff-calculator",
      "/calculators/credit-card-payoff-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-build-credit",
      "/blog/how-to-budget-money",
    ],
  },
  "/pillars/financial-freedom": {
    label: "Financial Freedom Pillar",
    cluster: "freedom",
    desc: "The path from zero to financial independence — FIRE, investing, and income.",
    links: [
      "/calculators/fire-calculator",
      "/calculators/retirement-calculator",
      "/calculators/net-worth-calculator",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/financial-freedom-roadmap",
      "/financial-freedom-quiz",
    ],
  },
  "/pillars/banking": {
    label: "Banking Pillar",
    cluster: "banking",
    desc: "Choose the right accounts, rates, and banking infrastructure.",
    links: [
      "/calculators/emergency-fund-calculator",
      "/calculators/budget-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog/how-to-save-money-emergency-fund",
      "/money-health-score",
    ],
  },
  "/pillars/business-credit": {
    label: "Business Credit Pillar",
    cluster: "business-credit",
    desc: "Build business credit, access capital, and grow with financial leverage.",
    links: [
      "/blog/how-to-build-business-credit",
      "/blog/best-business-credit-cards-new-business",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/blog/ai-finance-tools",
      "/blog/small-business-financial-metrics",
    ],
  },

  // ----------------------------------------------------------
  // CALCULATORS
  // ----------------------------------------------------------
  "/calculators/compound-interest-calculator": {
    label: "Compound Interest Calculator",
    cluster: "investing",
    desc: "See exactly how your money grows with compound interest over time.",
    links: [
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/blog/what-is-compound-interest",
      "/blog/compound-interest-formula",
    ],
  },
  "/calculators/investment-calculator": {
    label: "Investment Calculator",
    cluster: "investing",
    desc: "Project your portfolio value at any contribution level and return rate.",
    links: [
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
      "/blog/investing-for-beginners",
      "/blog/index-funds-vs-etfs",
    ],
  },
  "/calculators/retirement-calculator": {
    label: "Retirement Calculator",
    cluster: "freedom",
    desc: "Find out if you're on track for your retirement number.",
    links: [
      "/calculators/fire-calculator",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/pillars/financial-freedom",
      "/financial-freedom-roadmap",
      "/blog/how-long-to-reach-1-million-investing",
    ],
  },
  "/calculators/budget-calculator": {
    label: "Budget Calculator",
    cluster: "personal-finance",
    desc: "Build a budget that actually balances and helps you save.",
    links: [
      "/calculators/emergency-fund-calculator",
      "/calculators/debt-payoff-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/personal-finance",
      "/blog/how-to-budget-money",
    ],
  },
  "/calculators/fire-calculator": {
    label: "FIRE Calculator",
    cluster: "freedom",
    desc: "Calculate your FIRE number and timeline to financial independence.",
    links: [
      "/calculators/retirement-calculator",
      "/calculators/net-worth-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/pillars/financial-freedom",
      "/financial-freedom-roadmap",
    ],
  },
  "/calculators/net-worth-calculator": {
    label: "Net Worth Calculator",
    cluster: "freedom",
    desc: "Track your total financial position across all assets and liabilities.",
    links: [
      "/pillars/financial-freedom",
      "/calculators/fire-calculator",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/money-health-score",
    ],
  },
  "/calculators/debt-payoff-calculator": {
    label: "Debt Payoff Calculator",
    cluster: "debt",
    desc: "Model avalanche vs snowball payoff strategies for your debts.",
    links: [
      "/calculators/credit-card-payoff-calculator",
      "/calculators/budget-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/debt-management",
      "/blog/how-to-build-credit",
    ],
  },
  "/calculators/credit-card-payoff-calculator": {
    label: "Credit Card Payoff Optimizer",
    cluster: "debt",
    desc: "Find the fastest and cheapest way to eliminate credit card debt.",
    links: [
      "/calculators/debt-payoff-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/debt-management",
      "/blog/how-to-build-credit",
      "/money-health-score",
    ],
  },
  "/calculators/emergency-fund-calculator": {
    label: "Emergency Fund Calculator",
    cluster: "personal-finance",
    desc: "Calculate exactly how much you need in your emergency fund.",
    links: [
      "/calculators/budget-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/personal-finance",
      "/pillars/banking",
      "/blog/how-to-save-money-emergency-fund",
    ],
  },
  "/calculators/mortgage-calculator": {
    label: "Mortgage Calculator",
    cluster: "banking",
    desc: "Calculate monthly payments, amortisation, and total interest costs.",
    links: [
      "/calculators/rent-vs-buy-calculator",
      "/calculators/budget-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/banking",
      "/pillars/personal-finance",
    ],
  },
  "/calculators/rent-vs-buy-calculator": {
    label: "Rent vs Buy Calculator",
    cluster: "banking",
    desc: "Model the true 10-year cost of renting vs buying a home.",
    links: [
      "/calculators/mortgage-calculator",
      "/calculators/net-worth-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/banking",
      "/pillars/personal-finance",
    ],
  },
  "/calculators/tfsa-calculator": {
    label: "TFSA Calculator",
    cluster: "investing",
    desc: "Calculate your tax-free savings account growth over time.",
    links: [
      "/calculators/rrsp-calculator",
      "/calculators/investment-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
    ],
  },
  "/calculators/rrsp-calculator": {
    label: "RRSP Calculator",
    cluster: "investing",
    desc: "Project your RRSP growth and tax savings potential.",
    links: [
      "/calculators/tfsa-calculator",
      "/calculators/retirement-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/pillars/investing",
      "/pillars/financial-freedom",
    ],
  },

  // ----------------------------------------------------------
  // TOOLS & HUBS
  // ----------------------------------------------------------
  "/money-health-score": {
    label: "Money Health Score",
    cluster: "personal-finance",
    desc: "Get a personalised score across 6 financial dimensions.",
    links: [
      "/calculators/net-worth-calculator",
      "/calculators/budget-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/pillars/personal-finance",
      "/financial-freedom-roadmap",
    ],
  },
  "/financial-freedom-roadmap": {
    label: "Financial Freedom Roadmap Generator",
    cluster: "freedom",
    desc: "Your personalised step-by-step path to financial independence.",
    links: [
      "/pillars/financial-freedom",
      "/calculators/fire-calculator",
      "/calculators/retirement-calculator",
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/financial-freedom-quiz",
    ],
  },
  "/financial-freedom-quiz": {
    label: "Financial Freedom Quiz",
    cluster: "freedom",
    desc: "Discover your financial independence stage in 5 minutes.",
    links: [
      "/financial-freedom-roadmap",
      "/money-health-score",
      "/pillars/financial-freedom",
      "/calculators/fire-calculator",
      "/calculators/retirement-calculator",
      "/calculators/compound-interest-calculator",
    ],
  },
  "/calculators": {
    label: "Calculator Hub",
    cluster: "hub",
    desc: "Every BankDeMark financial calculator in one place.",
    links: [
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/calculators/fire-calculator",
      "/pillars",
      "/blog",
    ],
  },
  "/blog": {
    label: "Finance Blog",
    cluster: "hub",
    desc: "Deep-dive guides on every aspect of personal and business finance.",
    links: [
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars",
      "/money-health-score",
      "/financial-freedom-roadmap",
    ],
  },
  "/": {
    label: "BankDeMark — Finance Intelligence",
    cluster: "hub",
    desc: "The home of modern finance intelligence — calculators, guides, and pillar content.",
    links: [
      "/calculators/compound-interest-calculator",
      "/calculators/investment-calculator",
      "/calculators/retirement-calculator",
      "/pillars/financial-freedom",
      "/blog",
      "/money-health-score",
    ],
  },
  "/about": {
    label: "About BankDeMark",
    cluster: "hub",
    desc: "The BankDeMark mission: intelligence-first finance education.",
    links: [
      "/calculators",
      "/pillars",
      "/blog",
      "/money-health-score",
      "/financial-freedom-roadmap",
      "/calculators/net-worth-calculator",
    ],
  },
  "/pillars": {
    label: "Pillar Hub",
    cluster: "hub",
    desc: "Six disciplines of financial mastery — all in one place.",
    links: [
      "/calculators",
      "/calculators/compound-interest-calculator",
      "/calculators/retirement-calculator",
      "/blog",
      "/money-health-score",
      "/financial-freedom-roadmap",
    ],
  },
};

// ============================================================
// SMART getRelatedLinks
// Returns contextual links for any known path.
// For unknown paths, uses cluster inference before falling
// back to the universal high-value hub pages.
// ============================================================

const UNIVERSAL_FALLBACK = [
  "/calculators/compound-interest-calculator",
  "/calculators/investment-calculator",
  "/calculators/retirement-calculator",
  "/pillars/financial-freedom",
  "/financial-freedom-roadmap",
  "/money-health-score",
];

export function getRelatedLinks(currentPath, limit = 6) {
  const current = seoNodes[currentPath];

  // Known page — return its explicit link list
  if (current?.links?.length) {
    return current.links
      .filter((href) => href !== currentPath)
      .map((href) => ({
        href,
        label: seoNodes[href]?.label ?? labelFromPath(href),
        desc: seoNodes[href]?.desc ?? "",
        cluster: seoNodes[href]?.cluster ?? "",
      }))
      .slice(0, limit);
  }

  // Unknown page — try cluster-based inference
  const clusterMatch = inferCluster(currentPath);
  if (clusterMatch) {
    const clusterLinks = Object.entries(seoNodes)
      .filter(([path, node]) => node.cluster === clusterMatch && path !== currentPath)
      .slice(0, limit)
      .map(([href, node]) => ({ href, label: node.label, desc: node.desc ?? "", cluster: node.cluster }));

    if (clusterLinks.length >= 3) return clusterLinks.slice(0, limit);
  }

  // Final fallback — universal high-value pages
  return UNIVERSAL_FALLBACK
    .filter((href) => href !== currentPath)
    .map((href) => ({
      href,
      label: seoNodes[href]?.label ?? labelFromPath(href),
      desc: seoNodes[href]?.desc ?? "",
      cluster: seoNodes[href]?.cluster ?? "",
    }))
    .slice(0, limit);
}

function labelFromPath(href) {
  return href.split("/").filter(Boolean).pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()) ?? href;
}

function inferCluster(path) {
  if (path.includes("compound") || path.includes("interest")) return "compound-interest";
  if (path.includes("invest") || path.includes("etf") || path.includes("index-fund")) return "investing";
  if (path.includes("budget") || path.includes("save") || path.includes("personal-finance")) return "personal-finance";
  if (path.includes("credit") || path.includes("debt")) return "debt";
  if (path.includes("freedom") || path.includes("fire") || path.includes("retire")) return "freedom";
  if (path.includes("business") || path.includes("ecommerce") || path.includes("seo") || path.includes("shopify")) return "ecommerce";
  if (path.includes("banking") || path.includes("mortgage") || path.includes("tfsa") || path.includes("rrsp")) return "banking";
  return null;
}
