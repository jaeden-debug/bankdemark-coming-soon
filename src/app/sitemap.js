import { getAllPosts } from "@/lib/blog";

const siteUrl = "https://bankdemark.com";

const safeDate = (value) => {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date() : date;
};

// Routes deliberately excluded from indexing:
// /s/[id]       — user-generated share links (dynamic, ephemeral, no canonical content)
// /share/[calc] — calculator share URLs (dynamic, no canonical content)
// All blog posts are substantive content (2,000–10,000+ words) and are included.

const staticRoutes = [
  { path: "",                                          freq: "daily",   priority: 1.0 },
  { path: "/blog",                                     freq: "daily",   priority: 0.9 },
  { path: "/calculators",                              freq: "weekly",  priority: 0.9 },
  { path: "/pillars",                                  freq: "weekly",  priority: 0.85 },
  { path: "/pillars/personal-finance",                 freq: "weekly",  priority: 0.85 },
  { path: "/pillars/investing",                        freq: "weekly",  priority: 0.85 },
  { path: "/pillars/business-credit",                  freq: "weekly",  priority: 0.85 },
  { path: "/pillars/debt-management",                  freq: "weekly",  priority: 0.85 },
  { path: "/pillars/financial-freedom",                freq: "weekly",  priority: 0.85 },
  { path: "/pillars/banking",                          freq: "weekly",  priority: 0.85 },
  { path: "/calculators/compound-interest-calculator", freq: "weekly",  priority: 0.9 },
  { path: "/calculators/investment-calculator",        freq: "weekly",  priority: 0.9 },
  { path: "/calculators/retirement-calculator",        freq: "weekly",  priority: 0.9 },
  { path: "/calculators/budget-calculator",            freq: "weekly",  priority: 0.85 },
  { path: "/calculators/fire-calculator",              freq: "weekly",  priority: 0.85 },
  { path: "/calculators/net-worth-calculator",         freq: "weekly",  priority: 0.85 },
  { path: "/calculators/debt-payoff-calculator",       freq: "weekly",  priority: 0.85 },
  { path: "/calculators/credit-card-payoff-calculator",freq: "weekly",  priority: 0.85 },
  { path: "/calculators/emergency-fund-calculator",    freq: "weekly",  priority: 0.85 },
  { path: "/calculators/mortgage-calculator",          freq: "weekly",  priority: 0.85 },
  { path: "/calculators/rent-vs-buy-calculator",       freq: "weekly",  priority: 0.85 },
  { path: "/calculators/rrsp-calculator",              freq: "weekly",  priority: 0.85 },
  { path: "/calculators/tfsa-calculator",              freq: "weekly",  priority: 0.85 },
  { path: "/financial-freedom-roadmap",                freq: "weekly",  priority: 0.8  },
  { path: "/financial-freedom-quiz",                   freq: "monthly", priority: 0.75 },
  { path: "/money-health-score",                       freq: "monthly", priority: 0.75 },
  { path: "/about",                                    freq: "monthly", priority: 0.6  },
  { path: "/contact",                                  freq: "monthly", priority: 0.5  },
  { path: "/privacy",                                  freq: "yearly",  priority: 0.3  },
  { path: "/terms",                                    freq: "yearly",  priority: 0.3  },
  { path: "/disclaimer",                               freq: "yearly",  priority: 0.3  },
];

export default function sitemap() {
  const posts = getAllPosts();

  return [
    ...staticRoutes.map(({ path, freq, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: safeDate(post.date),
      changeFrequency: "monthly",
      priority: 0.75,
    })),
  ];
}
