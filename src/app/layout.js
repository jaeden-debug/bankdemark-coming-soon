import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://bankdemark.com"),

  title: {
    default: "BankDeMark | Modern Finance Intelligence",
    template: "%s | BankDeMark",
  },

  description:
    "Modern finance intelligence, calculators, investing tools, business credit, and financial freedom resources.",

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
        alt: "BankDeMark",
      },
    ],
    locale: "en_CA",
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
      <body>{children}</body>
    </html>
  );
}
