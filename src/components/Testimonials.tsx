import { TESTIMONIALS } from "@/lib/site";

export function Testimonials({
  heading = "What our customers say",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Eastern Suburbs homes
        </p>
        <h2
          id="reviews-heading"
          className="mt-2 font-display text-3xl font-semibold text-navy sm:text-4xl"
        >
          {heading}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-navy">
                {item.name}
                {item.suburb ? (
                  <span className="font-normal text-muted-foreground"> · {item.suburb}</span>
                ) : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
