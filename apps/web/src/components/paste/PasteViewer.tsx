import { FiEye, FiClock, FiFileText } from "react-icons/fi";

type Props = {
  content: string;
  remainingViews: number | null;
  expiresAt: string | null;
};

export default function PasteViewer({
  content,
  remainingViews,
  expiresAt,
}: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2 text-gray-700">
        <FiFileText className="text-lg" />
        <h2 className="text-lg font-semibold">Paste Content</h2>
      </div>

      {/* Content */}
      <div className="rounded-xl border bg-white shadow-sm">
        <pre className="whitespace-pre-wrap break-words p-6 text-sm leading-relaxed font-mono text-gray-800 bg-gray-50 rounded-xl">
          {content}
        </pre>
      </div>

      {/* Metadata */}
      {(remainingViews !== null || expiresAt) && (
        <div className="flex flex-wrap gap-4 rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">
          {remainingViews !== null && (
            <div className="flex items-center gap-2">
              <FiEye className="text-gray-500" />
              <span>
                <span className="font-medium">Remaining views:</span>{" "}
                {remainingViews}
              </span>
            </div>
          )}

          {expiresAt && (
            <div className="flex items-center gap-2">
              <FiClock className="text-gray-500" />
              <span>
                <span className="font-medium">Expires at:</span>{" "}
                {new Date(expiresAt).toLocaleString()}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
