import React from "react";
import { AboutUs } from "../../components/AboutUs";
import { Footer } from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { ImageMosaic } from "../../components/ImageMosaic";

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
      <ImageMosaic />
    </div>
  );
};

export default Home;
