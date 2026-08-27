import { Fraunces, DM_Sans } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCallBar } from "@/components/StickyCallBar";
import { SITE } from "@/lib/site";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Professional Window & Gutter Cleaning | Eastern Suburbs Melbourne",
    template: "%s",
  },
  description:
    "Expert local window and gutter cleaning in Melbourne's Eastern Suburbs. Serving Box Hill, Blackburn, Doncaster, Ringwood & more. Professional results, free quotes. Call 0433 230 310.",
  keywords: [
    "gutter cleaning",
    "window cleaning",
    "window cleaning near me",
    "gutter cleaning near me",
    "window cleaning Eastern Suburbs Melbourne",
    "gutter cleaning Eastern Suburbs Melbourne",
    "window and gutter cleaning Melbourne Eastern Suburbs",
    "gutter cleaning Box Hill",
    "window cleaning Blackburn",
    "professional window cleaning Doncaster",
    "Eastern Suburbs window cleaners",
    "local gutter cleaning Victoria",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE.url,
    siteName: SITE.name,
    title: "Professional Window & Gutter Cleaning | Eastern Suburbs Melbourne",
    description:
      "Expert local window and gutter cleaning in Melbourne's Eastern Suburbs. Serving Box Hill, Blackburn, Doncaster, Ringwood & more. Call 0433 230 310.",
    images: [
      {
        url: "/images/hero-window-cleaning.jpg",
        width: 1376,
        height: 768,
        alt: "Professional window cleaning team working on two-storey home in Blackburn Eastern Suburbs Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Window & Gutter Cleaning | Eastern Suburbs Melbourne",
    description:
      "Expert local window and gutter cleaning in Melbourne's Eastern Suburbs. Free quotes. Call 0433 230 310.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#0C4A6E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground pb-20 md:pb-0">
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
