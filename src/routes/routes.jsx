import { createBrowserRouter } from "react-router-dom";

import Index from "../index";
import App from "@/pages/app.pages";
import About from "@/pages/about.pages";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      { path: "", element: <App /> },
      { path: "about", element: <About /> },
    ],
  },
]);
