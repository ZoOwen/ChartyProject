import React from "react";

// Components
import Carousel from "../components/Home/CarouselHome";
import Section1 from "../components/Home/Section1Home";
import Recent from "../components/Home/RecentHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Carousel />
      <Section1 />
      <Recent />
      <Footer />
    </div>
  );
}

export default Home;
