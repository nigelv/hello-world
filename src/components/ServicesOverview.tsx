import Link from "next/link";
import { SERVICES, SITE } from "@/lib/constants";
import { ArrowRightIcon, GutterIcon, PressureIcon, WindowIcon } from "./Icons";

const ICONS = {
  "window-cleaning": WindowIcon,
  "gutter-cleaning": GutterIcon,
  "pressure-cleaning": PressureIcon,
} as const;

const ONE_LINERS = {
  "window-cleaning": "Brighter rooms, streak-free glass — free quote.",
  "gutter-cleaning": "Clear leaf build-up before the next downpour.",
  "pressure-cleaning": "Restore driveways and exteriors fast.",
} as const;

export function ServicesOverview() {
  return (
    <section className="bg-white py-14 sm:py-16" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="services-heading"
              className="font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
            >
              Three services. One local team.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
              Window, gutter and pressure cleaning for eastern suburbs homes —
              done properly.
            </p>
          </div>
          <a
            href="/contact#quote"
            className="text-sm font-semibold text-brand-teal hover:underline"
          >
            Free quote for any service →
          </a>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.slug];
            return (
              <li key={service.slug} className="group">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-brand-mist text-brand-teal transition group-hover:bg-brand-teal group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-brand-navy">
                  <Link
                    href={service.href}
                    className="transition hover:text-brand-teal"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate sm:text-base">
                  {ONE_LINERS[service.slug]}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-brand-teal transition group-hover:gap-2.5"
                  >
                    Learn more
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <a href={SITE.phoneHref} className="text-brand-navy hover:text-brand-teal">
                    Call for quote
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
