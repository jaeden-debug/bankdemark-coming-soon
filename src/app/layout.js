import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import GlobalCalculatorShare from "./components/GlobalCalculatorShare";

export const metadata = {
  title: {
    default: "BankDeMark | Modern Finance Intelligence",
    template: "%s | BankDeMark",
  },
  description:
    "BankDeMark delivers expert finance insights across personal finance, investing, business credit, banking, and financial freedom strategies.",
  metadataBase: new URL("https://bankdemark.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "BankDeMark",
    type: "website",
    locale: "en_US",
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