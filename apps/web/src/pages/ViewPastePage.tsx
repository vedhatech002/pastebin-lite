import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePaste } from "@/hooks/usePaste";
import PageContainer from "@/components/layout/PageContainer";
import PasteViewer from "@/components/paste/PasteViewer";

export default function ViewPastePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { fetchPaste, loading, error } = usePaste();

  const [data, setData] = useState<{
    content: string;
    remainingViews: number | null;
    expiresAt: string | null;
  } | null>(null);

  useEffect(() => {
    if (!id) return;

    fetchPaste(id)
      .then(setData)
      .catch(() => navigate("/404"));
  }, [id, fetchPaste, navigate]);

  if (loading) return null;

  if (error) {
    navigate("/404");
    return null;
  }

  if (!data) return null;

  return (
    <PasteViewer
      content={data.content}
      remainingViews={data.remainingViews}
      expiresAt={data.expiresAt}
    />
  );
}
