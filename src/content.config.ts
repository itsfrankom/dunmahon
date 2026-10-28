import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Writing that lives on your own site (e.g. the Irish Times columns).
// Each Markdown file in src/content/pieces/ becomes a page at /<file-name>.
// Set `draft: true` to keep a piece off the site until it's ready.
const pieces = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pieces" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pieces };
