import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";

const PublicRouter: React.FC = () => {
  return (
    <>
      <p>NavBar Public</p>
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicRouter;
