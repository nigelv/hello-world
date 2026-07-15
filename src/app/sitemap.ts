import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/services/window-cleaning",
    "/services/gutter-cleaning",
    "/services/pressure-cleaning",
    "/about",
    "/contact",
    "/blog",
  ];

  const pages = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route.startsWith("/services")
        ? ("weekly" as const)
        : ("monthly" as const),
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.9 : 0.7,
  }));

  const posts = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
