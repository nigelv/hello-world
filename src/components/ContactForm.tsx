"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/constants";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mobile = String(data.get("mobile") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(
      `Free quote request from ${name || "website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nSuburb & service required:\n${message}`,
    );

    setStatus("sent");
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
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
          className="mt-1.5 w-full rounded-md border border-brand-navy/15 bg-white px-3.5 py-2.5 text-brand-navy outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
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
          className="mt-1.5 w-full rounded-md border border-brand-navy/15 bg-white px-3.5 py-2.5 text-brand-navy outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
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
          className="mt-1.5 w-full rounded-md border border-brand-navy/15 bg-white px-3.5 py-2.5 text-brand-navy outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-navy">
          Suburb and service required <span className="text-brand-teal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="e.g. Vermont South — window and gutter cleaning"
          className="mt-1.5 w-full resize-y rounded-md border border-brand-navy/15 bg-white px-3.5 py-2.5 text-brand-navy outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-brand-teal px-5 py-3 text-base font-semibold text-white transition hover:bg-brand-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal sm:w-auto"
      >
        Send quote request
      </button>

      {status === "sent" ? (
        <p className="text-sm text-brand-teal" role="status">
          Opening your email app… Prefer a faster reply? Call{" "}
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
          for a free quote today.
        </p>
      )}
    </form>
  );
}
