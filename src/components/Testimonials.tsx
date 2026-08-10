import { SITE, TESTIMONIALS } from "@/lib/constants";
import { StarIcon } from "./Icons";

export function Testimonials() {
  return (
    <section className="bg-white py-14 sm:py-16" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2
              id="testimonials-heading"
              className="font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
            >
              What our clients say
            </h2>
            <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
              Punctual, thorough and trusted in local homes across the eastern suburbs.
            </p>
          </div>
          <a
            href={SITE.googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-brand-teal/25 bg-brand-mist px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-teal hover:text-white"
          >
            Read Google reviews
          </a>
        </div>

        <ul className="mt-10 grid gap-8 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <li key={item.name + item.quote.slice(0, 24)}>
              <div className="flex gap-1 text-brand-teal" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-brand-slate">
                “{item.quote}”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-brand-navy">
                {item.name}
                <span className="font-normal text-brand-slate">
                  {" "}
                  · {item.area} · {item.service}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
