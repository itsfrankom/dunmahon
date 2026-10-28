# dunmahon.com (Astro)

A static rebuild of dunmahon.com. Free to host; the only cost is your domain.

## Everyday editing

- **Add a portfolio piece:** open `src/data/portfolio.ts`, copy a block, paste it at the top, change the details. Add `featured: true` to show it on the home page too.
- **Change your email, tagline, social links or menu:** `src/data/site.ts`.
- **Add a thumbnail:** drop the image in `public/images/` and set `image: "/images/your-file.jpg"`.
- **Colors and fonts:** the top of `src/styles/global.css`.

Push to GitHub and the site rebuilds itself.

## Before you cancel Squarespace (one-time checklist)

1. `npm install`, then `npm run fetch-images` — downloads your thumbnails from Squarespace into `public/images/`. Commit that folder.
2. Copy the text of these pages into the matching files in `src/content/pieces/`, then set `draft: false` in each:
   - /irish-times-silicon-valley
   - /totara-press
   - /lokalise-blogpost-231120
   - /social-values-can-drive-pocket-book-decisions
   - /business-travel-research
3. Paste your real bio into `src/pages/frank-o-mahony.astro`.
4. Confirm the email in `src/data/site.ts`.
5. Decide whether Dunmahon Estates (/dunmahon-real-estate-matchmaker) and The Next Stage (/nextstage) come across. If not, add redirects for them in `astro.config.mjs` (e.g. `"/nextstage": "https://your-substack-url"`).

## Going live (Cloudflare Pages, free)

1. Create a GitHub repo and push this folder.
2. In Cloudflare: Workers & Pages → Create → Pages → connect the repo. Framework preset: **Astro** (build `npm run build`, output `dist`).
3. Check the `*.pages.dev` preview link.
4. Add `dunmahon.com` and `www.dunmahon.com` as custom domains. If the domain is registered at Squarespace, either transfer it to Cloudflare or update its DNS records as Cloudflare instructs.
5. Once it's live and looks right, cancel the Squarespace plan.

Netlify and GitHub Pages work the same way if you prefer them.

## Running it on your computer

```
npm install
npm run dev     # http://localhost:4321
```
