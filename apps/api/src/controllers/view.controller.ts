import { Request, Response } from "express";
import { fetchPasteService } from "../services/paste.service";
import { getNow } from "../utils/time";

/**
 * Escapes HTML special characters to prevent XSS
 */
function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function viewPasteController(req: Request, res: Response) {
  const { id } = req.params;
  const now = getNow(req);

  const result = await fetchPasteService(id, now);

  if (!result) {
    return res.status(404).send("Paste not found");
  }

  const safeContent = escapeHtml(result.content);

  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Paste ${id}</title>
        <style>
          body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont;
            background: #f9fafb;
            padding: 40px;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            background: #ffffff;
            padding: 24px;
            border-radius: 8px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <pre>${safeContent}</pre>
        </div>
      </body>
    </html>
  `);
}
