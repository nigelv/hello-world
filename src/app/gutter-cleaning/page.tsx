import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { SuburbGrid } from "@/components/SuburbGrid";
import { Testimonials } from "@/components/Testimonials";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { GUTTER_FAQS, GUTTER_PROCESS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gutter Cleaning Eastern Suburbs Melbourne | Professional & Reliable",
  description:
    "Blocked gutters? Professional gutter cleaning in Eastern Suburbs Melbourne including Box Hill, Blackburn, Ringwood. Prevent damage, free quotes. Call Dynamic Cleaning Vic 0433 230 310.",
  alternates: { canonical: `${SITE.url}/gutter-cleaning` },
};

export default function GutterCleaningPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gutter Cleaning", path: "/gutter-cleaning" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Gutter Cleaning",
          description:
            "Thorough gutter and downpipe cleaning to prevent damage in Victoria homes",
          path: "/gutter-cleaning",
        })}
      />
      <JsonLd data={faqSchema(GUTTER_FAQS)} />

      <header className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Gutter cleaning near me · Victoria
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold sm:text-5xl">
            Professional Gutter Cleaning Eastern Suburbs Melbourne
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Blocked or overflowing gutters causing problems in your Eastern
            Suburbs home? Dynamic Cleaning Vic provides thorough gutter cleaning
            services across Box Hill, Blackburn, Doncaster, Ringwood, Croydon
            and Melbourne&apos;s Eastern Suburbs. We safely remove leaves,
            debris, and build-up from gutters and downpipes to prevent water
            damage, roof leaks, and pest issues. Protect your property with our
            reliable, professional gutter cleaning. Free quotes available.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SITE.phoneHref}
              className="rounded-full bg-cta px-6 py-3 text-sm font-semibold"
            >
              FREE QUOTE {SITE.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Message us now
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Why regular gutter cleaning is essential in Victoria
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Victoria&apos;s climate is unkind to neglected gutters. Autumn
              dumps a season of leaves into Box Hill and Ringwood fascias;
              winter rain then has nowhere to go except over the edge, behind
              bargeboards and down internal walls. Local gutter cleaning
              Victoria is cheaper than a ceiling repair, and far cheaper than
              arguing with an insurer about &quot;lack of maintenance&quot;.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Overflowing gutters also invite mosquitoes, rats and possums.
              Homeowners who search gutter cleaning Box Hill or gutter cleaning
              Ringwood / Croydon / Glen Waverley are usually already seeing
              stains on eaves or puddles at the downpipe. We would rather you
              booked us before that — twice a year is the baseline, more often
              if large trees sit over the roof.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Prevents costly water damage to roofs, walls and foundations",
                "Reduces risk of mould and structural issues in Melbourne's climate",
                "Keeps your home safe from pests and blockages",
                "Maintains proper drainage year-round, especially before winter",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/clear-gutters-downpipes.jpg"
            alt="Clear gutters and downpipes after thorough cleaning Eastern Suburbs"
            width={1376}
            height={768}
            className="h-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Our safe gutter cleaning process
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Inspection, debris removal by hand or vacuum, flushing, downpipe
            clearing, optional guards installation. Safe for single and
            double-storey homes. No ladders on fragile roofs. We treat tiles,
            Colorbond and gardens as if they were our own, and we take the
            debris with us rather than leaving piles on the nature strip.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GUTTER_PROCESS.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border p-5">
                <p className="text-sm font-semibold text-primary">Step {index + 1}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Areas we serve in Eastern Suburbs &amp; Victoria
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Full coverage: Box Hill · Blackburn · Doncaster · Templestowe ·
            Ringwood · Croydon · Glen Waverley · Mitcham · Vermont · Surrey
            Hills and all surrounding Eastern Suburbs. Mobile service across
            Victoria. Gutter cleaning Eastern Suburbs Melbourne is our everyday
            work — we already know which streets fill first after a northerly
            and a dump of rain.
          </p>
          <SuburbGrid service="gutter" />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Pricing &amp; packages
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              A typical home gutter clean includes full debris removal and
              flush. Add gutter guard supply/install. Transparent pricing, free
              quotes. Larger roofs, steep pitches and heavy sludge after years
              of neglect are quoted on inspection so you are never guessing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Many clients pair this with{" "}
              <Link href="/window-cleaning" className="font-semibold text-primary hover:underline">
                professional window cleaning
              </Link>{" "}
              so the whole exterior looks looked-after before winter or before
              putting the house on the market.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Free quote
            </p>
            <p className="mt-2 font-display text-4xl font-semibold text-navy">
              No hidden fees
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Typical 3–4 bedroom homes quoted on inspection
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Debris removal, flush and downpipe clearing</li>
              <li>Gutter guards quoted as an add-on</li>
              <li>Two-storey and steep roofs assessed for safe access</li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white"
            >
              Protect your home this season
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Before &amp; after gutter transformations
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            View real results from local Eastern Suburbs properties we have
            restored.
          </p>
          <div className="mt-8">
            <BeforeAfter
              beforeSrc="/images/gutter-before.jpg"
              afterSrc="/images/gutter-after.jpg"
              beforeAlt="Gutter cleaning removing leaves and debris from roof in Box Hill Victoria — before"
              afterAlt="Before and after gutter cleaning results on Eastern Suburbs Melbourne home"
              caption="Blocked channels cleared — water can move again."
            />
          </div>
          <Image
            src="/images/gutter-cleaning-box-hill.jpg"
            alt="Safe ladder-free gutter cleaning service in Ringwood"
            width={1376}
            height={768}
            className="mt-8 rounded-2xl object-cover"
          />
        </div>
      </section>

      <Testimonials heading="Customer testimonials" />
      <FAQ heading="FAQs about gutter cleaning" items={GUTTER_FAQS} />
      <CTASection
        title="Don't wait for blockages or leaks"
        body="Get professional gutter cleaning in the Eastern Suburbs today. FREE QUOTE — Call 0433 230 310 or message us now. Dynamic Cleaning Vic — your local experts."
      />
    </>
  );
}
