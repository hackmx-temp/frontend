import React from "react";
import { AboutUs } from "../../components/AboutUs";
import { Carousel } from "../../components/Carousel";
import Chronogram from "../../components/Chronogram/Chronogram";
import { MapComponent } from "../../components/MapComponent";
import { Container, Grid } from "@mui/material";
import { MainContainer } from "./styles";
import { Mosaic } from "../../components/Mosaic";
import awsLogo from "../../assets/sponsors/aws.png";
import dacompassLogo from "../../assets/sponsors/dacompass.png";
import liverpoolLogo from "../../assets/sponsors/liverpool.png";

const Home = () => {
  return (
    <div>
      <div>
        <p>Section 1</p>
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
