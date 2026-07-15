import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import type { ServiceArticle } from "@/lib/service-content";
import { CheckIcon, PhoneIcon } from "./Icons";
import { BeforeAfter } from "./BeforeAfter";
import { FAQ } from "./FAQ";
import { SuburbsList } from "./SuburbsList";
import { CTABanner } from "./CTABanner";

type ServiceContent = {
  title: string;
  description: string;
  benefits: readonly string[];
  process: readonly { step: string; title: string; detail: string }[];
  faqs: readonly { q: string; a: string }[];
  imageAlt: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

type ServicePageContentProps = {
  service: ServiceContent;
  article: ServiceArticle;
};

export function ServicePageContent({
  service,
  article,
}: ServicePageContentProps) {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-navy/92 via-brand-blue/80 to-brand-teal/65"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-mint">
            Dynamic Cleaning VIC
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            {service.title} Eastern Suburbs Melbourne
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {service.description}
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand-mint px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-white"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {SITE.phone} for free quote
          </a>
        </div>
      </section>

      <article className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
              {article.h2Intro}
            </h2>
            {article.paragraphs.map((para) => (
              <p
                key={para.slice(0, 48)}
                className="mt-4 text-base leading-relaxed text-brand-slate"
              >
                {para}
              </p>
            ))}
            <ul className="mt-6 space-y-3">
              {service.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-3 text-sm text-brand-navy sm:text-base"
                >
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <BeforeAfter
            beforeSrc={service.beforeImage}
            afterSrc={service.afterImage}
            beforeAlt={service.beforeAlt}
            afterAlt={service.afterAlt}
            caption={`${service.title} before & after — Eastern Suburbs Melbourne.`}
          />
        </div>
      </article>

      <section className="bg-brand-mist py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            {article.h2Keywords}
          </h2>
          {article.keywordParagraphs.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="mt-4 max-w-3xl text-base leading-relaxed text-brand-slate"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            Our {service.title.toLowerCase()} process
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <li key={step.step}>
                <p className="font-display text-3xl font-semibold text-brand-teal/40">
                  {step.step}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand-mist py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-navy sm:text-3xl">
            {article.h2Why}
          </h2>
          {article.whyParagraphs.map((para) => (
            <p
              key={para.slice(0, 48)}
              className="mt-4 max-w-3xl text-base leading-relaxed text-brand-slate"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          <FAQ items={service.faqs} />
          <SuburbsList />
          <p className="text-sm text-brand-slate">
            Prefer to talk it through?{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-teal hover:underline"
            >
              Send a message
            </Link>{" "}
            or call{" "}
            <a
              href={SITE.phoneHref}
              className="font-semibold text-brand-teal hover:underline"
            >
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <CTABanner
        title={`Book ${service.title.toLowerCase()} in the eastern suburbs`}
        subtitle="Free quotes. Local, reliable and fully insured."
      />
    </>
  );
}
