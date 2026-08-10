import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Analytics, analyticsVerification } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Navbar } from "@/components/Navbar";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
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

const verification = analyticsVerification();

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: "%s | Dynamic Cleaning VIC",
  },
  description: SITE.defaultDescription,
  keywords: [
    "window cleaning Eastern Suburbs Melbourne",
    "gutter cleaning Eastern Suburbs Melbourne",
    "pressure cleaning Eastern Suburbs Melbourne",
    "solar panel cleaning Eastern Suburbs Melbourne",
    "gutter cleaning Vermont South",
    "gutter cleaning Mount Waverley",
    "window cleaner Glen Waverley",
    "Dynamic Cleaning VIC",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    images: [
      {
        url: "/images/photos/hero-window-cleaner.jpg",
        width: 1536,
        height: 1024,
        alt: "Professional window cleaner using a squeegee on a residential window, Eastern Suburbs Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(verification ? { verification } : {}),
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
      <body className="min-h-full flex flex-col antialiased pb-[4.5rem] md:pb-0">
        <Analytics />
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
        <StickyMobileCTA />
      </body>
    </html>
  );
}
