import { jsx as _jsx } from "react/jsx-runtime";
// App.tsx
import { RouterProvider } from "react-router-dom";
import Providers from "./Providers";
import { router } from "./router";
export default function App() {
    return (_jsx(Providers, { children: _jsx(RouterProvider, { router: router }) }));
}
