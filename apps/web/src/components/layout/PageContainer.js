import { jsx as _jsx } from "react/jsx-runtime";
export default function PageContainer({ children }) {
    return (_jsx("div", { className: "min-h-screen bg-gray-100", children: _jsx("div", { className: "mx-auto max-w-3xl px-4 py-8", children: children }) }));
}
