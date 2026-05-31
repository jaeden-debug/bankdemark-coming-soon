import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NewsletterCTA from "./components/NewsletterCTA";

export const metadata = {
  title: {
    default: "BankDeMark",
    template: "%s | BankDeMark",
  },

  description:
    "Expert-level finance intelligence covering investing, personal finance, business credit, wealth building, calculators, and modern money strategy without the jargon.",

  metadataBase: new URL("https://bankdemark.com"),

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  manifest: "/manifest.json",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],

    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],

    shortcut: ["/favicon.ico"],
  },

  openGraph: {
    title: "BankDeMark | Modern Finance Intelligence",

    description:
      "Modern finance intelligence, calculators, investing tools, business credit, and financial freedom resources.",

    siteName: "BankDeMark",

    images: [
      {
        url: "/bankdemark-og.png",
        width: 1200,
        height: 630,
        alt: "BankDeMark — Modern Finance Intelligence",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "BankDeMark | Modern Finance Intelligence",

    description:
      "Modern finance intelligence, calculators, investing tools, business credit, and financial freedom resources.",

    images: ["/bankdemark-twitter.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ekcbB/2wnUQrZrguhPkXyw"
          async
        />
      </head>

      <body>
        <Nav />

        <main>{children}</main>

        <NewsletterCTA />

        <Footer />
</body>
    </html>
  );
}
