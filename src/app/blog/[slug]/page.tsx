import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { BLOG_POSTS, getPost } from "@/lib/blog";
import { SITE } from "@/lib/constants";
import { blogPostingSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          excerpt: post.excerpt,
          date: post.date,
          slug: post.slug,
          image: post.image,
        })}
      />
      <article>
        <header className="bg-brand-navy">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
            <p className="text-sm font-semibold text-brand-mint">
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
              <span className="mx-2 opacity-60">/</span>
              Cleaning tips
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-white/70">
              {new Date(post.date).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={630}
            priority
            className="aspect-[16/9] h-auto w-full rounded-md object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
          <p className="mt-6 text-lg leading-relaxed text-brand-slate">
            {post.excerpt}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-display text-2xl font-semibold text-brand-navy">
                {section.heading}
              </h2>
              {section.paragraphs.map((para) => (
                <p
                  key={para.slice(0, 40)}
                  className="mt-4 text-base leading-relaxed text-brand-slate"
                >
                  {para}
                </p>
              ))}
            </section>
          ))}

          <p className="mt-10 text-sm text-brand-slate">
            Need help at your place?{" "}
            <Link href="/contact" className="font-semibold text-brand-teal hover:underline">
              Request a free quote
            </Link>{" "}
            or call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-brand-teal hover:underline">
              {SITE.phone}
            </a>
            .
          </p>
        </div>
      </article>
      <CTABanner />
    </>
  );
}
