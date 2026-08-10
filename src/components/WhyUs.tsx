import { WHY_US } from "@/lib/constants";
import { CheckIcon, LeafIcon, MapPinIcon, ShieldIcon } from "./Icons";

const ICONS = [ShieldIcon, MapPinIcon, CheckIcon, LeafIcon];

export function WhyUs() {
  return (
    <section
      className="relative overflow-hidden bg-brand-mist py-16 sm:py-20"
      aria-labelledby="why-us-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="why-us-heading"
            className="font-display text-3xl font-semibold tracking-tight text-brand-navy sm:text-4xl"
          >
            Why choose Dynamic Cleaning VIC
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
            We specialise in helping you maintain the integrity of your home —
            with local knowledge, clear communication and a real guarantee.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {WHY_US.map((item, index) => {
            const Icon = ICONS[index] ?? CheckIcon;
            return (
              <li key={item.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-brand-teal shadow-sm ring-1 ring-brand-navy/5">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-slate sm:text-base">
                    {item.detail}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
