import mongoose, { Schema, Document } from "mongoose";

export interface PasteDocument extends Document {
  content: string;
  createdAt: number;
  expiresAt: number | null;
  maxViews: number | null;
  views: number;
}

const PasteSchema = new Schema<PasteDocument>({
  content: {
    type: String,
    required: true,
    trim: true,
  },

  createdAt: {
    type: Number,
    required: true,
  },

  expiresAt: {
    type: Number,
    default: null,
  },

  maxViews: {
    type: Number,
    default: null,
  },

  views: {
    type: Number,
    default: 0,
  },
});

export const Paste =
  mongoose.models.Paste || mongoose.model<PasteDocument>("Paste", PasteSchema);
