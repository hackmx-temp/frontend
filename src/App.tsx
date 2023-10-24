import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { verifyJWT } from "./models/User";

const App = () => {

  // Validar el token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verifyJWT(token).then((_) => {console.log("valido")}).catch((error) => {
        if (error.status === 401) {
          localStorage.removeItem("token");
        }
      });
    }
  }, [])

  return <RouterProvider router={router} />;
};

export default App;
