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
    <div className="space-y-4">
      <div className="rounded-md border bg-white p-4">
        <pre className="whitespace-pre-wrap break-words text-sm text-gray-800">
          {content}
        </pre>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        {remainingViews !== null && (
          <div>
            <span className="font-medium">Remaining views:</span>{" "}
            {remainingViews}
          </div>
        )}

        {expiresAt && (
          <div>
            <span className="font-medium">Expires at:</span>{" "}
            {new Date(expiresAt).toLocaleString()}
          </div>
        )}
      </div>
    </div>
  );
}
