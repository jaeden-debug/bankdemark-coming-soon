import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalCalculatorShare from "./components/GlobalCalculatorShare";

export const metadata = {
  title: {
    default: "BankDeMark — Modern Finance Intelligence, Investing & Wealth Building",
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

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "BankDeMark | Modern Finance Intelligence",
    description:
      "Modern finance intelligence, calculators, investing tools, business credit, and financial freedom resources.",

    url: "https://bankdemark.com",
    siteName: "BankDeMark",

    images: [
      {
        url: "/branding/og-image.png",
        width: 1200,
        height: 630,
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
    images: ["/branding/og-image.png"],
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
