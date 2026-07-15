import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ArrowRightIcon, GutterIcon, PressureIcon, WindowIcon } from "./Icons";

const ICONS = {
  "window-cleaning": WindowIcon,
  "gutter-cleaning": GutterIcon,
  "pressure-cleaning": PressureIcon,
} as const;

export function ServicesOverview() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="services-heading"
            className="font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
          >
            Cleaning services built for eastern suburbs homes
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
            Specialised window, gutter and pressure cleaning — done properly,
            with care for your biggest asset.
          </p>
        </div>

        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.slug];
            return (
              <li key={service.slug} className="group">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-brand-mist text-brand-teal transition group-hover:bg-brand-teal group-hover:text-white">
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
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal transition group-hover:gap-2.5"
                >
                  Learn more
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
