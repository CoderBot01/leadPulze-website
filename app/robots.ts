import type { MetadataRoute } from "next"

const BASE_URL = "https://www.leadpulze.com"

/**
 * Robots.txt Generator
 * 
 * Controls search engine crawler access to site pages.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
