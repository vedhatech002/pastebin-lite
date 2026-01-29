import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import CreatePastePage from "@/pages/CreatePastePage";
import ViewPastePage from "@/pages/ViewPastePage";
import NotFoundPage from "@/pages/NotFoundPage";
export const router = createBrowserRouter([
    {
        element: _jsx(AppLayout, {}),
        children: [
            {
                path: "/",
                element: _jsx(CreatePastePage, {}),
            },
            {
                path: "/p/:id",
                element: _jsx(ViewPastePage, {}),
            },
            {
                path: "*",
                element: _jsx(NotFoundPage, {}),
            },
        ],
    },
]);
