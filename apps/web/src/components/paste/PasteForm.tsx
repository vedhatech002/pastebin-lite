import { useState } from "react";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";
import Input from "@/components/common/Input";
import TTLSelect from "@/components/common/TTLSelect";

export default function PasteForm() {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState<number | null>(null);
  const [maxViews, setMaxViews] = useState<string>("");

  // 🔹 Dummy success state
  const [pasteUrl, setPasteUrl] = useState<string | null>(null);

  const handleCreate = () => {
    // 🔹 simulate backend response
    const dummyId = Math.random().toString(36).substring(2, 8);
    const dummyUrl = `${window.location.origin}/p/${dummyId}`;

    setPasteUrl(dummyUrl);
  };

  return (
    <div className="space-y-6">
      {/* FORM */}
      <div className="space-y-4">
        <TextArea
          placeholder="Paste your text here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Expiry time
          </label>
          <TTLSelect value={ttl} onChange={setTtl} />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Max views (optional)
          </label>
          <Input
            type="number"
            min={1}
            placeholder="e.g. 5"
            value={maxViews}
            onChange={(e) => setMaxViews(e.target.value)}
          />
        </div>

        <Button disabled={!content.trim()} onClick={handleCreate}>
          Create Paste
        </Button>
      </div>

      {/* SUCCESS UI */}
      {pasteUrl && (
        <div className="rounded-md border border-green-300 bg-green-50 p-4 space-y-2">
          <p className="text-sm font-medium text-green-800">
            Paste created successfully 🎉
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <input
              readOnly
              value={pasteUrl}
              className="w-full rounded-md border px-3 py-2 text-sm bg-white"
            />
            <Button
              onClick={() => navigator.clipboard.writeText(pasteUrl)}
              className="bg-green-600 hover:bg-green-700"
            >
              Copy
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
