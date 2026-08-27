import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-semibold text-navy">Page not found</h1>
      <p className="mt-4 text-muted-foreground">
        That link does not exist. Head home for window and gutter cleaning across
        Melbourne&apos;s Eastern Suburbs.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
