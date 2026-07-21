import { SITE } from "@/lib/constants";
import { CheckIcon } from "./Icons";

export function TrustStrip({ tone = "light" }: { tone?: "light" | "on-dark" }) {
  const wrap =
    tone === "on-dark"
      ? "border-white/15 bg-white/10 text-white"
      : "border-brand-navy/10 bg-brand-mist text-brand-navy";

  return (
    <ul
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 rounded-md border px-4 py-3 text-sm font-medium ${wrap}`}
      aria-label="Trust points"
    >
      {SITE.trustStrip.map((item) => (
        <li key={item} className="inline-flex items-center gap-1.5">
          <CheckIcon
            className={`h-4 w-4 shrink-0 ${
              tone === "on-dark" ? "text-brand-mint" : "text-brand-teal"
            }`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
