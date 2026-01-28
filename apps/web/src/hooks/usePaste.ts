import { useState, useCallback } from "react";
import {
  createPaste as createPasteApi,
  fetchPaste as fetchPasteApi,
} from "@/services/paste.service";

type PasteData = {
  content: string;
  remainingViews: number | null;
  expiresAt: string | null;
};

export function usePaste() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPaste = useCallback(
    async (data: {
      content: string;
      ttl_seconds?: number;
      max_views?: number;
    }) => {
      setLoading(true);
      setError(null);

      try {
        const res = await createPasteApi(data);
        return res; // { id, url }
      } catch (err) {
        setError((err as Error).message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const fetchPaste = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetchPasteApi(id);

      const normalized: PasteData = {
        content: res.content,
        remainingViews: res.remaining_views,
        expiresAt: res.expires_at,
      };

      return normalized;
    } catch (err) {
      setError((err as Error).message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    createPaste,
    fetchPaste,
  };
}
