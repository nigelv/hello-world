type BeforeAfterProps = {
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
};

export function BeforeAfter({
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt,
  afterAlt,
  caption,
}: BeforeAfterProps) {
  return (
    <figure className="w-full">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="relative overflow-hidden rounded-md">
          <div
            className="aspect-[4/3] bg-before-placeholder"
            role="img"
            aria-label={beforeAlt}
          />
          <span className="absolute left-3 top-3 bg-brand-navy/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            {beforeLabel}
          </span>
        </div>
        <div className="relative overflow-hidden rounded-md">
          <div
            className="aspect-[4/3] bg-after-placeholder"
            role="img"
            aria-label={afterAlt}
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
