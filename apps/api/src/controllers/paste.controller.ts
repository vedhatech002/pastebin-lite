import { Request, Response } from "express";
import { validateCreatePaste } from "../utils/validation";
import {
  createPasteService,
  fetchPasteService,
} from "../services/paste.service";
import { getNow } from "../utils/time";

export async function createPasteController(req: Request, res: Response) {
  // Validate request body
  const validation = validateCreatePaste(req.body);

  if (!validation.valid) {
    return res.status(400).json({
      error: validation.message,
    });
  }

  //  Extract validated values
  const { content, ttl_seconds, max_views } = req.body;

  //  Call service layer
  const result = await createPasteService({
    content,
    ttlSeconds: ttl_seconds,
    maxViews: max_views,
  });

  // Build response
  const baseUrl = `${req.protocol}://${req.get("host")}`;

  return res.status(201).json({
    id: result.id,
    url: `${baseUrl}/p/${result.id}`,
  });
}

export async function fetchPasteController(req: Request, res: Response) {
  const { id } = req.params;

  const now = getNow(req);

  const result = await fetchPasteService(id, now);

  if (!result) {
    return res.status(404).json({
      error: "Paste not found or unavailable",
    });
  }

  return res.status(200).json({
    content: result.content,
    remaining_views: result.remainingViews,
    expires_at: result.expiresAt,
  });
}
