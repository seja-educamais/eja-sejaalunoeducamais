import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/termos-de-uso`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
