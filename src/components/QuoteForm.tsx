"use client";

import { FormEvent, useState } from "react";
import { SITE, SUBURBS } from "@/lib/site";

const SERVICES = [
  "Window cleaning",
  "Gutter cleaning",
  "Windows and gutters",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `We could not send that just now. Please call ${SITE.phone} and we will quote you on the spot.`
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-accent p-6 text-accent-foreground">
        <p className="font-display text-2xl font-semibold text-navy">Quote request received</p>
        <p className="mt-2 text-sm leading-relaxed">
          Thanks — we will be in touch shortly with a free, no-obligation quote.
          Need it faster? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4"
      aria-label="Get instant free quote for window or gutter cleaning in your suburb"
    >
      {!compact ? (
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Get instant free quote
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Window or gutter cleaning in your Eastern Suburbs street — no obligation.
          </p>
        </div>
      ) : null}

      <label className="grid gap-1.5 text-sm font-medium">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="h-11 rounded-md border border-input bg-white px-3 font-normal"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Phone
          <input
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="h-11 rounded-md border border-input bg-white px-3 font-normal"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="h-11 rounded-md border border-input bg-white px-3 font-normal"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Suburb
          <select
            required
            name="suburb"
            defaultValue=""
            className="h-11 rounded-md border border-input bg-white px-3 font-normal"
          >
            <option value="" disabled>
              Select your suburb
            </option>
            {SUBURBS.map((suburb) => (
              <option key={suburb} value={suburb}>
                {suburb}
              </option>
            ))}
            <option value="Other Victoria">Other Victoria</option>
          </select>
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Service
          <select
            required
            name="service"
            defaultValue="Windows and gutters"
            className="h-11 rounded-md border border-input bg-white px-3 font-normal"
          >
            {SERVICES.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-medium">
        Property notes
        <textarea
          name="notes"
          rows={compact ? 3 : 4}
          placeholder="Storeys, screens, hard water spots, trees over the roof…"
          className="rounded-md border border-input bg-white px-3 py-2 font-normal"
        />
      </label>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex h-12 items-center justify-center rounded-full bg-cta px-6 text-sm font-semibold text-white transition hover:brightness-110 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Book your professional clean today"}
      </button>
      <p className="text-xs text-muted-foreground">
        No obligation quote. Or call{" "}
        <a href={SITE.phoneHref} className="font-semibold text-primary">
          {SITE.phone}
        </a>{" "}
        now.
      </p>
    </form>
  );
}
