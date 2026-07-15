import type { Metadata } from "next";
import Link from "next/link";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CTABanner } from "@/components/CTABanner";
import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import { SuburbsList } from "@/components/SuburbsList";
import { Testimonials } from "@/components/Testimonials";
import { WhyUs } from "@/components/WhyUs";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Window & Gutter Cleaning Eastern Suburbs Melbourne | Dynamic Cleaning VIC",
  description:
    "Call the best local window & gutter cleaner in Melbourne’s eastern suburbs for a free quote. Window, gutter and pressure cleaning — Dynamic Cleaning VIC.",
  alternates: { canonical: SITE.url },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />

      <section className="bg-brand-mist py-16 sm:py-20" aria-labelledby="results-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2
              id="results-heading"
              className="font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
            >
              Results you can see
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
              From streak-free glass to cleared gutters and refreshed driveways —
              a professional clean transforms how your home looks and feels.
            </p>
          </div>
          <div className="mt-10">
            <BeforeAfter
              beforeAlt="Dirty driveway and exterior surfaces before pressure cleaning in eastern Melbourne"
              afterAlt="Freshly pressure cleaned driveway and exterior looking bright and new"
              caption="Pressure cleaning before & after — dramatic kerb appeal for eastern suburbs homes."
            />
          </div>
        </div>
      </section>

      <WhyUs />
      <Testimonials />

      <section className="bg-brand-mist py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SuburbsList />
          <p className="mt-8 text-sm text-brand-slate">
            Not sure if we cover your street?{" "}
            <Link href="/contact" className="font-semibold text-brand-teal hover:underline">
              Get in touch
            </Link>{" "}
            — we&apos;re happy to help.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
