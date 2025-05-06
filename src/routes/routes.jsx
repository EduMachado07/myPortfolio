import { createBrowserRouter } from "react-router-dom";

import Index from "../index";
import App from "@/pages/app.pages";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [{ path: "", element: <App /> }],
  },
]);
