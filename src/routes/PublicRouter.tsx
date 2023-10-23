import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const PublicRouter: React.FC = () => {
  return (
    <>
      <Header isLoggedIn={false} />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRouter;
