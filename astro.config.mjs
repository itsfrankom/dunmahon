import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.dunmahon.com",
  // Keep old Squarespace links working. Add more as "/old-path": "/new-path".
  redirects: {
    "/frankgomahony": "/frank-o-mahony",
    "/lokalise-blogpost-231120": "/portfolio",
    "/totara-press": "/portfolio",
    "/social-values-can-drive-pocket-book-decisions": "/portfolio",
    "/business-travel-research": "/portfolio",
    "/dunmahon-real-estate-matchmaker": "https://santafefrank.com",
    "/nextstage": "/",
    "/testimonials": "/frank-o-mahony",
  },
});
