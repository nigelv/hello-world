import { SITE } from "@/lib/constants";
import { PhoneIcon } from "./Icons";

type CTABannerProps = {
  title?: string;
  subtitle?: string;
};

export function CTABanner({
  title = "Call now for your free window and gutter cleaning quote",
  subtitle = "Local, reliable and fully insured — with a satisfaction guarantee.",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-14 sm:py-16">
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
        <a
          href={SITE.phoneHref}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-brand-mint px-6 py-3.5 text-base font-semibold text-brand-navy transition hover:bg-white"
        >
          <PhoneIcon className="h-5 w-5" />
          Contact us on {SITE.phone}
        </a>
      </div>
    </section>
  );
}
