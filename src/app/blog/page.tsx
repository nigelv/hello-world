import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cleaning Tips Blog | Eastern Suburbs Home Care",
  description:
    "Cleaning tips for Eastern Suburbs Melbourne — window cleaning, gutter maintenance and pressure cleaning advice from Dynamic Cleaning VIC.",
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
            Cleaning tips for eastern suburbs homes
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Practical guides on window cleaning, gutter maintenance and pressure
            cleaning across Eastern Suburbs Melbourne.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-10 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    width={1200}
                    height={630}
                    className="aspect-[16/9] h-auto w-full rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-teal">
                    {new Date(post.date).toLocaleDateString("en-AU", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold text-brand-navy transition group-hover:text-brand-teal">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-sm font-semibold text-brand-teal">
                    Read tip →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner title="Need a clean, not just tips?" />
    </>
  );
}
