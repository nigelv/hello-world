import Link from "next/link";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTASection({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            <Phone className="h-4 w-4" />
            Call now for your FREE quote
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Book online
          </Link>
        </div>
      </div>
    </section>
  );
}
