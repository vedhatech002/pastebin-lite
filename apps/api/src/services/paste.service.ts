import {
  createPaste,
  fetchAndIncrementPaste,
} from "../repositories/paste.repository";
import { getNow } from "../utils/time";

type CreatePasteServiceInput = {
  content: string;
  ttlSeconds?: number;
  maxViews?: number;
};

type CreatePasteServiceResult = {
  id: string;
};

type FetchPasteResult = {
  content: string;
  remainingViews: number | null;
  expiresAt: string | null;
};

export async function createPasteService(
  input: CreatePasteServiceInput,
): Promise<CreatePasteServiceResult> {
  const now = getNow();

  const expiresAt =
    typeof input.ttlSeconds === "number" ? now + input.ttlSeconds * 1000 : null;

  const paste = await createPaste({
    content: input.content,
    createdAt: now,
    expiresAt,
    maxViews: typeof input.maxViews === "number" ? input.maxViews : null,
  });

  return {
    id: paste._id.toString(),
  };
}

export async function fetchPasteService(
  id: string,
  now: number,
): Promise<FetchPasteResult | null> {
  const paste = await fetchAndIncrementPaste(id);

  if (!paste) return null;

  // TTL check
  if (paste.expiresAt !== null && now >= paste.expiresAt) {
    return null;
  }

  return {
    content: paste.content,
    remainingViews:
      paste.maxViews === null
        ? null
        : Math.max(paste.maxViews - paste.views, 0),
    expiresAt: paste.expiresAt ? new Date(paste.expiresAt).toISOString() : null,
  };
}
