import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import {
  ArrowRightIcon,
  GutterIcon,
  PressureIcon,
  SolarIcon,
  WindowIcon,
} from "@/components/Icons";
import { SERVICES, SITE } from "@/lib/constants";
import type { ServiceSlug } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Window, Gutter, Pressure & Solar Cleaning Services Eastern Suburbs",
  description:
    "Explore Dynamic Cleaning VIC services: window, gutter, pressure and solar panel cleaning across Melbourne’s eastern suburbs.",
  alternates: { canonical: `${SITE.url}/services` },
};

const ICONS: Record<ServiceSlug, typeof WindowIcon> = {
  "window-cleaning": WindowIcon,
  "gutter-cleaning": GutterIcon,
  "pressure-cleaning": PressureIcon,
  "solar-panel-cleaning": SolarIcon,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-mint">
            Our services
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Window, gutter, pressure &amp; solar cleaning for eastern suburbs homes
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Four focused services, one reliable local team. Choose what you need
            — or combine them for a complete property refresh.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.slug];
            return (
              <article
                key={service.slug}
                className="grid gap-6 border-b border-brand-navy/10 pb-14 last:border-0 last:pb-0 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-brand-mist text-brand-teal">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="max-w-2xl">
                  <h2 className="font-display text-2xl font-semibold text-brand-navy">
                    <Link href={service.href} className="hover:text-brand-teal">
                      {service.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-brand-slate">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-sm text-brand-navy">
                    {service.benefits.slice(0, 3).map((b) => (
                      <li key={b}>· {b}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 self-start text-sm font-semibold text-brand-teal"
                >
                  View {service.shortTitle.toLowerCase()} service
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
