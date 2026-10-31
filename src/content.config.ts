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
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // When it was first published, e.g. "2002-04". Used by search engines.
    date: z.string().optional(),
  }),
});

export const collections = { pieces };
