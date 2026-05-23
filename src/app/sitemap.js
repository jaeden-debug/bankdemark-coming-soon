import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://bankdemark.com";

const safeDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date() : date;
};

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/blog",
  "/calculators",
  "/pillars",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/financial-freedom-quiz",
  "/financial-freedom-roadmap",
  "/money-health-score",
  "/pillars/personal-finance",
  "/pillars/investing",
  "/pillars/business-credit",
  "/pillars/debt-management",
  "/pillars/financial-freedom",
  "/pillars/banking",
  "/calculators/budget-calculator",
  "/calculators/compound-interest-calculator",
  "/calculators/credit-card-payoff-calculator",
  "/calculators/debt-payoff-calculator",
  "/calculators/emergency-fund-calculator",
  "/calculators/fire-calculator",
  "/calculators/investment-calculator",
  "/calculators/mortgage-calculator",
  "/calculators/net-worth-calculator",
  "/calculators/rent-vs-buy-calculator",
  "/calculators/retirement-calculator",
  "/calculators/rrsp-calculator",
  "/calculators/tfsa-calculator",
];

export default function sitemap() {
  const posts = getAllPosts();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority: route === "" ? 1 : route.startsWith("/calculators") ? 0.9 : 0.7,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: safeDate(post.date),
      changeFrequency: "monthly",
      priority: 0.75,
    })),
  ];
}
