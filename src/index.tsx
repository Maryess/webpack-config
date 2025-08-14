import { LazyAbout } from "@/pages/About/LazyAbout";
import { App } from "@/pages/App";
import { LazyHome } from "@/pages/Home/LazyHome";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loading } from "./components/Loading/Loading";

const root = document.getElementById("root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyHome />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
export { LazyHome };
