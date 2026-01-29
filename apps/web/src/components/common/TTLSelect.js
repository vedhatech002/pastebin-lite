import { jsx as _jsx } from "react/jsx-runtime";
const TTL_OPTIONS = [
    { label: "No expiry", value: null },
    { label: "2 minutes", value: 120 },
    { label: "5 minutes", value: 300 },
    { label: "10 minutes", value: 600 },
    { label: "15 minutes", value: 900 },
    { label: "30 minutes", value: 1800 },
    { label: "45 minutes", value: 2700 },
    { label: "1 hour", value: 3600 },
    { label: "1 day", value: 86400 },
    { label: "7 days", value: 604800 },
];
export default function TTLSelect({ value, onChange }) {
    return (_jsx("select", { className: "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500", value: value ?? "", onChange: (e) => {
            const selected = e.target.value;
            onChange(selected === "" ? null : Number(selected));
        }, children: TTL_OPTIONS.map((option) => (_jsx("option", { value: option.value ?? "", children: option.label }, option.label))) }));
}
