import { Mosaic } from "../../components/Mosaic";
import { RegistryBanner } from "../../components/RegistryBanner";
import AboutHackMx from "../../components/AboutHackMx/AboutHackMx";
import { MoreInfo } from "../../components/MoreInfo";
import { Sponsors } from "../../components/Sponsors";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {

  return (
    <>
      <ToastContainer />
      <RegistryBanner />
      <AboutHackMx />
      <Sponsors />
      <MoreInfo />
      <Mosaic />
    </>
  );
};

export default Home;
