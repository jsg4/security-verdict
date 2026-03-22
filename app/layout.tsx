import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trusted Scorecard | Independent Reviews You Can Trust",
  description:
    "Expert-tested comparison guides for identity theft protection, LLC services, online therapy, and more. Independent reviews backed by 5,000+ hours of research.",
  openGraph: {
    title: "Trusted Scorecard | Independent Reviews You Can Trust",
    description:
      "Expert-tested comparison guides. Compare top services side-by-side with honest, unbiased reviews.",
    type: "website",
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
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
