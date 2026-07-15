import { SUBURBS } from "@/lib/constants";
import { MapPinIcon } from "./Icons";

export function SuburbsList({
  heading = "Eastern suburbs we service",
}: {
  heading?: string;
}) {
  return (
    <section aria-labelledby="suburbs-heading">
      <div className="flex items-start gap-3">
        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-mist text-brand-teal">
          <MapPinIcon className="h-5 w-5" />
        </div>
        <div>
          <h2
            id="suburbs-heading"
            className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl"
          >
            {heading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-slate sm:text-base">
            Based locally and covering Melbourne&apos;s eastern suburbs including
            Vermont South, Mount Waverley and surrounds — and many more.
          </p>
        </div>
      </div>
      <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-2">
        {SUBURBS.map((suburb) => (
          <li
            key={suburb}
            className="bg-brand-mist px-3 py-1.5 text-sm font-medium text-brand-navy"
          >
            {suburb}
          </li>
        ))}
      </ul>
    </section>
  );
}
