import { Mosaic } from "../../components/Mosaic";
import { RegistryBanner } from "../../components/RegistryBanner";
import AboutHackMx from "../../components/AboutHackMx/AboutHackMx";
import { MoreInfo } from "../../components/MoreInfo";
import { Sponsors } from "../../components/Sponsors";

const Home = () => {
  return (
    <>
      <RegistryBanner />
      <AboutHackMx />
      <Sponsors />
      <MoreInfo />
      <Mosaic />
    </>
  );
};

export default Home;