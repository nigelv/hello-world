import Link from "next/link";
import { Phone } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { NAV, SITE, SUBURBS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2">
            <BrandMark className="h-9 w-9" />
            <span className="font-display text-lg font-semibold">{SITE.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Professional window and gutter cleaning for homes across Melbourne&apos;s
            Eastern Suburbs and Victoria.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </a>
          <p className="mt-2 text-sm text-white/70">{SITE.email}</p>
          <p className="mt-1 text-sm text-white/70">{SITE.hours}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/85">
            <li>
              <Link href="/window-cleaning" className="hover:text-white">
                Window cleaning Eastern Suburbs Melbourne
              </Link>
            </li>
            <li>
              <Link href="/gutter-cleaning" className="hover:text-white">
                Gutter cleaning Eastern Suburbs Melbourne
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Free quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/60">
            Eastern Suburbs
          </h2>
          <ul className="mt-4 columns-2 gap-x-6 space-y-2 text-sm text-white/85">
            {SUBURBS.map((suburb) => (
              <li key={suburb} className="break-inside-avoid">
                <Link
                  href={`/areas/${suburb.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-white"
                >
                  {suburb}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Local window &amp; gutter
            cleaning, Victoria.
          </p>
          <p>ABN on request · Fully insured residential service</p>
        </div>
      </div>
    </footer>
  );
}
