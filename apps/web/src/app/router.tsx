import { createBrowserRouter } from "react-router-dom";
import CreatePastePage from "@/pages/CreatePastePage";
import ViewPastePage from "@/pages/ViewPastePage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreatePastePage />,
  },
  {
    path: "/p/:id",
    element: <ViewPastePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
