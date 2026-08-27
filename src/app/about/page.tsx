import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dynamic Cleaning Vic | Eastern Suburbs Window & Gutter Cleaners",
  description:
    "Meet Dynamic Cleaning Vic — local window and gutter cleaners serving Box Hill, Blackburn, Doncaster, Ringwood and Melbourne's Eastern Suburbs. Fully insured, free quotes.",
  alternates: { canonical: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <header className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">
            Local Eastern Suburbs window cleaners — and gutter specialists
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            Dynamic Cleaning Vic is a residential cleaning team based around
            Melbourne&apos;s east. We built the business for homeowners who want
            a reliable local number, a clear price, and a finish they can see
            from the street.
          </p>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Image
            src="/images/team-blackburn-two-storey.jpg"
            alt="Professional window cleaning team working on two-storey home in Blackburn Eastern Suburbs Melbourne"
            width={1376}
            height={768}
            className="rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy">
              How we work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Most of our week is spent on the same loop of suburbs: Box Hill,
              Blackburn, Doncaster, Templestowe, Ringwood, Croydon, Glen
              Waverley, Mount Waverley, Mitcham, Vermont, Surrey Hills, Balwyn
              and Camberwell. That familiarity matters. We know which streets
              fill gutters first after autumn, and which two-storey brick homes
              need extra time on upstairs sills.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We are fully insured. We do not rest ladders on fragile tiles. We
              quote before we start. If something is not right, we come back.
              Those are the rules that keep Eastern Suburbs families booking us
              every year rather than hunting for window cleaning near me again.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Looking for{" "}
              <Link href="/window-cleaning" className="font-semibold text-primary hover:underline">
                window cleaning
              </Link>{" "}
              or{" "}
              <Link href="/gutter-cleaning" className="font-semibold text-primary hover:underline">
                gutter cleaning
              </Link>
              ? Start with a free quote —{" "}
              <a href={SITE.phoneHref} className="font-semibold text-primary">
                {SITE.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Book your professional clean today — no obligation quote"
        body={`Call now for your FREE quote: ${SITE.phone}`}
      />
    </>
  );
}
