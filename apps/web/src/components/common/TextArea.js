import { jsx as _jsx } from "react/jsx-runtime";
export default function TextArea({ className = "", ...props }) {
    return (_jsx("textarea", { className: `w-full min-h-[160px] resize-y rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`, ...props }));
}
