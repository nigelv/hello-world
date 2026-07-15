import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { LocalPresence } from "@/components/LocalPresence";
import { PhoneIcon } from "@/components/Icons";
import { SITE, SUBURBS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Free Window & Gutter Cleaning Quote",
  description:
    "Call, email or message Dynamic Cleaning VIC for a free quote. Phone 0433 230 310 · Eastern Suburbs Melbourne, VIC.",
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-mint">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Get in touch and book a free quote
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Call, email or send a message — local window, gutter and pressure
            cleaning across Eastern Suburbs Melbourne.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-brand-navy">
              Phone, email &amp; address
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-slate">
              The fastest way to get a free quote is a quick phone call.
            </p>
            <a
              href={SITE.phoneHref}
              className="mt-6 inline-flex items-center gap-3 rounded-md bg-brand-teal px-5 py-3.5 text-lg font-semibold text-white transition hover:bg-brand-teal-dark"
            >
              <PhoneIcon className="h-5 w-5" />
              {SITE.phone}
            </a>

            <address className="mt-10 space-y-4 not-italic text-sm text-brand-slate sm:text-base">
              <p>
                <span className="font-semibold text-brand-navy">Business:</span>{" "}
                {SITE.legalName}
              </p>
              <p>
                <span className="font-semibold text-brand-navy">Address:</span>{" "}
                {SITE.address.display}
              </p>
              <p>
                <span className="font-semibold text-brand-navy">Email:</span>{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-brand-teal hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-navy">Phone:</span>{" "}
                <a href={SITE.phoneHref} className="text-brand-teal hover:underline">
                  {SITE.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-navy">Service area:</span>{" "}
                {SITE.area} — including {SUBURBS.slice(0, 8).join(", ")} and more.
              </p>
              <p>
                <span className="font-semibold text-brand-navy">Guarantee:</span>{" "}
                {SITE.guarantee}
              </p>
            </address>
          </div>

          <div className="bg-brand-mist p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-brand-navy">
              Request a free quote
            </h2>
            <p className="mt-2 text-sm text-brand-slate">
              Tell us your suburb and the service you need — we&apos;ll follow up promptly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <LocalPresence />
    </>
  );
}
