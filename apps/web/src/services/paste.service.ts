import api from "@/lib/axios";

type CreatePasteInput = {
  content: string;
  ttl_seconds?: number;
  max_views?: number;
};

type CreatePasteResponse = {
  id: string;
  url: string;
};

type FetchPasteResponse = {
  content: string;
  remaining_views: number | null;
  expires_at: string | null;
};

export async function createPaste(
  data: CreatePasteInput,
): Promise<CreatePasteResponse> {
  const res = await api.post<CreatePasteResponse>("/api/pastes", data);
  return res.data;
}

export async function fetchPaste(id: string): Promise<FetchPasteResponse> {
  const res = await api.get<FetchPasteResponse>(`/api/pastes/${id}`);
  return res.data;
}
