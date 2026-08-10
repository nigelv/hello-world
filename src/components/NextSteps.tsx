import { NEXT_STEPS } from "@/lib/constants";

export function NextSteps() {
  return (
    <section
      className="bg-white py-14 sm:py-16"
      aria-labelledby="next-steps-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="next-steps-heading"
            className="font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
          >
            What happens next
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
            From first call to a finished clean — simple, clear and local.
          </p>
        </div>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {NEXT_STEPS.map((item) => (
            <li key={item.step}>
              <p className="font-display text-3xl font-semibold text-brand-teal/35">
                {item.step}
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate sm:text-base">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
