import type { MetadataRoute } from "next";
import { SITE, SUBURBS, suburbSlug } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/window-cleaning", "/gutter-cleaning", "/about", "/contact", "/areas"];

  const suburbRoutes = SUBURBS.flatMap((suburb) => {
    const slug = suburbSlug(suburb);
    return [
      `/areas/${slug}`,
      `/window-cleaning/${slug}`,
      `/gutter-cleaning/${slug}`,
    ];
  });

  return [...staticRoutes, ...suburbRoutes].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
