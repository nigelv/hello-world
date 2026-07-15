import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(92vh,780px)] overflow-hidden">
      <Image
        src="/images/hero-window-cleaning.svg"
        alt="window cleaning Eastern Suburbs Melbourne"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-navy/90 via-brand-blue/75 to-brand-teal/60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-mint/20 blur-3xl animate-float"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[min(92vh,780px)] max-w-6xl flex-col justify-center px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <p className="animate-rise font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Dynamic Cleaning{" "}
          <span className="text-brand-mint">VIC</span>
        </p>
        <h1 className="mt-5 max-w-2xl animate-rise text-xl font-medium leading-snug text-white/95 sm:text-2xl md:text-[1.7rem] [animation-delay:80ms]">
          Window, gutter &amp; pressure cleaning for Eastern Suburbs Melbourne
        </h1>
        <p className="mt-4 max-w-xl animate-rise text-base leading-relaxed text-white/80 sm:text-lg [animation-delay:140ms]">
          Friendly, local and fully insured. Crystal-clear windows, protected
          gutters and restored exteriors — with a satisfaction guarantee.
        </p>
        <div className="mt-8 flex animate-rise flex-col gap-3 sm:flex-row sm:items-center [animation-delay:200ms]">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-mint px-6 py-3.5 text-base font-semibold text-brand-navy shadow-lg shadow-brand-navy/20 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {SITE.phone} for free quote
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
