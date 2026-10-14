import type { MetadataRoute } from "next";
import { rooms } from "@/lib/data";
import { articles } from "@/lib/journal";

const BASE = "https://azure-horizon-pm2d.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/rooms`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/dining`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/spa`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/experiences`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/offers`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/events`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/press`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/book`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE}/sitemap`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];

  const roomRoutes: MetadataRoute.Sitemap = rooms.map((r) => ({
    url: `${BASE}/rooms/${r.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE}/journal/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...roomRoutes, ...articleRoutes];
}
