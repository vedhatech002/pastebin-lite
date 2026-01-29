import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { FiClipboard, FiExternalLink, FiCheck } from "react-icons/fi";
export default function LinkRow({ icon, title, description, url, }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };
    return (_jsxs("div", { className: "flex items-start gap-4 rounded-lg bg-white p-4 border shadow-sm", children: [_jsx("div", { className: "mt-1 text-blue-600 text-xl", children: icon }), _jsxs("div", { className: "flex-1 space-y-1", children: [_jsx("div", { className: "font-medium text-gray-900", children: title }), _jsx("div", { className: "text-sm text-gray-500", children: description }), _jsx("input", { readOnly: true, value: url, className: "mt-2 w-full rounded-md border bg-gray-50 px-3 py-2 text-sm font-mono" })] }), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("button", { onClick: handleCopy, className: `inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm transition
            ${copied
                            ? "border-green-400 bg-green-50 text-green-700"
                            : "text-gray-700 hover:bg-gray-100"}`, children: copied ? (_jsxs(_Fragment, { children: [_jsx(FiCheck, {}), "Copied"] })) : (_jsxs(_Fragment, { children: [_jsx(FiClipboard, {}), "Copy"] })) }), _jsxs("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1 rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700", children: [_jsx(FiExternalLink, {}), "Open"] })] })] }));
}
