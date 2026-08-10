import Image from "next/image";

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  caption,
}: BeforeAfterProps) {
  return (
    <figure className="w-full">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            width={1200}
            height={900}
            className="aspect-[4/3] h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <span className="absolute left-3 top-3 bg-brand-navy/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {beforeLabel}
          </span>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <Image
            src={afterSrc}
            alt={afterAlt}
            width={1200}
            height={900}
            className="aspect-[4/3] h-auto w-full object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <span className="absolute left-3 top-3 bg-brand-teal/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {afterLabel}
          </span>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-brand-slate">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
