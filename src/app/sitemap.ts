import type { MetadataRoute } from "next";
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

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.startsWith("/services") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.9 : 0.7,
  }));
}
