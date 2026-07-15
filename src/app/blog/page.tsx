import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { BLOG_POSTS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning Tips Blog | Eastern Suburbs Home Care",
  description:
    "Practical guides on window cleaning, gutter maintenance and pressure cleaning for Melbourne’s eastern suburbs homeowners.",
  alternates: { canonical: `${SITE.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-navy">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-mint">
            Blog
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tips for eastern suburbs homes
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Short, practical articles on keeping windows clear, gutters flowing
            and exteriors looking fresh. More posts coming soon.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="divide-y divide-brand-navy/10 border-y border-brand-navy/10">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug} className="py-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold text-brand-navy sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-2 max-w-3xl text-base leading-relaxed text-brand-slate">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-sm font-medium text-brand-slate/70">
                  Full article coming soon —{" "}
                  <Link href="/contact" className="text-brand-teal hover:underline">
                    ask us a question
                  </Link>{" "}
                  in the meantime.
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner title="Need a clean, not just tips?" />
    </>
  );
}
