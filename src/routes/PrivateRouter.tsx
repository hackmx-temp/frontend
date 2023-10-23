import { Navigate, Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

const PrivateRouter = () => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the token is present
  return (
    <>
      {isAuthenticated ? (
        <>
          {" "}
          <Header isLoggedIn={true} /> <Outlet /> <Footer />{" "}
        </>
      ) : (
        <Navigate to="/sign-in" replace={true} />
      )}
    </>
  );
};

export default PrivateRouter;
