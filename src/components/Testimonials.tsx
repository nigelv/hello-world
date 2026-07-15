import { TESTIMONIALS } from "@/lib/constants";
import { StarIcon } from "./Icons";

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
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
                <span className="font-normal text-brand-slate"> · {item.area}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
