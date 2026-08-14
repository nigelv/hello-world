import type { Metadata } from "next";
import { SuburbGrid } from "@/components/SuburbGrid";
import { SITE, SUBURBS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Window & Gutter Cleaning Eastern Suburbs Melbourne",
  description:
    "Dynamic Cleaning Vic serves Box Hill, Blackburn, Doncaster, Ringwood, Croydon, Glen Waverley and all Eastern Suburbs Melbourne. Local window and gutter cleaning. Call 0433 230 310.",
  alternates: { canonical: `${SITE.url}/areas` },
};

export default function AreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <h1 className="font-display text-4xl font-semibold text-navy sm:text-5xl">
        Window and gutter cleaning across the Eastern Suburbs
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
        We cover {SUBURBS.join(", ")} and surrounding Eastern Suburbs Melbourne,
        with mobile service across Victoria on request. Choose your suburb for
        local window and gutter cleaning details, or call {SITE.phone} for a
        free quote today.
      </p>
      <SuburbGrid />
    </div>
  );
}
