import { RouteObject, createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import { Home } from "../pages/Home";
import { Registro } from "../pages/Registro";
import PrivateRouter from "./PrivateRouter";
import Teams from "../pages/Teams/Teams";
import { CreateTeam } from "../pages/CreateTeam";
import { MyTeam } from "../pages/MyTeam";
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
  {
    // Private routes
    path: "/usuario",
    element: <PrivateRouter />,
    children: [
      {
        path: "/usuario",
        element: <Home />,
      },
      {
        path: "/usuario/equipos",
        element: <Teams />,
      },
      {
        path: "/usuario/equipos/crear",
        element: <CreateTeam />,
      },
      {
        path: "/usuario/mi-equipo",
        element: <MyTeam />,
      },
      {
        path: "/usuario/equipos/editar",
        element: <EditTeam />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
