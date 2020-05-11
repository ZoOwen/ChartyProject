import React from "react";

// Components
import Carousel from "../components/Home/CarouselHome";
import Section1 from "../components/Home/Section1Home";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Carousel />
      <Section1 />
      <Footer />
    </div>
  );
}

export default Home;
