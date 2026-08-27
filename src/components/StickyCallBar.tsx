import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 shadow-[0_-8px_30px_rgba(11,58,74,0.12)] md:hidden">
      <a
        href={SITE.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-cta py-3 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4" />
        Free Quote {SITE.phone}
      </a>
    </div>
  );
}
