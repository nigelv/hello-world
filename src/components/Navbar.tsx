"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { NAV_LINKS, SERVICES, SITE } from "@/lib/constants";
import { BrandMark } from "./BrandMark";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesMenuId = useId();
  const servicesRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function closeMenu() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-brand-navy/10 bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
        <BrandMark onNavigate={closeMenu} />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            if ("hasDropdown" in link && link.hasDropdown) {
              const active = pathname.startsWith("/services");
              return (
                <div key={link.href} className="relative" ref={servicesRef}>
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-brand-mist text-brand-navy"
                        : "text-brand-slate hover:bg-brand-mist/70 hover:text-brand-navy"
                    }`}
                    aria-expanded={servicesOpen}
                    aria-controls={servicesMenuId}
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    Services
                    <span aria-hidden="true" className="text-[0.65rem]">
                      ▾
                    </span>
                  </button>
                  {servicesOpen ? (
                    <div
                      id={servicesMenuId}
                      className="absolute left-0 top-full z-50 mt-1 min-w-[220px] animate-fade-in rounded-md border border-brand-navy/10 bg-white py-2 shadow-lg"
                    >
                      <Link
                        href="/services"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-sm font-semibold text-brand-navy hover:bg-brand-mist"
                      >
                        All services
                      </Link>
                      {SERVICES.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-sm text-brand-slate hover:bg-brand-mist hover:text-brand-navy"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

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
            href="/contact#quote"
            className="ml-1 rounded-md px-3 py-2 text-sm font-semibold text-brand-teal hover:bg-brand-mist"
          >
            Free quote
          </a>
          <a
            href={SITE.phoneHref}
            className="ml-1 inline-flex items-center gap-2 rounded-md bg-brand-teal px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          >
            <PhoneIcon className="h-4 w-4" />
            {SITE.phone}
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center rounded-md bg-brand-teal p-2.5 text-white"
            aria-label={`Call ${SITE.phone}`}
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-brand-navy/10 bg-white md:hidden ${
          open ? "block animate-fade-in" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 pb-24"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block rounded-md px-3 py-3 text-base font-medium text-brand-navy hover:bg-brand-mist"
              >
                {link.label}
              </Link>
              {"hasDropdown" in link && link.hasDropdown ? (
                <div className="mb-2 ml-3 border-l border-brand-navy/10 pl-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2 text-sm text-brand-slate hover:bg-brand-mist hover:text-brand-navy"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a
            href="/contact#quote"
            onClick={closeMenu}
            className="mt-2 inline-flex items-center justify-center rounded-md border border-brand-teal/30 bg-brand-mist px-4 py-3 text-base font-semibold text-brand-navy"
          >
            Free quote
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-teal px-4 py-3 text-base font-semibold text-white"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
