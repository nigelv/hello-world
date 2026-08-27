export function BrandMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <rect width="48" height="48" rx="12" className="fill-navy" />
      <path
        d="M14 16.5h20v15H14z"
        className="stroke-white"
        strokeWidth="1.8"
        fill="none"
      />
      <path d="M14 24h20M24 16.5v15" className="stroke-white/80" strokeWidth="1.4" />
      <path
        d="M31.5 31.5c2.4 0 4.4-1.7 4.4-3.2 0-2.2-3-5.6-4.4-7.2-1.4 1.6-4.4 5-4.4 7.2 0 1.5 2 3.2 4.4 3.2Z"
        className="fill-white/95"
      />
    </svg>
  );
}
