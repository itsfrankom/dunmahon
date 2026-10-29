// Downloads your portfolio thumbnails from Squarespace into public/images/.
// Run once with `npm run fetch-images` BEFORE you cancel Squarespace,
// then commit the public/images folder. Files already downloaded are skipped.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = "https://images.squarespace-cdn.com/content/v1/5eecdb150e6b87080edca572/";
const images = {
  "logo.webp": "1633700335645-T66Y8LLXUNXAGIK5MPNU/Dunmahon+even+larger+Brush+Stroke+Logo.png",
  "storytelling-on-a-box.webp": "1629038298362-XLRP487PSVVK9KBJUQUC/magic-mind-rcWYf3fU2Hw-unsplash.jpg",
  "digital-vs-offset.webp": "1628855911135-REG7LM4BO8OHEP28S3PP/bernard-hermant-qTpc0Vj4YoE-unsplash.jpg",
  "filta-logo.webp": "1634296979757-0P0JIPAD6HI6GN5PTQ4K/filta+logo.png",
  "livetiles-mentholatum.webp": "1624613586746-08JL3RUI7IV1PVVQ2T01/frank-dunmahon-customer-stories-livetiles-mentholatum.png",
  "livetiles-engie.webp": "1624613600459-V22YY5AT7R6L70LW8L16/frank-dunmahon-customer-stories-livetiles-engie.jpeg",
  "livetiles-creditsafe.webp": "1621545022688-AHZZ9WXZ0U5IX2ELD422/livetilesglobal-dunmahon-writing-portfolio.png",
  "surveymonkey-social-values.webp": "1621544459405-8SPM7Y7R73FNNX5ZF5UV/Social-values-can-drive-pocket-book-decisions-dunmahon-writing-portfolio-survey-monkey.jpg",
  "surveymonkey-travel.webp": "1621544347851-VXFQDZLN523I4PTWEQJY/americans-are-ready-to-travel-dunmahon-writing-portfolio-survey-monkey.jpg",
  "surveymonkey-cloud.webp": "1620212838974-D0J298CNVJPA5F2JBHFY/frank-omahony-writing-portfolio-survery-monkey-2021.jpg",
  "silicon-valley-map.webp": "1607097032428-J9LLS69DTSJI9K5902M0/Silicon-Valley-map_.jpg",
  "ipo.webp": "1619787885562-MAPHO2ZSVT8CQG8EF5IY/IPO+image.jpeg",
  "gibbs-hybrid-logo.webp": "1620214530888-C6C492XHYKBL06D0XX16/gibbs+hybrid+logo.png",
  "luxembourg.webp": "1607019189606-I7E5Q85L1ZBPU3MI1DEO/luxembourg-in-pictures-beautiful-places-to-photograph-old-quarter-luxembourg-city.jpg",
  "lokalise.webp": "1619787987244-0MJSXP4IQFFR3VEJTOR6/LOKALISE_400x400.jpg",
  "plex-direct-mail.webp": "1611930512329-45S7LAC4SWTI1W1WLRH0/Screenshot+2021-01-29+at+14.26.07.png",
  "shell-lubricants.webp": "1607009852478-1YA5RZN6WLNEXHXC8H57/Shell+lubricants.png",
};

const dir = join(process.cwd(), "public", "images");
mkdirSync(dir, { recursive: true });

let got = 0, failed = 0;
for (const [name, path] of Object.entries(images)) {
  const dest = join(dir, name);
  if (existsSync(dest)) continue;
  try {
    const res = await fetch(base + path + "?format=1000w");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    got++;
    console.log(`✓ ${name}`);
  } catch (e) {
    failed++;
    console.warn(`✗ ${name} (${e.message})`);
  }
}
console.log(`Images: ${got} downloaded, ${failed} failed.`);
