import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
export default function AppLayout() {
    return (_jsx(PageContainer, { children: _jsx(Outlet, {}) }));
}
