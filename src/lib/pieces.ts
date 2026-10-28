import { getCollection } from "astro:content";

export async function getPublishedPieces() {
  return getCollection("pieces", ({ data }) => !data.draft);
}

export async function publishedPieceIds() {
  return new Set((await getPublishedPieces()).map((p) => p.id));
}
