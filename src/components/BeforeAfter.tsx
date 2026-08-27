import Image from "next/image";

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
}) {
  return (
    <figure>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            width={1024}
            height={768}
            className="h-64 w-full object-cover sm:h-72"
          />
          <p className="bg-navy px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
            Before
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src={afterSrc}
            alt={afterAlt}
            width={1024}
            height={768}
            className="h-64 w-full object-cover sm:h-72"
          />
          <p className="bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white">
            After
          </p>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}
