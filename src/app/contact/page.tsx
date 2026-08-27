import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Quote | Window & Gutter Cleaning Eastern Suburbs Melbourne",
  description:
    "Get instant free quote for window or gutter cleaning in your suburb. Dynamic Cleaning Vic — Box Hill, Blackburn, Doncaster, Ringwood and Eastern Suburbs Melbourne. Call 0433 230 310.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          No obligation
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold text-navy sm:text-5xl">
          Book your professional clean today
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Get instant free quote for window or gutter cleaning in your suburb.
          Tell us the street, storeys and whether you need glass, gutters or
          both. Prefer to talk? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-primary">
            {SITE.phone}
          </a>
          .
        </p>
        <ul className="mt-8 space-y-3 text-sm text-navy">
          <li>
            <strong>Phone:</strong> {SITE.phone}
          </li>
          <li>
            <strong>Email:</strong> {SITE.email}
          </li>
          <li>
            <strong>Hours:</strong> {SITE.hours}
          </li>
          <li>
            <strong>Service area:</strong> Eastern Suburbs Melbourne &amp; Victoria
          </li>
        </ul>
      </div>
      <div id="quote" className="rounded-2xl border border-border bg-white p-6 sm:p-8">
        <QuoteForm />
      </div>
    </div>
  );
}
