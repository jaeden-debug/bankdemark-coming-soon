export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/wp-admin/",
        "/administrator",
        "/image/",
        "/wp-content/",
        "/wp-includes/",
        "/category/",
        "/tag/",
        "/author/",
        "/slottica-casino/",
        "/slot-gacor-online.jpg",
        "/2019/",
        "/2020/",
      ],
    },
    sitemap: "https://bankdemark.com/sitemap.xml",
    host: "https://bankdemark.com",
  };
}
