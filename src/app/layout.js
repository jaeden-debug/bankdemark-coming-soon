import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalCalculatorShare from "./components/GlobalCalculatorShare";

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

  openGraph: {
    title: "BankDeMark | Modern Finance Intelligence",
    description:
      "Modern finance intelligence, calculators, investing tools, business credit, and financial freedom resources.",

    url: "https://bankdemark.com",
    siteName: "BankDeMark",

    images: [
      {
        url: "/bankdemark-finance-intelligence-square-og.png",
        width: 1200,
        height: 1200,
        alt: "BankDeMark Finance Intelligence",
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
    images: ["/bankdemark-finance-intelligence-square-og.png"],
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

        <Footer />

        <GlobalCalculatorShare />
      </body>
    </html>
  );
}
