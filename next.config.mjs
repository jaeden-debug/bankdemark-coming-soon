/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/category/blog",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/контакты",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/category/blog/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/контакты/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/blog/ai-operating-systems-for-entrepreneurs",
        destination: "/blog/ai-operating-system-entrepreneurs",
        permanent: true,
      },
      {
        source: "/blog/blackwater-aquatics-niche-ecommerce-case-study",
        destination: "/blog/blackwater-aquatics-case-study",
        permanent: true,
      },
      {
        source: "/blog/zylx-ai-business-automation-case-study",
        destination: "/blog/zylx-ai-workflow-automation-case-study",
        permanent: true,
      },
      {
        source: "/business-credit",
        destination: "/pillars/business-credit",
        permanent: true,
      },
      {
        source: "/newsletter",
        destination: "/#newsletter",
        permanent: true,
      },
      {
        source: "/collections/live-foods",
        destination: "https://blackwateraquatics.ca/collections/live-foods",
        permanent: true,
      },
      {
        source: "/products/live-brine-shrimp",
        destination: "https://blackwateraquatics.ca/products/live-brine-shrimp",
        permanent: true,
      },
      {
        source: "/products/starter-daphnia-culture",
        destination: "https://blackwateraquatics.ca/products/starter-daphnia-culture",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
