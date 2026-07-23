import type { MetadataRoute } from "next";
import { BUSINESS_INFO } from "@/lib/constants/business-info";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // AI answer engines / assistants - explicitly welcomed for AEO/GEO visibility
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "Meta-ExternalAgent",
          "Amazonbot",
        ],
        allow: "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", BUSINESS_INFO.url).toString(),
    host: BUSINESS_INFO.url,
  };
}
