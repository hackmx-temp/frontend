import Home from "../pages/Home/Home";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import Register from "../pages/Register/Register";

const routes: RouteObject[] = [
  {
    // Public routes
    path: "/",
    element: <PublicRouter />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
