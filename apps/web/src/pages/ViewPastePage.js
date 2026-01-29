import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePaste } from "@/hooks/usePaste";
import PasteViewer from "@/components/paste/PasteViewer";
export default function ViewPastePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { fetchPaste, loading, error } = usePaste();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (!id)
            return;
        fetchPaste(id)
            .then(setData)
            .catch(() => navigate("/404"));
    }, [id, fetchPaste, navigate]);
    if (loading)
        return null;
    if (error) {
        navigate("/404");
        return null;
    }
    if (!data)
        return null;
    return (_jsx(PasteViewer, { content: data.content, remainingViews: data.remainingViews, expiresAt: data.expiresAt }));
}
