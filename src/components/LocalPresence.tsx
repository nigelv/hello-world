import { CITATIONS, SITE } from "@/lib/constants";
import { MapPinIcon } from "./Icons";

export function LocalPresence() {
  return (
    <section className="bg-brand-mist py-14 sm:py-16" aria-labelledby="local-heading">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-brand-teal shadow-sm">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <div>
              <h2
                id="local-heading"
                className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl"
              >
                Find us locally — Google Business Profile
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-slate">
                Dynamic Cleaning VIC is a local Eastern Suburbs Melbourne
                business. Keep our NAP consistent wherever you find us online:
              </p>
              <address className="mt-4 not-italic text-sm leading-relaxed text-brand-navy sm:text-base">
                <strong>{SITE.legalName}</strong>
                <br />
                {SITE.address.display}
                <br />
                Phone:{" "}
                <a href={SITE.phoneHref} className="font-semibold text-brand-teal">
                  {SITE.phone}
                </a>
                <br />
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-brand-teal"
                >
                  {SITE.email}
                </a>
              </address>
              <a
                href={SITE.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-md bg-brand-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-teal-dark"
              >
                Open Google Business Profile / Maps
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              Local citations &amp; directories
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-slate">
              Consistent name, address and phone across Google and major
              Australian directories helps customers find a trusted local cleaner.
            </p>
            <ul className="mt-4 space-y-3">
              {CITATIONS.map((item) => (
                <li key={item.name} className="text-sm">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-teal hover:underline"
                  >
                    {item.name}
                  </a>
                  <span className="text-brand-slate"> — {item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-brand-navy/5">
          <iframe
            title="Dynamic Cleaning VIC service area — Eastern Suburbs Melbourne map"
            src={SITE.mapsEmbedUrl}
            className="h-[min(420px,70vw)] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <p className="px-4 py-3 text-xs text-brand-slate">
            Service-area business covering Eastern Suburbs Melbourne including
            Vermont South, Mount Waverley, Glen Waverley and surrounds.
          </p>
        </div>
      </div>
    </section>
  );
}
