import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Best Identity Theft Protection Services (2026) | Trusted Scorecard",
  description:
    "We tested and compared 12+ identity theft protection services. See our expert rankings for Aura, McAfee+, LifeLock, and more — updated March 2026.",
  openGraph: {
    title: "Best Identity Theft Protection Services (2026)",
    description:
      "Expert-reviewed identity theft protection. Compare Aura, McAfee+, LifeLock side-by-side.",
    type: "article",
  },
  other: {
    "impact-site-verification": "58b2ec57-9c1e-46ce-a708-6294b94cdb47",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
