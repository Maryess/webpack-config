import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "./components/Loading/Loading";
import { LazyHome } from "@/pages/Home/LazyHome";
import { App } from "@/pages/App";
import { LazyAbout } from "@/pages/About/LazyAbout";
var root = document.getElementById("root");
if (!root) {
    throw new Error("root not found");
}
var container = createRoot(root);
var router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(App, {}),
        children: [
            {
                path: "/about",
                element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(LazyAbout, {}) })),
            },
            {
                path: "/home",
                element: (_jsx(Suspense, { fallback: _jsx(Loading, {}), children: _jsx(LazyHome, {}) })),
            },
        ],
    },
]);
container.render(_jsx(RouterProvider, { router: router }));
export { LazyHome };
