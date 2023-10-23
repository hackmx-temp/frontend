import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const PrivateRouter: React.FC = () => {
  // Change header for the one with perfil
  return (
    <>
      <Header isLoggedIn={true} />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateRouter;
