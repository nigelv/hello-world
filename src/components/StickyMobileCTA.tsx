import { SITE } from "@/lib/constants";
import { PhoneIcon } from "./Icons";

/** Persistent mobile conversion bar — Call + Free quote */
export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-navy/10 bg-white/95 p-2 shadow-[0_-6px_24px_rgba(10,61,92,0.12)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={SITE.phoneHref}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-brand-teal px-3 py-3 text-sm font-semibold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Call {SITE.phone}
        </a>
        <a
          href="/contact#quote"
          className="inline-flex flex-1 items-center justify-center rounded-md border border-brand-teal/30 bg-brand-mist px-3 py-3 text-sm font-semibold text-brand-navy"
        >
          Free quote
        </a>
      </div>
    </div>
  );
}
