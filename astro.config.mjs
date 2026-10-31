import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // The one official address. Search engines are told every page lives here.
  site: "https://dunmahon.com",
  // Pages are /portfolio, not /portfolio/ (Cloudflare serves portfolio.html there).
  trailingSlash: "never",
  build: { format: "file" },
  integrations: [
    sitemap({
      filter: (page) => !/\/(thanks|404)$/.test(page.replace(/\/$/, "")),
    }),
  ],
  // Keep old Squarespace links working. Add more as "/old-path": "/new-path".
  redirects: {
    "/frankgomahony": "/frank-o-mahony",
    "/lokalise-blogpost-231120": "/portfolio",
    "/totara-press": "/portfolio",
    "/social-values-can-drive-pocket-book-decisions": "/portfolio",
    "/dunmahon-real-estate-matchmaker": "/pulse",
    "/nextstage": "/",
    "/testimonials": "/frank-o-mahony",
  },
});
