type FAQItem = { q: string; a: string };

export function FAQ({
  items,
  heading = "Frequently asked questions",
}: {
  items: readonly FAQItem[];
  heading?: string;
}) {
  return (
    <section aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-8 divide-y divide-brand-navy/10 border-y border-brand-navy/10">
        {items.map((item) => (
          <details key={item.q} className="group py-4">
            <summary className="cursor-pointer list-none font-display text-base font-semibold text-brand-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span>{item.q}</span>
                <span
                  className="mt-0.5 shrink-0 text-brand-teal transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-brand-slate sm:text-base">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
