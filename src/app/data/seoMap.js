export const seoNodes = {
  "/pillars/personal-finance": {
    label: "Personal Finance Pillar",
    cluster: "personal-finance",
    links: [
      "/calculators/budget-calculator",
      "/calculators/emergency-fund-calculator",
      "/calculators/net-worth-calculator",
      "/money-health-score",
      "/blog/personal-finance-for-beginners",
      "/blog/how-to-budget-money",
      "/blog/how-to-save-money-emergency-fund",
    ],
  },

  "/pillars/investing": {
    label: "Investing Pillar",
    cluster: "investing",
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
    links: [
      "/calculators/debt-payoff-calculator",
      "/calculators/credit-card-payoff-calculator",
      "/blog/how-to-build-credit",
      "/blog/how-to-budget-money",
      "/money-health-score",
    ],
  },

  "/pillars/financial-freedom": {
    label: "Financial Freedom Pillar",
    cluster: "freedom",
    links: [
      "/calculators/fire-calculator",
      "/calculators/retirement-calculator",
      "/calculators/net-worth-calculator",
      "/financial-freedom-roadmap",
      "/financial-freedom-quiz",
      "/blog/financial-freedom-roadmap",
    ],
  },

  "/pillars/banking": {
    label: "Banking Pillar",
    cluster: "banking",
    links: [
      "/calculators/emergency-fund-calculator",
      "/calculators/budget-calculator",
      "/blog/how-to-save-money-emergency-fund",
      "/money-health-score",
    ],
  },

  "/pillars/business-credit": {
    label: "Business Credit Pillar",
    cluster: "business-credit",
    links: [
      "/blog/how-to-build-business-credit",
      "/blog/best-business-credit-cards-new-business",
      "/blog/ai-finance-tools",
      "/blog/ai-seo-tools-small-business",
      "/blog/shopify-seo-guide",
      "/blog/ecommerce-seo-strategy",
    ],
  },

  "/calculators/compound-interest-calculator": {
    label: "Compound Interest Calculator",
    cluster: "investing",
    links: ["/pillars/investing", "/calculators/investment-calculator", "/calculators/retirement-calculator", "/blog/investing-for-beginners"],
  },

  "/calculators/investment-calculator": {
    label: "Investment Calculator",
    cluster: "investing",
    links: ["/pillars/investing", "/calculators/compound-interest-calculator", "/calculators/tfsa-calculator", "/calculators/rrsp-calculator", "/blog/index-funds-vs-etfs"],
  },

  "/calculators/retirement-calculator": {
    label: "Retirement Calculator",
    cluster: "freedom",
    links: ["/pillars/financial-freedom", "/calculators/fire-calculator", "/calculators/investment-calculator", "/financial-freedom-roadmap"],
  },

  "/calculators/tfsa-calculator": {
    label: "TFSA Calculator",
    cluster: "investing",
    links: ["/pillars/investing", "/calculators/rrsp-calculator", "/calculators/investment-calculator", "/blog/investing-for-beginners"],
  },

  "/calculators/rrsp-calculator": {
    label: "RRSP Calculator",
    cluster: "investing",
    links: ["/pillars/investing", "/calculators/tfsa-calculator", "/calculators/retirement-calculator", "/blog/investing-for-beginners"],
  },

  "/calculators/debt-payoff-calculator": {
    label: "Debt Payoff Calculator",
    cluster: "debt",
    links: ["/pillars/debt-management", "/calculators/credit-card-payoff-calculator", "/calculators/budget-calculator", "/blog/how-to-build-credit"],
  },

  "/calculators/credit-card-payoff-calculator": {
    label: "Credit Card Payoff Optimizer",
    cluster: "debt",
    links: ["/pillars/debt-management", "/calculators/debt-payoff-calculator", "/blog/how-to-build-credit", "/money-health-score"],
  },

  "/calculators/budget-calculator": {
    label: "Budget Calculator",
    cluster: "personal-finance",
    links: ["/pillars/personal-finance", "/calculators/emergency-fund-calculator", "/calculators/debt-payoff-calculator", "/blog/how-to-budget-money"],
  },

  "/calculators/fire-calculator": {
    label: "FIRE Calculator",
    cluster: "freedom",
    links: ["/pillars/financial-freedom", "/calculators/retirement-calculator", "/calculators/net-worth-calculator", "/financial-freedom-roadmap"],
  },

  "/calculators/mortgage-calculator": {
    label: "Mortgage Calculator",
    cluster: "banking",
    links: ["/calculators/rent-vs-buy-calculator", "/calculators/budget-calculator", "/pillars/banking", "/pillars/personal-finance"],
  },

  "/calculators/rent-vs-buy-calculator": {
    label: "Rent vs Buy Calculator",
    cluster: "banking",
    links: ["/calculators/mortgage-calculator", "/calculators/budget-calculator", "/calculators/net-worth-calculator", "/pillars/banking"],
  },

  "/calculators/net-worth-calculator": {
    label: "Net Worth Calculator",
    cluster: "freedom",
    links: ["/pillars/financial-freedom", "/money-health-score", "/calculators/fire-calculator", "/calculators/investment-calculator"],
  },

  "/calculators/emergency-fund-calculator": {
    label: "Emergency Fund Calculator",
    cluster: "personal-finance",
    links: ["/pillars/personal-finance", "/pillars/banking", "/calculators/budget-calculator", "/blog/how-to-save-money-emergency-fund"],
  },

  "/money-health-score": {
    label: "Money Health Score",
    cluster: "personal-finance",
    links: ["/calculators", "/pillars/personal-finance", "/calculators/net-worth-calculator", "/financial-freedom-roadmap"],
  },

  "/financial-freedom-roadmap": {
    label: "Financial Freedom Roadmap Generator",
    cluster: "freedom",
    links: ["/pillars/financial-freedom", "/calculators/fire-calculator", "/calculators/retirement-calculator", "/financial-freedom-quiz"],
  },

  "/financial-freedom-quiz": {
    label: "Financial Freedom Quiz",
    cluster: "freedom",
    links: ["/financial-freedom-roadmap", "/money-health-score", "/pillars/financial-freedom", "/calculators/fire-calculator"],
  },

  "/calculators": {
    label: "Calculator Hub",
    cluster: "hub",
    links: ["/pillars", "/money-health-score", "/financial-freedom-roadmap", "/blog"],
  },

  "/blog": {
    label: "Blog Hub",
    cluster: "hub",
    links: ["/calculators", "/pillars", "/money-health-score", "/financial-freedom-roadmap"],
  },

  "/pillars": {
    label: "Pillar Hub",
    cluster: "hub",
    links: ["/calculators", "/blog", "/money-health-score", "/financial-freedom-roadmap"],
  },
};

export function getRelatedLinks(currentPath, limit = 6) {
  const current = seoNodes[currentPath];

  if (!current) {
    return Object.entries(seoNodes)
      .filter(([path]) => ["/calculators", "/pillars", "/blog", "/money-health-score", "/financial-freedom-roadmap"].includes(path))
      .map(([path, node]) => ({ href: path, label: node.label }))
      .slice(0, limit);
  }

  return current.links
    .map((href) => ({ href, label: seoNodes[href]?.label || href.replaceAll("/", " ").replaceAll("-", " ").trim() }))
    .slice(0, limit);
}
