import PageContainer from "@/components/layout/PageContainer";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <PageContainer title="Paste not found">
      <div className="space-y-4">
        <p className="text-gray-700">
          The paste you are looking for does not exist or has expired.
        </p>

        <Button onClick={() => navigate("/")}>Create a new paste</Button>
      </div>
    </PageContainer>
  );
}
