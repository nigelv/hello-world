import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "./Icons";

type CTABannerProps = {
  title?: string;
  subtitle?: string;
};

export function CTABanner({
  title = "Ready for a free quote?",
  subtitle = "Call now or send your suburb and service — local, insured, guaranteed.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-12 sm:py-14">
      <div
        className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rounded-full bg-brand-teal/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-brand-mint/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-white/75 sm:text-base">{subtitle}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-mint px-6 py-3.5 text-base font-semibold text-brand-navy transition hover:bg-white"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {SITE.phone}
          </a>
          <Link
            href="/contact#quote"
            className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Free quote
          </Link>
        </div>
      </div>
    </section>
  );
}
