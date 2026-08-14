import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE, SUBURBS, suburbFromSlug, suburbSlug } from "@/lib/site";
import Link from "next/link";

type Params = { suburb: string };

export function generateStaticParams() {
  return SUBURBS.map((suburb) => ({ suburb: suburbSlug(suburb) }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const suburb = suburbFromSlug(params.suburb);
  if (!suburb) return {};
  return {
    title: `Window & Gutter Cleaning ${suburb} | Dynamic Cleaning Vic`,
    description: `Professional window cleaning and gutter cleaning in ${suburb}, Eastern Suburbs Melbourne. Local team, free quotes. Call Dynamic Cleaning Vic ${SITE.phone}.`,
    alternates: { canonical: `${SITE.url}/areas/${params.suburb}` },
  };
}

export default function AreaSuburbPage({ params }: { params: Params }) {
  const suburb = suburbFromSlug(params.suburb);
  if (!suburb) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: suburb, path: `/areas/${params.suburb}` },
        ])}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <h1 className="font-display text-4xl font-semibold text-navy">
          Window and gutter cleaning in {suburb}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Dynamic Cleaning Vic is a local team for professional window cleaning
          and gutter cleaning in {suburb} and nearby Eastern Suburbs Melbourne.
          We clean interior and exterior glass, frames and sills, and we clear
          gutters and downpipes so Victoria rain stays off your walls.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Searching for window cleaning near me or gutter cleaning near me in{" "}
          {suburb}? Call {SITE.phone} for a free, no-obligation quote on
          windows, gutters, or both.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
          <Link href={`/window-cleaning/${params.suburb}`} className="text-primary hover:underline">
            Window cleaning {suburb} →
          </Link>
          <Link href={`/gutter-cleaning/${params.suburb}`} className="text-primary hover:underline">
            Gutter cleaning {suburb} →
          </Link>
        </div>
      </div>
      <CTASection
        title={`Protect your ${suburb} home this season`}
        body={`Schedule window or gutter cleaning in ${suburb} now. FREE QUOTE — ${SITE.phone}.`}
      />
    </>
  );
}
