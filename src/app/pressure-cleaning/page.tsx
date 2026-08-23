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
import { PRESSURE_FAQS, PRESSURE_PROCESS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pressure Cleaning Eastern Suburbs Melbourne | Driveways & Exteriors",
  description:
    "Pressure cleaning Eastern Suburbs Melbourne for driveways, decks, paths and exteriors. Restore surfaces and boost kerb appeal. Free quotes — call Dynamic Cleaning Vic 0433 230 310.",
  alternates: { canonical: `${SITE.url}/pressure-cleaning` },
};

const SURFACES = [
  "Concrete paths and driveways",
  "Wooden decks and patios",
  "Eaves and gutter surrounds",
  "Housing exteriors and brickwork",
  "Perspex and laserlight roofing areas",
  "Outdoor furniture and pool surrounds",
] as const;

export default function PressureCleaningPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pressure Cleaning", path: "/pressure-cleaning" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Pressure Cleaning",
          description:
            "Professional pressure cleaning for driveways, decks, paths and exteriors in Eastern Suburbs Melbourne",
          path: "/pressure-cleaning",
        })}
      />
      <JsonLd data={faqSchema(PRESSURE_FAQS)} />

      <header className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Pressure washing near me · Eastern Suburbs
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold sm:text-5xl">
            Pressure Cleaning Eastern Suburbs Melbourne
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Over time, dirt builds up and makes tiles, bricks and wood look old
            and worn. Even your driveway can look dirty and grungy after years
            of oil and grime. Dynamic Cleaning Vic uses specialised equipment to
            make paths, decks and exteriors across Box Hill, Blackburn,
            Doncaster, Glen Waverley and the Eastern Suburbs look good as new
            again — one of our favourite services because the change is so
            dramatic.
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
              Request a quote
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Why pressure clean your Eastern Suburbs home?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Build-up on outdoor surfaces is not just cosmetic. Contaminated
              paths, driveways and pool surrounds can become slippery and
              dangerous when wet. Professional pressure cleaning Eastern
              Suburbs Melbourne removes years of mildew and mould so you can
              enjoy a fresher look and safer footing around the home.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Planning to sell? A clean driveway and façade can add thousands in
              perceived value through stronger first impressions at inspections.
              It can be quite amazing what a good clean can do to an old
              driveway — without spending thousands on your own machine.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Removes years of dirt, mould, mildew and oil staining",
                "Safer outdoor surfaces that are less slippery when wet",
                "Dramatic before-and-after kerb appeal",
                "Local, insured team with clear communication",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/pressure-before.jpg"
            alt="Dirty driveway and exterior before pressure cleaning Eastern Suburbs Melbourne"
            width={1376}
            height={768}
            className="h-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Our pressure cleaning process
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We assess each surface first, prep the area, deep clean with
            equipment matched to concrete, timber, brick or paving, then reveal
            the result. Getting pressure and technique right is what separates a
            careful local clean from damage caused by the wrong approach.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRESSURE_PROCESS.map((step, index) => (
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
            Surfaces we can help with
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We can help with essentially anything that benefits from a controlled
            high-pressure wash. Tell us what you need restored and we will advise
            the right method for your Eastern Suburbs property.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {SURFACES.map((surface) => (
              <li
                key={surface}
                className="flex gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-navy"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {surface}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Eastern Suburbs areas we serve
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            From oil-spotted driveways in Doncaster to mossy paths in Camberwell
            and weathered decks in Hawthorn, Eastern Suburbs homes benefit from
            periodic pressure cleaning. Many households combine it with{" "}
            <Link href="/window-cleaning" className="font-semibold text-primary hover:underline">
              window cleaning
            </Link>{" "}
            and{" "}
            <Link href="/gutter-cleaning" className="font-semibold text-primary hover:underline">
              gutter cleaning
            </Link>{" "}
            for a full exterior reset.
          </p>
          <SuburbGrid />
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Before &amp; after pressure cleaning
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            One of the most obvious and satisfying ways to freshen your home
            exterior — see the difference on driveways and paths.
          </p>
          <div className="mt-8">
            <BeforeAfter
              beforeSrc="/images/pressure-before.jpg"
              afterSrc="/images/pressure-after.jpg"
              beforeAlt="Dirty driveway and exterior before pressure cleaning Eastern Suburbs Melbourne"
              afterAlt="Clean driveway and exterior after pressure cleaning Eastern Suburbs Melbourne"
              caption="Driveways and hard surfaces — years of grime lifted in one visit."
            />
          </div>
        </div>
      </section>

      <Testimonials heading="What our customers say" />
      <FAQ heading="FAQs about pressure cleaning" items={PRESSURE_FAQS} />
      <CTASection
        title="Ready to restore your driveway and exterior?"
        body="Call Dynamic Cleaning Vic for a FREE pressure cleaning quote on 0433 230 310. Serving Eastern Suburbs Melbourne today."
      />
    </>
  );
}
