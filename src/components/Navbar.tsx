"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-brand-navy/10 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 flex-col leading-tight"
          onClick={closeMenu}
        >
          <span className="font-display text-lg font-semibold tracking-tight text-brand-navy sm:text-xl">
            Dynamic Cleaning{" "}
            <span className="text-brand-teal">VIC</span>
          </span>
          <span className="truncate text-[0.7rem] font-medium uppercase tracking-[0.14em] text-brand-blue/80">
            Eastern Suburbs Melbourne
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-mist text-brand-navy"
                    : "text-brand-slate hover:bg-brand-mist/70 hover:text-brand-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SITE.phoneHref}
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-brand-teal px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-brand-navy/10 bg-white md:hidden ${
          open ? "block animate-fade-in" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-base font-medium text-brand-navy hover:bg-brand-mist"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-4 py-3 text-base font-semibold text-white"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
