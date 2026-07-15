import Link from "next/link";
import { NAV_LINKS, SERVICES, SITE, SUBURBS } from "@/lib/constants";
import { PhoneIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-brand-navy/10 bg-brand-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <p className="font-display text-xl font-semibold">
            Dynamic Cleaning <span className="text-brand-mint">VIC</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            {SITE.tagline}. Window, gutter and pressure cleaning across{" "}
            {SITE.area}.
          </p>
          <address className="mt-4 not-italic text-sm text-white/70">
            {SITE.address.display}
            <br />
            <a
              href={`mailto:${SITE.email}`}
              className="text-brand-mint hover:text-white"
            >
              {SITE.email}
            </a>
          </address>
          <a
            href={SITE.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-mint transition hover:text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-mint">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-mint">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-mint">
            Service area
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            {SUBURBS.slice(0, 8).join(", ")} and surrounding eastern suburbs.
          </p>
          <a
            href={SITE.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-brand-mint hover:text-white"
          >
            Google Business Profile
          </a>
          <p className="mt-4 text-sm text-white/70">
            Satisfaction guarantee: {SITE.guarantee}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>Local · Reliable · Fully insured</p>
        </div>
      </div>
    </footer>
  );
}
