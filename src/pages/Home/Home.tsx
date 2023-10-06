import React from "react";
import { AboutUs } from "../../components/AboutUs";
import { Carousel } from "../../components/Carousel";
import Chronogram from "../../components/Chronogram/Chronogram";
import { MapComponent } from "../../components/MapComponent";
import { Button, Container, Grid } from "@mui/material";
import { MainContainer } from "./styles";
import { Mosaic } from "../../components/Mosaic";
import awsLogo from "../../Assets/sponsors/aws.png";
import dacompassLogo from "../../Assets/sponsors/dacompass.png";
import liverpoolLogo from "../../Assets/sponsors/liverpool.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={{ position: 'relative', textAlign: 'center' }}>
          <img src="/HACK2023INICIO.png" alt="Tu imagen" className="imagen-home" style={{ width: '100%' }} />
          <Link to="/registro">
            <Button variant="contained" style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)', width: '18%', height: '9%', textTransform: 'uppercase', borderRadius: '26px', color: '#FFFFFF', fontSize: '2vw' }}>
              Registrate
            </Button>
          </Link>
        </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Mosaic />
      </div>
      <div>
        <Carousel
          clients={[
            {
              src: awsLogo,
              alt: "AWS",
              client: "Client 1",
            },
            {
              src: dacompassLogo,
              alt: "Dacompass",
              client: "Client 1",
            },
            {
              src: liverpoolLogo,
              alt: "Liverpool",
              client: "Client 1",
            },
          ]}
          width="100%"
          imageWidth="150px"
        />
      </div>
      <MainContainer>
        <Container
          style={{
            // height: "100vh",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e4caa5",
          }}
        >
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                paddingLeft: "5rem",
              }}
            >
              <Chronogram />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MapComponent />
            </Grid>
          </Grid>
        </Container>
      </MainContainer>
    </div>
  );
};

export default Home;