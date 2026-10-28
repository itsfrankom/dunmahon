import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.dunmahon.com",
  // Keep old Squarespace links working. Add more as "/old-path": "/new-path".
  redirects: {
    "/frankgomahony": "/frank-o-mahony",
  },
});
