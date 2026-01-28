import { Request, Response } from "express";
import mongoose from "mongoose";

export function healthCheck(_req: Request, res: Response) {
  const dbReady = mongoose.connection.readyState === 1;

  res.status(200).json({
    ok: dbReady,
  });
}
