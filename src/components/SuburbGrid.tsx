import Link from "next/link";
import { SUBURBS, suburbSlug } from "@/lib/site";

export function SuburbGrid({
  service = "both",
}: {
  service?: "window" | "gutter" | "both";
}) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {SUBURBS.map((suburb) => {
        const href =
          service === "window"
            ? `/window-cleaning/${suburbSlug(suburb)}`
            : service === "gutter"
              ? `/gutter-cleaning/${suburbSlug(suburb)}`
              : `/areas/${suburbSlug(suburb)}`;
        return (
          <li key={suburb}>
            <Link
              href={href}
              className="block rounded-xl border border-border bg-white px-4 py-3 text-sm font-medium text-navy transition hover:border-primary/40 hover:bg-accent"
            >
              {suburb}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
