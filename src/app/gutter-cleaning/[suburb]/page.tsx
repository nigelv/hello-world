import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { GUTTER_FAQS, SITE, SUBURBS, suburbFromSlug, suburbSlug } from "@/lib/site";

type Params = { suburb: string };

export function generateStaticParams() {
  return SUBURBS.map((suburb) => ({ suburb: suburbSlug(suburb) }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const suburb = suburbFromSlug(params.suburb);
  if (!suburb) return {};
  return {
    title: `Gutter Cleaning ${suburb} | Eastern Suburbs Melbourne`,
    description: `Professional gutter cleaning in ${suburb}, Eastern Suburbs Melbourne. Clear leaves, protect your roof, free quotes. Call Dynamic Cleaning Vic ${SITE.phone}.`,
    alternates: { canonical: `${SITE.url}/gutter-cleaning/${params.suburb}` },
  };
}

export default function GutterSuburbPage({ params }: { params: Params }) {
  const suburb = suburbFromSlug(params.suburb);
  if (!suburb) notFound();

  const faqs = [
    {
      q: `How often should gutters be cleaned in ${suburb}?`,
      a: `Most ${suburb} homes need professional gutter cleaning at least twice a year — more often if large trees sit over the roof. Book before winter and after autumn leaf fall.`,
    },
    ...GUTTER_FAQS.slice(1, 4),
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gutter Cleaning", path: "/gutter-cleaning" },
          { name: suburb, path: `/gutter-cleaning/${params.suburb}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: `Gutter Cleaning ${suburb}`,
          description: `Professional gutter and downpipe cleaning in ${suburb}, Eastern Suburbs Melbourne`,
          path: `/gutter-cleaning/${params.suburb}`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Local gutter cleaning Victoria
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-navy">
          Gutter cleaning {suburb}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Blocked gutters in {suburb}? Dynamic Cleaning Vic provides thorough
          gutter cleaning across {suburb} and Melbourne&apos;s Eastern Suburbs.
          We safely remove leaves, debris and sludge from gutters and downpipes
          so water damage, roof leaks and pests do not get a foothold through
          Victoria&apos;s wet months.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          A typical 3–4 bedroom home in {suburb} is from $220, including full
          debris removal and a flush. We inspect as we clean and can assess
          sagging lengths, leaking joins or gutter guard options. No ladders on
          fragile roofs — safety first on every {suburb} job.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Combine with{" "}
          <Link
            href={`/window-cleaning/${params.suburb}`}
            className="font-semibold text-primary hover:underline"
          >
            window cleaning in {suburb}
          </Link>{" "}
          , or read our full{" "}
          <Link href="/gutter-cleaning" className="font-semibold text-primary hover:underline">
            gutter cleaning Eastern Suburbs Melbourne
          </Link>{" "}
          guide. Free quotes on {SITE.phone}.
        </p>
      </article>
      <FAQ heading={`Gutter cleaning FAQs — ${suburb}`} items={faqs} />
      <CTASection
        title={`Schedule gutter cleaning in ${suburb} now`}
        body={`Don't wait for blockages or leaks. FREE QUOTE — Call ${SITE.phone}.`}
      />
    </>
  );
}
