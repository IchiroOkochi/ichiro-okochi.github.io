import { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://ichiro-okochi.github.io/ichiro-okochi.github.io";
  const slugs = await getProjectSlugs();
  const staticRoutes = ["", "/projects", "/experience", "/about", "/resume", "/contact", "/uses"];

  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}` })),
    ...slugs.map((slug) => ({ url: `${base}/projects/${slug}` }))
  ];
}
