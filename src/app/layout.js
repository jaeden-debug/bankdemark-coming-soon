import "./globals.css";

export const metadata = {
  title: "BankDeMark | Modern Finance Platform Coming Soon",
  description:
    "BankDeMark is a modern finance-focused platform preparing tools, insights, and digital resources for smarter money decisions. Coming soon at bankdemark.com.",
  robots: "index, follow",
  alternates: {
    canonical: "https://bankdemark.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
