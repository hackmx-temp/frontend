import React from "react";
import { AboutUs } from "../../components/AboutUs";
import { Footer } from "../../components/Footer";

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
        <p>Section 4</p>
      </div>
      <div>
        <p>Section 5</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
