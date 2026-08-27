import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { SITE, SUBURBS, WINDOW_FAQS, suburbFromSlug, suburbSlug } from "@/lib/site";

type Params = { suburb: string };

export function generateStaticParams() {
  return SUBURBS.map((suburb) => ({ suburb: suburbSlug(suburb) }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const suburb = suburbFromSlug(params.suburb);
  if (!suburb) return {};
  return {
    title: `Window Cleaning ${suburb} | Eastern Suburbs Melbourne`,
    description: `Professional window cleaning in ${suburb}, Eastern Suburbs Melbourne. Interior and exterior, streak-free results, free quotes. Call Dynamic Cleaning Vic ${SITE.phone}.`,
    alternates: { canonical: `${SITE.url}/window-cleaning/${params.suburb}` },
  };
}

export default function WindowSuburbPage({ params }: { params: Params }) {
  const suburb = suburbFromSlug(params.suburb);
  if (!suburb) notFound();

  const faqs = [
    {
      q: `Do you offer window cleaning in ${suburb}?`,
      a: `Yes. Dynamic Cleaning Vic provides professional interior and exterior window cleaning for homes in ${suburb} and surrounding Eastern Suburbs Melbourne.`,
    },
    ...WINDOW_FAQS.slice(0, 3),
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Window Cleaning", path: "/window-cleaning" },
          { name: suburb, path: `/window-cleaning/${params.suburb}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: `Window Cleaning ${suburb}`,
          description: `Professional window cleaning in ${suburb}, Eastern Suburbs Melbourne`,
          path: `/window-cleaning/${params.suburb}`,
        })}
      />
      <JsonLd data={faqSchema(faqs)} />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Window cleaning near me
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-navy">
          Professional window cleaning {suburb}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Looking for reliable window cleaning in {suburb}? Dynamic Cleaning Vic
          delivers streak-free interior and exterior glass for homes across{" "}
          {suburb} and Melbourne&apos;s Eastern Suburbs. We remove dirt, grime
          and water spots from panes, frames and sills on single-storey and
          two-storey properties, using safe techniques instead of a risky DIY
          ladder weekend.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {suburb} sits in a pocket of the east where trees, pollen and road
          film dull glass faster than inner-city apartments. Regular
          professional window cleaning every 6–12 months keeps rooms brighter,
          improves kerb appeal, and protects frames from long-term staining.
          Single-storey and two-storey homes are quoted on inspection, with
          screens and hard-water treatment included as add-ons when needed.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Pair your {suburb} window clean with{" "}
          <Link
            href={`/gutter-cleaning/${params.suburb}`}
            className="font-semibold text-primary hover:underline"
          >
            gutter cleaning in {suburb}
          </Link>{" "}
          on the same visit. See all{" "}
          <Link href="/window-cleaning" className="font-semibold text-primary hover:underline">
            window cleaning Eastern Suburbs Melbourne
          </Link>{" "}
          details, or call {SITE.phone} for a free quote today.
        </p>
      </article>
      <FAQ heading={`Window cleaning FAQs — ${suburb}`} items={faqs} />
      <CTASection
        title={`Ready for crystal clear windows in ${suburb}?`}
        body={`Call Dynamic Cleaning Vic now for a FREE QUOTE on ${SITE.phone}.`}
      />
    </>
  );
}
