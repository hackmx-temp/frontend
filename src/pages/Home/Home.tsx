import React from "react";
import { AboutUs } from "../../components/AboutUs";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import Button from '@mui/material/Button';
import Header from "../../componentes/Header";
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>
      <Header></Header>
      <div>
      <div style={{ position: 'relative', textAlign: 'center' }}>
  <img src="/HACK2023INICIO.png" alt="Tu imagen" className="imagen-home" style={{ width: '100%' }} />
  <Link to="/registro"> {/* Agrega el enlace aquí */}
    <Button variant="contained" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '18%', height: '9%', textTransform: 'uppercase', borderRadius: '26px', color: '#FFFFFF', fontSize: '2vw' }}>
      Registrate
    </Button>
  </Link>
</div>
    </div>



      <div>
        <AboutUs />
      </div>
      <div>
        <Carousel
          clients={[
            {
              src: "https://play-lh.googleusercontent.com/FwrxfHaknUKLneazGpPsjJvQ4mUYKJkccj-efHNeXQISwCwqC9ymNAnqlAY5J5oHIOc",
              alt: "Image 1",
              client: "Client 1",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_del_ITESM.svg",
              alt: "Image 1",
              client: "Client 1",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png",
              alt: "Image 1",
              client: "Client 1",
            },
          ]}
          width="100%"
          imageWidth="150px"
        />
      </div>
      <Sponsors />
    </div>
  );
};

export default Home;
