import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { SITE } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Window & Gutter Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    template: "%s | Dynamic Cleaning VIC",
  },
  description:
    "Professional window, gutter and pressure cleaning across Melbourne’s eastern suburbs. Local, reliable and fully insured. Call 0433 230 310 for a free quote.",
  keywords: [
    "window cleaning eastern suburbs Melbourne",
    "gutter cleaning Vermont South",
    "gutter cleaning Mount Waverley",
    "pressure cleaning eastern suburbs",
    "Dynamic Cleaning VIC",
    "window cleaner Glen Waverley",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE.url,
    siteName: SITE.name,
    title:
      "Window & Gutter Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description:
      "Friendly, local window, gutter and pressure cleaning. Satisfaction guaranteed. Call 0433 230 310.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Window & Gutter Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
    description:
      "Local window, gutter and pressure cleaning for Melbourne’s eastern suburbs.",
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a3d5c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-brand-navy focus:shadow"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
