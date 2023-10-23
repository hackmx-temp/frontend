import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const PrivateRouter = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the token is present
  const navigate = (to: string) => <Navigate to={to} replace={true} />;
  return (
    <>
      {isAuthenticated ? (
        <>
          {" "}
          <Header /> <Outlet /> <Footer />{" "}
        </>
      ) : (
        navigate("/sign-in")
      )}
    </>
  );
};

export default PrivateRouter;
