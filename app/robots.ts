import type { MetadataRoute } from "next";

const BASE = "https://azure-horizon-pm2d.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/book/thank-you"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
  };
}
