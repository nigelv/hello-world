import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Droplets, Home, Shield, Sparkles } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { QuoteForm } from "@/components/QuoteForm";
import { SuburbGrid } from "@/components/SuburbGrid";
import { Testimonials } from "@/components/Testimonials";
import { HOME_FAQS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional Window & Gutter Cleaning | Eastern Suburbs Melbourne",
  description:
    "Expert local window and gutter cleaning in Melbourne's Eastern Suburbs. Serving Box Hill, Blackburn, Doncaster, Ringwood & more. Professional results, free quotes. Call 0433 230 310.",
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-window-cleaning.jpg"
            alt="Professional window cleaning team working on two-storey home in Blackburn Eastern Suburbs Melbourne"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
              Window &amp; gutter cleaning near you
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
              Professional window and gutter cleaning in Melbourne&apos;s Eastern Suburbs
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Dynamic Cleaning Vic is the local team for crystal-clear windows and
              clear, flowing gutters across Box Hill, Blackburn, Doncaster,
              Ringwood, Croydon, Glen Waverley and surrounding Eastern Suburbs.
              Professional results. Free quotes. Same-week bookings most weeks.
            </p>
            <ul className="mt-8 grid gap-2 text-sm sm:grid-cols-2">
              {[
                "Interior & exterior windows",
                "Gutters and downpipes",
                "Fully insured local team",
                "Transparent pricing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-sky-200" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.phoneHref}
                className="inline-flex rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                Call now for your FREE quote: {SITE.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Book your professional clean today
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <QuoteForm compact />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-sm font-medium text-navy sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" /> Fully insured
          </span>
          <span className="inline-flex items-center gap-2">
            <Home className="h-4 w-4 text-primary" /> Local Eastern Suburbs
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" /> {SITE.ratingValue}/5 from{" "}
            {SITE.reviewCount} reviews
          </span>
          <span className="inline-flex items-center gap-2">
            <Droplets className="h-4 w-4 text-primary" /> {SITE.hours}
          </span>
        </div>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2
            id="services-heading"
            className="font-display text-3xl font-semibold text-navy sm:text-4xl"
          >
            Window and gutter cleaning Melbourne Eastern Suburbs
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Searching for window cleaning near me or gutter cleaning near me in
            the Eastern Suburbs? We keep the work residential, careful and
            local — no call-centre runaround. Choose a focused service or
            combine both on one visit.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Link
              href="/window-cleaning"
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:border-primary/30"
            >
              <Image
                src="/images/sparkling-windows-doncaster.jpg"
                alt="Sparkling clean windows after professional service in Doncaster Melbourne"
                width={1376}
                height={768}
                className="h-56 w-full object-cover transition group-hover:scale-[1.02]"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-navy">
                  Professional window cleaning
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Interior and exterior glass, frames and sills for homes in Box
                  Hill, Blackburn, Doncaster and beyond. Streak-free finish with
                  a free, no-obligation quote.
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Window cleaning Eastern Suburbs →
                </p>
              </div>
            </Link>
            <Link
              href="/gutter-cleaning"
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:border-primary/30"
            >
              <Image
                src="/images/gutter-cleaning-box-hill.jpg"
                alt="Gutter cleaning removing leaves and debris from roof in Box Hill Victoria"
                width={1376}
                height={768}
                className="h-56 w-full object-cover transition group-hover:scale-[1.02]"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-navy">
                  Professional gutter cleaning
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Leaves, sludge and blocked downpipes cleared safely so
                  Melbourne rain stays off your walls and footings. Free quotes
                  for homes across the Eastern Suburbs.
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Gutter cleaning Eastern Suburbs →
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              Eastern Suburbs window cleaners who still show up
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Dynamic Cleaning Vic is built for the leafy streets east of the
              city: deciduous trees that fill gutters every autumn, pollen film
              on glass, and two-storey homes that are awkward to DIY. We are a
              local gutter cleaning Victoria team as much as we are window
              specialists — the same van, the same people, the same phone
              number.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Homeowners book us because the quote is clear, the work is
              careful around gardens, and the finish is obvious from the
              kerb. If you want window cleaning near me Eastern Suburbs without
              a national franchise script, you are in the right place.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Safe methods for single and two-storey homes",
                "No hidden fees — free on-site quotes",
                "Screens, sills, hard-water spots and downpipes quoted up front",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/cleaning-van-glen-waverley.jpg"
            alt="Dynamic Cleaning Vic van parked at residential property in Glen Waverley"
            width={1376}
            height={768}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Before and after results
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            See the transformation with high-quality before and after photos of
            Eastern Suburbs homes — blocked gutters cleared and glass returned
            to a streak-free finish.
          </p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <BeforeAfter
              beforeSrc="/images/window-before.jpg"
              afterSrc="/images/window-after.jpg"
              beforeAlt="Dirty residential windows before professional window cleaning Eastern Suburbs Melbourne"
              afterAlt="Sparkling clean windows after professional service in Doncaster Melbourne"
              caption="Window cleaning — Eastern Suburbs Melbourne homes."
            />
            <BeforeAfter
              beforeSrc="/images/gutter-before.jpg"
              afterSrc="/images/gutter-after.jpg"
              beforeAlt="Blocked gutter overflowing with leaves before cleaning Box Hill Victoria"
              afterAlt="Before and after gutter cleaning results on Eastern Suburbs Melbourne home"
              caption="Gutter cleaning — leaves and sludge out, water flowing again."
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Service areas we cover
          </h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Box Hill, Blackburn, Doncaster, Templestowe, Ringwood, Croydon,
            Glen Waverley, Mount Waverley, Mitcham, Vermont, Surrey Hills,
            Balwyn, Camberwell and all Eastern Suburbs Melbourne. We also serve
            broader Victoria on request.
          </p>
          <SuburbGrid />
        </div>
      </section>

      <Testimonials />
      <FAQ heading="Frequently asked questions" items={HOME_FAQS} />
      <CTASection
        title="Ready for crystal clear windows and clear gutters?"
        body="Call Dynamic Cleaning Vic now for a FREE QUOTE on 0433 230 310 or book online. Serving Eastern Suburbs Melbourne today."
      />
    </>
  );
}
