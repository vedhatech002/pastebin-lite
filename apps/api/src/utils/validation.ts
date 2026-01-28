export type CreatePasteInput = {
  content?: unknown;
  ttl_seconds?: unknown;
  max_views?: unknown;
};

export type ValidationResult =
  | { valid: true }
  | { valid: false; message: string };

export function validateCreatePaste(input: CreatePasteInput): ValidationResult {
  // content validation
  if (typeof input.content !== "string" || input.content.trim() === "") {
    return {
      valid: false,
      message: "content is required and must be a non-empty string",
    };
  }

  // ttl_seconds validation
  if (input.ttl_seconds !== undefined) {
    if (
      typeof input.ttl_seconds !== "number" ||
      !Number.isInteger(input.ttl_seconds) ||
      input.ttl_seconds < 1
    ) {
      return {
        valid: false,
        message: "ttl_seconds must be an integer greater than or equal to 1",
      };
    }
  }

  // max_views validation
  if (input.max_views !== undefined) {
    if (
      typeof input.max_views !== "number" ||
      !Number.isInteger(input.max_views) ||
      input.max_views < 1
    ) {
      return {
        valid: false,
        message: "max_views must be an integer greater than or equal to 1",
      };
    }
  }

  return { valid: true };
}
