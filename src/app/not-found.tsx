import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-4 py-24 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-brand-navy sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-brand-slate">
        That page doesn&apos;t exist. Head home or call us for a free quote.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="rounded-md bg-brand-teal px-5 py-3 text-sm font-semibold text-white hover:bg-brand-teal-dark"
        >
          Back to home
        </Link>
        <a
          href={SITE.phoneHref}
          className="rounded-md border border-brand-navy/15 px-5 py-3 text-sm font-semibold text-brand-navy hover:bg-brand-mist"
        >
          Call {SITE.phone}
        </a>
      </div>
    </section>
  );
}
