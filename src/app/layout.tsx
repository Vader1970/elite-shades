import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Sans, Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionRoot } from "@/components/motion/MotionRoot";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Elite Shades | Website Redesign Concept";
const description =
  "A website redesign concept for Elite Shades, showcasing a modern and professional digital experience.";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title,
    description,
    images: [
      {
        url: "/images/hero.webp",
        width: 2766,
        height: 1788,
        alt: "Contemporary living room with made-to-measure roller blinds",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${inter.variable} motion h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans text-body">
        <a
          href="#main"
          className="absolute top-[-60px] left-4 z-[100] bg-black px-4 py-3 font-heading text-sm font-semibold text-white transition-[top] duration-200 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <MotionRoot />
        <noscript>
          <style>
            {`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important}[data-reveal] img{scale:1!important}`}
          </style>
        </noscript>
      </body>
    </html>
  );
}
