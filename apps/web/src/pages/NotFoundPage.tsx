import { FiAlertCircle } from "react-icons/fi";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-md text-center space-y-6">
        {/* Big 404 */}
        <div className="text-7xl font-bold text-gray-300">404</div>

        {/* Icon + title */}
        <div className="flex items-center justify-center gap-2 text-gray-800">
          <FiAlertCircle className="text-xl" />
          <h1 className="text-xl font-semibold">Paste not found</h1>
        </div>

        {/* Description */}
        <p className="text-gray-600">
          The paste you’re looking for doesn’t exist, has expired, or has
          reached its view limit.
        </p>

        {/* Action */}
        <div className="pt-2">
          <Button onClick={() => navigate("/")} className="px-6 py-2">
            Create a new paste
          </Button>
        </div>
      </div>
    </div>
  );
}
