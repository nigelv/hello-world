import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { CheckIcon, ShieldIcon } from "@/components/Icons";
import { SITE, SUBURBS, WHY_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Dynamic Cleaning VIC | Local Eastern Suburbs Cleaners",
  description:
    "Learn about Dynamic Cleaning Victoria — a local, friendly and fully insured window, gutter and pressure cleaning business serving Melbourne’s eastern suburbs.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-mint">
            About us
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Local cleaners who care about your home
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Dynamic Cleaning VIC specialises in helping clients maintain the
            integrity of their biggest asset — with clear communication and a
            real satisfaction guarantee.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
              A friendly, professional local business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              Window washing can feel personal — someone is often moving through
              rooms in your home. Trust matters. We&apos;re a local family
              business: punctual, efficient and respectful, so you feel
              comfortable having us work in your space.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              There are cheap window cleaners out there, and we often can&apos;t
              compete with rock-bottom prices — and we don&apos;t want to. What
              makes us different is finding out exactly what you need, then doing
              everything possible to deliver it.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-slate">
              Our goal is an excellent experience with a professional, reliable
              local cleaner that leaves you 100% satisfied.
            </p>
          </div>

          <div className="bg-brand-mist p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white text-brand-teal shadow-sm">
              <ShieldIcon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-display text-xl font-semibold text-brand-navy">
              Satisfaction guarantee
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-slate">
              {SITE.guarantee}
            </p>
            <ul className="mt-6 space-y-3">
              {WHY_US.map((item) => (
                <li key={item.title} className="flex gap-3 text-sm text-brand-navy">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <span>
                    <strong className="font-semibold">{item.title}.</strong>{" "}
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            Proudly serving the eastern suburbs
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-slate">
            We service clients across the eastern suburbs including, but not
            limited to:
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {SUBURBS.map((suburb) => (
              <li
                key={suburb}
                className="bg-white px-3 py-1.5 text-sm font-medium text-brand-navy ring-1 ring-brand-navy/5"
              >
                {suburb}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-brand-slate">
            Ready to book?{" "}
            <Link href="/contact" className="font-semibold text-brand-teal hover:underline">
              Contact us
            </Link>{" "}
            or call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-brand-teal hover:underline">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <CTABanner title="Experience the Dynamic Cleaning difference" />
    </>
  );
}
