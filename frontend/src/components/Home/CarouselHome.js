import React from "react";
import { Carousel, Button } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://charity.w3itexperts.com/images/main-slider/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="caption-carousel">
            <h3 style={{ color: "#F75D08" }}>
              <strong>We Rise By Lifthing Others</strong>
            </h3>
            <h1>
              <strong>
                Welcome <span style={{ color: "#F75D08" }}>Charity</span>
              </strong>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, <br />
              when an unknown printer took
            </p>
            <Button
              size="sm"
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mr-5 btn-carousel"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://charity.w3itexperts.com/images/main-slider/slide2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption-carousel">
            <h3 style={{ color: "#F75D08" }}>
              <strong>We Rise By Lifthing Others</strong>
            </h3>
            <h1>
              <strong>
                Welcome <span style={{ color: "#F75D08" }}>Charity</span>
              </strong>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, <br />
              when an unknown printer took
            </p>
            <Button
              size="sm"
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mr-5 btn-carousel"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://charity.w3itexperts.com/images/main-slider/slide3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className="caption-carousel">
            <h3 style={{ color: "#F75D08" }}>
              <strong>We Rise By Lifthing Others</strong>
            </h3>
            <h1>
              <strong>
                Welcome <span style={{ color: "#F75D08" }}>Charity</span>
              </strong>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, <br />
              when an unknown printer took
            </p>
            <Button
              size="sm"
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mr-5 btn-carousel"
            >
              Read More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
