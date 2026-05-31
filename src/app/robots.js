export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/s/",        // user-generated share links — ephemeral, no canonical content
          "/share/",    // legacy URL-encoded share route — redirects to calculators
          "/api/",      // API routes
          "/_next/",    // Next.js internals
        ],
      },
    ],
    sitemap: "https://bankdemark.com/sitemap.xml",
  };
}
