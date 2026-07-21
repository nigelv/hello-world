"use client";

import { useState, type FormEvent } from "react";
import { SERVICES, SITE, SUBURBS } from "@/lib/constants";

const inputClass =
  "mt-1.5 w-full rounded-md border border-brand-navy/15 bg-white px-3.5 py-2.5 text-brand-navy outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mobile = String(data.get("mobile") || "").trim();
    const suburb = String(data.get("suburb") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Free quote request — ${service || "cleaning"} in ${suburb || "eastern suburbs"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSuburb: ${suburb}\nService: ${service}\n\nDetails:\n${message || "(none)"}`,
    );

    setStatus("sent");
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form id="quote-form" onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-navy">
          Your name <span className="text-brand-teal">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-navy">
          Your email <span className="text-brand-teal">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-brand-navy">
          Mobile number <span className="text-brand-slate/70">(preferred)</span>
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          autoComplete="tel"
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="suburb" className="block text-sm font-medium text-brand-navy">
            Suburb <span className="text-brand-teal">*</span>
          </label>
          <select id="suburb" name="suburb" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select suburb
            </option>
            {SUBURBS.map((suburb) => (
              <option key={suburb} value={suburb}>
                {suburb}
              </option>
            ))}
            <option value="Other eastern suburb">Other eastern suburb</option>
          </select>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-brand-navy">
            Service <span className="text-brand-teal">*</span>
          </label>
          <select id="service" name="service" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Windows & gutters">Windows &amp; gutters</option>
            <option value="Multiple services">Multiple services</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-navy">
          Extra details
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Property type, storeys, access notes…"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-brand-teal px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:w-auto"
      >
        Request free quote
      </button>

      {status === "sent" ? (
        <p className="text-sm text-brand-teal" role="status">
          Thanks — opening your email app. We&apos;ll call you back. Prefer faster? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">
            {SITE.phone}
          </a>
          .
        </p>
      ) : (
        <p className="text-sm text-brand-slate">
          Or call{" "}
          <a
            href={SITE.phoneHref}
            className="font-semibold text-brand-teal hover:underline"
          >
            {SITE.phone}
          </a>{" "}
          for a free quote today — we&apos;ll call you back promptly.
        </p>
      )}
    </form>
  );
}
