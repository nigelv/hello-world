import Link from "next/link";
import { SITE } from "@/lib/constants";

type BrandMarkProps = {
  tone?: "light" | "dark";
  compact?: boolean;
  onNavigate?: () => void;
};

export function BrandMark({
  tone = "dark",
  compact = false,
  onNavigate,
}: BrandMarkProps) {
  const nameColor = tone === "light" ? "text-white" : "text-brand-navy";
  const accent = tone === "light" ? "text-brand-mint" : "text-brand-teal";
  const lineColor = tone === "light" ? "text-white/70" : "text-brand-blue/80";

  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group flex min-w-0 items-center gap-2.5"
      aria-label={`${SITE.name} home`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-md bg-brand-teal font-display font-bold text-white ${
          compact ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm sm:h-10 sm:w-10"
        }`}
        aria-hidden="true"
      >
        DC
      </span>
      <span className="min-w-0 flex flex-col leading-tight">
        <span
          className={`font-display font-semibold tracking-tight ${nameColor} ${
            compact ? "text-base" : "text-lg sm:text-xl"
          }`}
        >
          Dynamic Cleaning <span className={accent}>VIC</span>
        </span>
        <span
          className={`truncate font-medium ${lineColor} ${
            compact
              ? "text-[0.65rem] tracking-wide"
              : "text-[0.7rem] uppercase tracking-[0.12em]"
          }`}
        >
          {SITE.brandLine}
        </span>
      </span>
    </Link>
  );
}
