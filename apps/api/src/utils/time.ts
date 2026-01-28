import { Request } from "express";

//  Returns the current time in milliseconds.
export function getNow(req?: Request): number {
  if (process.env.TEST_MODE === "1" && req) {
    const headerTime = req.header("x-test-now-ms");
    if (headerTime) {
      const parsed = Number(headerTime);
      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }
  }

  return Date.now();
}
