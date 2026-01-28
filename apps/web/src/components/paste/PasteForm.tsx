import { useState } from "react";
import { usePaste } from "@/hooks/usePaste";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";
import Input from "@/components/common/Input";
import ErrorMessage from "@/components/common/ErrorMessage";
import TTLSelect from "@/components/common/TTLSelect";
import LinkRow from "../common/LinkRow";
import {
  FiCheckCircle,
  FiClipboard,
  FiExternalLink,
  FiMonitor,
  FiFileText,
} from "react-icons/fi";

export default function PasteForm() {
  const { createPaste, loading, error } = usePaste();

  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState<number | null>(null);
  const [maxViews, setMaxViews] = useState("");
  const [pasteUrl, setPasteUrl] = useState<string | null>(null);
  const [pasteId, setPasteId] = useState<string | null>(null);

  const handleCreate = async () => {
    try {
      const res = await createPaste({
        content,
        ttl_seconds: ttl ?? undefined,
        max_views: maxViews ? Number(maxViews) : undefined,
      });

      setPasteUrl(res.url);
      setPasteId(res.id);
    } catch {
      // error already handled in hook
    }
  };

  return (
    <div className="space-y-6">
      <div className="rounded-xl border bg-white p-6 shadow-sm space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create a Paste
          </h1>
          <p className="text-sm text-gray-500">
            Share text securely with optional expiry and view limits
          </p>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Paste content
          </label>
          <TextArea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your text here..."
            className="min-h-[160px]"
          />
        </div>

        {/* Options */}
        <div className="space-y-4 rounded-lg bg-gray-50 p-4 border">
          <div className="text-sm font-medium text-gray-700">Options</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm text-gray-600">Expiry time</label>
              <TTLSelect value={ttl} onChange={setTtl} />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-600">Max views</label>
              <Input
                type="number"
                min={1}
                placeholder="Unlimited"
                value={maxViews}
                onChange={(e) => setMaxViews(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Error */}
        {error && <ErrorMessage message={error} />}

        {/* Action */}
        <div className="flex justify-end pt-2">
          <Button
            onClick={handleCreate}
            disabled={!content.trim() || loading}
            className="px-6 py-2 text-base"
          >
            {loading ? "Creating…" : "Create Paste"}
          </Button>
        </div>
      </div>

      {pasteUrl && pasteId && (
        <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6 space-y-5">
          {/* Header */}
          <div className="flex items-center gap-2 text-green-800">
            <FiCheckCircle className="text-xl" />
            <h3 className="text-lg font-semibold">
              Paste created successfully
            </h3>
          </div>

          {/* App View */}
          <LinkRow
            icon={<FiMonitor />}
            title="Open in App"
            description="Styled view with UI and limits"
            url={`${window.location.origin}/p/${pasteId}`}
          />

          {/* Raw View */}
          <LinkRow
            icon={<FiFileText />}
            title="Open Raw Paste"
            description="Plain HTML rendered by server"
            url={pasteUrl}
          />
        </div>
      )}
    </div>
  );
}
