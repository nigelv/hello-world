import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTABanner } from "@/components/CTABanner";
import { Hero } from "@/components/Hero";
import { NextSteps } from "@/components/NextSteps";
import { ServicesOverview } from "@/components/ServicesOverview";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { SERVICES, SITE, SUBURBS } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: SITE.defaultTitle },
  description: SITE.defaultDescription,
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  const pressure = SERVICES[2];

  return (
    <>
      <Hero />
      <ServicesOverview />
      <NextSteps />

      <section className="bg-brand-mist py-14 sm:py-16" aria-labelledby="results-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="results-heading"
              className="font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
            >
              Results you can see
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
              Real property photography — pressure cleaning that lifts kerb appeal
              across Eastern Suburbs Melbourne.
            </p>
          </div>
          <div className="mt-8">
            <BeforeAfter
              beforeSrc={pressure.beforeImage}
              afterSrc={pressure.afterImage}
              beforeAlt={pressure.beforeAlt}
              afterAlt={pressure.afterAlt}
              caption="Before & after — Eastern Suburbs Melbourne."
            />
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />

      <section className="border-t border-brand-navy/10 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-xl font-semibold text-brand-navy">
            Serving Eastern Suburbs Melbourne
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-brand-slate sm:text-base">
            {SUBURBS.slice(0, 10).join(", ")} and surrounds.{" "}
            <Link href="/contact#quote" className="font-semibold text-brand-teal hover:underline">
              Get a free quote
            </Link>{" "}
            or call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-brand-teal hover:underline">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
