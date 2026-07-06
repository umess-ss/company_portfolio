import type { MetadataRoute } from "next";
import { site } from "@/data/site";

const ROUTES = [
  "",
  "/services",
  "/technologies",
  "/work",
  "/how-we-work",
  "/team",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
