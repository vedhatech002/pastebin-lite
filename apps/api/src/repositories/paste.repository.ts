import { Paste, PasteDocument } from "../models/Paste.model";

type CreatePasteParams = {
  content: string;
  createdAt: number;
  expiresAt: number | null;
  maxViews: number | null;
};

export async function createPaste(
  params: CreatePasteParams,
): Promise<PasteDocument> {
  const paste = new Paste({
    content: params.content,
    createdAt: params.createdAt,
    expiresAt: params.expiresAt,
    maxViews: params.maxViews,
    views: 0,
  });

  return paste.save();
}

export async function findPasteById(id: string): Promise<PasteDocument | null> {
  return Paste.findById(id).exec();
}

export async function fetchAndIncrementPaste(
  id: string,
): Promise<PasteDocument | null> {
  return Paste.findOneAndUpdate(
    {
      _id: id,
      $or: [{ maxViews: null }, { $expr: { $lt: ["$views", "$maxViews"] } }],
    },
    {
      $inc: { views: 1 },
    },
    {
      new: true,
    },
  ).exec();
}
