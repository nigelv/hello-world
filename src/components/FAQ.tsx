export function FAQ({
  heading,
  items,
}: {
  heading: string;
  items: readonly { q: string; a: string }[];
}) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-display text-3xl font-semibold text-navy sm:text-4xl"
        >
          {heading}
        </h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-navy [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="text-primary group-open:hidden">+</span>
                  <span className="hidden text-primary group-open:inline">–</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
