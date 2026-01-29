import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { usePaste } from "@/hooks/usePaste";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";
import Input from "@/components/common/Input";
import ErrorMessage from "@/components/common/ErrorMessage";
import TTLSelect from "@/components/common/TTLSelect";
import LinkRow from "../common/LinkRow";
import { FiCheckCircle, FiMonitor, FiFileText, } from "react-icons/fi";
export default function PasteForm() {
    const { createPaste, loading, error } = usePaste();
    const [content, setContent] = useState("");
    const [ttl, setTtl] = useState(null);
    const [maxViews, setMaxViews] = useState("");
    const [pasteUrl, setPasteUrl] = useState(null);
    const [pasteId, setPasteId] = useState(null);
    const handleCreate = async () => {
        try {
            const res = await createPaste({
                content,
                ttl_seconds: ttl ?? undefined,
                max_views: maxViews ? Number(maxViews) : undefined,
            });
            setPasteUrl(res.url);
            setPasteId(res.id);
        }
        catch {
            // error already handled in hook
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "rounded-xl border bg-white p-6 shadow-sm space-y-6", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("h1", { className: "text-2xl font-semibold text-gray-900", children: "Create a Paste" }), _jsx("p", { className: "text-sm text-gray-500", children: "Share text securely with optional expiry and view limits" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-medium text-gray-700", children: "Paste content" }), _jsx(TextArea, { value: content, onChange: (e) => setContent(e.target.value), placeholder: "Paste your text here...", className: "min-h-[160px]" })] }), _jsxs("div", { className: "space-y-4 rounded-lg bg-gray-50 p-4 border", children: [_jsx("div", { className: "text-sm font-medium text-gray-700", children: "Options" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm text-gray-600", children: "Expiry time" }), _jsx(TTLSelect, { value: ttl, onChange: setTtl })] }), _jsxs("div", { className: "space-y-1", children: [_jsx("label", { className: "text-sm text-gray-600", children: "Max views" }), _jsx(Input, { type: "number", min: 1, placeholder: "Unlimited", value: maxViews, onChange: (e) => setMaxViews(e.target.value) })] })] })] }), error && _jsx(ErrorMessage, { message: error }), _jsx("div", { className: "flex justify-end pt-2", children: _jsx(Button, { onClick: handleCreate, disabled: !content.trim() || loading, className: "px-6 py-2 text-base", children: loading ? "Creating…" : "Create Paste" }) })] }), pasteUrl && pasteId && (_jsxs("div", { className: "mt-8 rounded-xl border border-green-200 bg-green-50 p-6 space-y-5", children: [_jsxs("div", { className: "flex items-center gap-2 text-green-800", children: [_jsx(FiCheckCircle, { className: "text-xl" }), _jsx("h3", { className: "text-lg font-semibold", children: "Paste created successfully" })] }), _jsx(LinkRow, { icon: _jsx(FiMonitor, {}), title: "Open in App", description: "Styled view with UI and limits", url: `${window.location.origin}/p/${pasteId}` }), _jsx(LinkRow, { icon: _jsx(FiFileText, {}), title: "Open Raw Paste", description: "Plain HTML rendered by server", url: pasteUrl })] }))] }));
}
