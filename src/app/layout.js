import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalCalculatorShare from "./components/GlobalCalculatorShare";

// Social preview image located in /public/bankdemark-finance-intelligence-banner.png
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
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "BankDeMark — Finance Intelligence for the Modern Era",
    description:
      "Modern finance insights, investing tools, business credit education, calculators, and wealth-building frameworks built for entrepreneurs and ambitious individuals.",
    url: "https://bankdemark.com",
    siteName: "BankDeMark",
    images: [
      {
        url: "/bankdemark-finance-intelligence-banner.png",
        width: 1200,
        height: 630,
        alt: "BankDeMark Finance Intelligence Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BankDeMark — Finance Intelligence for the Modern Era",
    description:
      "Modern finance insights, investing tools, business credit education, calculators, and wealth-building frameworks built for entrepreneurs and ambitious individuals.",
    images: ["/bankdemark-finance-intelligence-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 1. Added the structural head context wrapper */}
      <head /> 
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
              <GlobalCalculatorShare />
      </body>
    </html>
  );
}