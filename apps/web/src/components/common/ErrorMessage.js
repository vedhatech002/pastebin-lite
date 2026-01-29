import { jsx as _jsx } from "react/jsx-runtime";
export default function ErrorMessage({ message }) {
    if (!message)
        return null;
    return (_jsx("div", { className: "rounded-md border border-red-300 bg-red-50 px-4 py-2 text-sm text-red-700", children: message }));
}
