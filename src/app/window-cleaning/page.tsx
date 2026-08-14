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
import { SITE, WINDOW_FAQS, WINDOW_PROCESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional Window Cleaning Eastern Suburbs Melbourne | Free Quote",
  description:
    "Crystal clear windows in Eastern Suburbs Melbourne. Interior & exterior window cleaning for homes in Box Hill, Blackburn, Doncaster. Safe, professional service. Book free quote: 0433 230 310.",
  alternates: { canonical: `${SITE.url}/window-cleaning` },
};

export default function WindowCleaningPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Window Cleaning", path: "/window-cleaning" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Window Cleaning",
          description:
            "Professional interior and exterior window cleaning for homes in Eastern Suburbs Melbourne",
          path: "/window-cleaning",
        })}
      />
      <JsonLd data={faqSchema(WINDOW_FAQS)} />

      <header className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Window cleaning near me · Eastern Suburbs
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold sm:text-5xl">
            Professional Window Cleaning Eastern Suburbs Melbourne
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Looking for reliable window cleaning in Melbourne&apos;s Eastern
            Suburbs? Dynamic Cleaning Vic delivers sparkling, streak-free
            results for homes in Box Hill, Blackburn, Doncaster, Templestowe,
            Ringwood and surrounding areas. Our professional window cleaning
            service removes dirt, grime, and water spots from interior and
            exterior glass, frames, and sills. Whether it&apos;s a single-storey
            home or two-storey property, we use safe techniques and quality
            equipment to restore clarity and boost your home&apos;s appearance.
            Book your free quote today.
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
              Book online
            </Link>
          </div>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Why choose professional window cleaning in the Eastern Suburbs?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Melbourne&apos;s east is beautiful and hard on glass. Plane trees
              in Surrey Hills, building dust around Box Hill, and pollen through
              Blackburn leave a film that DIY sprays rarely shift. Professional
              window cleaning Eastern Suburbs Melbourne is not a luxury — it is
              how you keep rooms bright, frames from pitting, and kerb appeal
              intact if you ever sell or rent.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Homeowners searching for window cleaning Blackburn or professional
              window cleaning Doncaster often tell us the same story: they tried
              a weekend on a ladder, streaked the glass, and still could not
              reach the upstairs panes safely. Our local Eastern Suburbs window
              cleaners bring the right poles, pure-water options and squeegee
              technique so the job is finished in a morning, not a whole
              Saturday.
            </p>
            <h3 className="mt-8 text-lg font-semibold text-navy">
              Benefits of regular window cleaning
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Improves natural light and energy efficiency",
                "Prevents long-term damage from dirt and pollutants",
                "Enhances curb appeal for higher property value",
                "Safe alternative to DIY on ladders",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/interior-exterior-windows.jpg"
            alt="Interior and exterior window cleaning on modern home Camberwell"
            width={1376}
            height={768}
            className="h-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Our professional window cleaning process
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Every visit follows the same careful sequence: inspection, soft
            washing or a pure water system for an eco-friendly clean, a squeegee
            finish, then frame detailing. The process suits residential homes
            and light commercial glass across the Eastern Suburbs. We protect
            gardens, furniture and flooring, and we finish interior and exterior
            glass so the whole opening matches.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WINDOW_PROCESS.map((step, index) => (
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
            Service areas we cover
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Box Hill, Blackburn, Doncaster, Templestowe, Ringwood, Croydon, Glen
            Waverley, Mount Waverley, Mitcham, Vermont, Surrey Hills, Balwyn,
            Camberwell and all Eastern Suburbs Melbourne. We also serve broader
            Victoria on request. If you typed window cleaning near me Eastern
            Suburbs into your phone this morning, we are already in your area
            most weekdays.
          </p>
          <SuburbGrid service="window" />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              Pricing guide (competitive &amp; transparent)
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Free on-site quotes for single-storey and two-storey homes.
              Add-ons for screens, sills, or hard water spots are priced before
              we start. No hidden fees. Quotes vary with access, pane count and
              how long it has been since the last professional clean — we would
              rather tell you that on the phone than surprise you on the day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Combining window cleaning with{" "}
              <Link href="/gutter-cleaning" className="font-semibold text-primary hover:underline">
                gutter cleaning
              </Link>{" "}
              on the same booking is the most popular option for Eastern Suburbs
              families. One visit, two jobs, one invoice. Ask when you call{" "}
              {SITE.phone}.
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
              Single-storey and two-storey homes quoted on inspection
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Clear price before we start</li>
              <li>Screens, tracks and hard-water treatment quoted extra</li>
              <li>Interior + exterior available as a full service</li>
            </ul>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white"
            >
              Get instant free quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Before &amp; after results
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            See the transformation with our high-quality before and after photos
            of Eastern Suburbs homes.
          </p>
          <div className="mt-8">
            <BeforeAfter
              beforeSrc="/images/window-before.jpg"
              afterSrc="/images/window-after.jpg"
              beforeAlt="Dirty windows before professional window cleaning Blackburn Eastern Suburbs"
              afterAlt="Sparkling clean windows after professional service in Doncaster Melbourne"
              caption="Interior and exterior glass, frames and sills — Eastern Suburbs Melbourne."
            />
          </div>
          <Image
            src="/images/team-blackburn-two-storey.jpg"
            alt="Professional window cleaning team working on two-storey home in Blackburn Eastern Suburbs Melbourne"
            width={1376}
            height={768}
            className="mt-8 rounded-2xl object-cover"
          />
        </div>
      </section>

      <Testimonials heading="What our customers say" />
      <FAQ heading="Frequently asked questions" items={WINDOW_FAQS} />
      <CTASection
        title="Ready for crystal clear windows?"
        body="Call Dynamic Cleaning Vic now for a FREE QUOTE on 0433 230 310 or book online. Serving Eastern Suburbs Melbourne today!"
      />
    </>
  );
}
