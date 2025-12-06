import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "James Gabbitus | AI-Powered MVP Builder",
  description:
    "I help startup founders launch AI-powered products in 4-6 weeks using Next.js and Supabase. From idea to live product, fast.",
  keywords: [
    "AI MVP",
    "Next.js Developer",
    "Supabase Developer",
    "Startup MVP",
    "AI SaaS",
    "Freelance Developer",
    "Full Stack Developer",
  ],
  authors: [{ name: "James Gabbitus" }],
  creator: "James Gabbitus",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://yourdomain.com",
    title: "James Gabbitus | AI-Powered MVP Builder",
    description:
      "I help startup founders launch AI-powered products in 4-6 weeks using Next.js and Supabase.",
    siteName: "James Gabbitus",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "James Gabbitus - AI MVP Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Gabbitus | AI-Powered MVP Builder",
    description:
      "I help startup founders launch AI-powered products in 4-6 weeks.",
    creator: "@yourhandle",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}