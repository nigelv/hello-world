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
import { SITE, SOLAR_FAQS, SOLAR_PROCESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solar Panel Cleaning Eastern Suburbs Melbourne | Restore Power Output",
  description:
    "Solar panel cleaning Eastern Suburbs Melbourne. Remove dust and grime, restore efficiency with water-fed pole access. Free quotes — call Dynamic Cleaning Vic 0433 230 310.",
  alternates: { canonical: `${SITE.url}/solar-panel-cleaning` },
};

export default function SolarPanelCleaningPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solar Panel Cleaning", path: "/solar-panel-cleaning" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Solar Panel Cleaning",
          description:
            "Professional solar panel cleaning to remove dust and grime and restore power output in Eastern Suburbs Melbourne",
          path: "/solar-panel-cleaning",
        })}
      />
      <JsonLd data={faqSchema(SOLAR_FAQS)} />

      <header className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70">
            Solar panel cleaning near me · Eastern Suburbs
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold sm:text-5xl">
            Solar Panel Cleaning Eastern Suburbs Melbourne
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Now that the sun is hitting harder again, it is time to clean off
            persistent red dust and fire up your solar panels. Dynamic Cleaning
            Vic provides professional solar panel cleaning across Box Hill,
            Doncaster, Glen Waverley, Mount Waverley and Melbourne&apos;s
            Eastern Suburbs — so your system keeps working as the investment you
            made, not a liability slowly losing output to grime you cannot see
            from the ground.
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
              Why clean solar panels in Melbourne?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Solar panels can lose around 20% of their efficiency if they are
              covered in dirt. In Melbourne, dust has become part of the rain for
              many households — and dirt has a tendency to attract more dirt,
              which is why you get build-ups on roof arrays over time.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Often people do not think twice about their solar panels once they
              are installed, until something goes wrong or the power bill creeps
              up. Having them cleaned annually — or more often if required —
              ensures the investment you made remains an investment. At Dynamic
              Cleaning Vic we use water-fed poles to access even those
              tricky-to-reach panels safely.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                "Help panels work more effectively after dust and grime build-up",
                "Water-fed poles reach hard-to-reach roof arrays",
                "Annual cleans keep your solar investment performing",
                "Ideal before summer sun across the Eastern Suburbs",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/solar-hero.jpg"
            alt="Professional solar panel cleaning on residential roof Eastern Suburbs Melbourne"
            width={1376}
            height={768}
            className="h-full rounded-2xl object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Our solar panel cleaning process
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            We assess safe access and your panel layout before we begin. Using
            water-fed poles, we wash away built-up dust and grime without harsh
            abrasion that can damage coatings — so panels sparkle and do what
            they do best: create power.
          </p>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLAR_PROCESS.map((step, index) => (
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
            Eastern Suburbs areas we serve
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Eastern Suburbs homes with north-facing arrays in Vermont, Mount
            Waverley, Glen Waverley and surrounding suburbs see strong seasonal
            sun — but only if the glass surface is clear. Pollen, urban dust and
            general grime mute output quietly. Many clients combine solar panel
            cleaning with{" "}
            <Link href="/window-cleaning" className="font-semibold text-primary hover:underline">
              window cleaning
            </Link>{" "}
            or{" "}
            <Link href="/gutter-cleaning" className="font-semibold text-primary hover:underline">
              gutter cleaning
            </Link>{" "}
            on the same visit.
          </p>
          <SuburbGrid />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-navy">
            Before &amp; after solar panel cleaning
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            See the difference when persistent dust and grime are washed from
            your panels.
          </p>
          <div className="mt-8">
            <BeforeAfter
              beforeSrc="/images/solar-before.jpg"
              afterSrc="/images/solar-after.jpg"
              beforeAlt="Solar panels covered in lichen and moss before professional cleaning on grey tiled roof"
              afterAlt="Clean reflective solar panels after professional cleaning with moss still on surrounding roof tiles"
              caption="Roof-mounted arrays — lichen and grime lifted, glass clear, ready for peak sun."
            />
          </div>
        </div>
      </section>

      <Testimonials heading="What our customers say" />
      <FAQ heading="FAQs about solar panel cleaning" items={SOLAR_FAQS} />
      <CTASection
        title="Ready to get your panels working at their best?"
        body="Call Dynamic Cleaning Vic for a FREE solar panel cleaning quote on 0433 230 310. Serving Eastern Suburbs Melbourne today."
      />
    </>
  );
}
