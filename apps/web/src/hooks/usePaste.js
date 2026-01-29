import { useState, useCallback } from "react";
import { createPaste as createPasteApi, fetchPaste as fetchPasteApi, } from "@/services/paste.service";
export function usePaste() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const createPaste = useCallback(async (data) => {
        setLoading(true);
        setError(null);
        try {
            const res = await createPasteApi(data);
            return res; // { id, url }
        }
        catch (err) {
            setError(err.message);
            throw err;
        }
        finally {
            setLoading(false);
        }
    }, []);
    const fetchPaste = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchPasteApi(id);
            const normalized = {
                content: res.content,
                remainingViews: res.remaining_views,
                expiresAt: res.expires_at,
            };
            return normalized;
        }
        catch (err) {
            setError(err.message);
            throw err;
        }
        finally {
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
