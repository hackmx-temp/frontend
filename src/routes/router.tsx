import Home from "../pages/Home/Home";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import Registro from "../pages/Register/Registro";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";


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

      {
        path: "/sign-in",
        element: <SignIn />,
      },

      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
