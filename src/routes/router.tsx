import Home from "../pages/Home/Home";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import Registro from "../pages/Register/Registro";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";


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
        path: "/registro",
        element: <Registro />,
      },

      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
