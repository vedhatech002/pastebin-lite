import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FiAlertCircle } from "react-icons/fi";
import Button from "@/components/common/Button";
import { useNavigate } from "react-router-dom";
export default function NotFoundPage() {
    const navigate = useNavigate();
    return (_jsx("div", { className: "flex min-h-[60vh] items-center justify-center", children: _jsxs("div", { className: "max-w-md text-center space-y-6", children: [_jsx("div", { className: "text-7xl font-bold text-gray-300", children: "404" }), _jsxs("div", { className: "flex items-center justify-center gap-2 text-gray-800", children: [_jsx(FiAlertCircle, { className: "text-xl" }), _jsx("h1", { className: "text-xl font-semibold", children: "Paste not found" })] }), _jsx("p", { className: "text-gray-600", children: "The paste you\u2019re looking for doesn\u2019t exist, has expired, or has reached its view limit." }), _jsx("div", { className: "pt-2", children: _jsx(Button, { onClick: () => navigate("/"), className: "px-6 py-2", children: "Create a new paste" }) })] }) }));
}
