import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Parallax } from "react-parallax";

import contentImage from "../assets/img/content-img.jpg";
import cardImg1 from "../assets/img/below-content.jpg";
import cardImg2 from "../assets/img/below-content2.jpg";
import cardImg3 from "../assets/img/below-content3.jpg";
import cardImg4 from "../assets/img/below-content4.jpg";
import imgLogo1 from "../assets/logo/house.png";
import imgLogo2 from "../assets/logo/chart.png";
import imgLogo3 from "../assets/logo/donation.png";
import imgLogo4 from "../assets/logo/helping.png";

import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <div className="first-banner">
        <div className="container">
          <div className="content-banner">
            <h1>About us</h1>
            <ul className="list-inline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>/</li>
              <li>About us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="OurStory">
        <h2>
          Our
          <span>Story</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry has been the industry's standard dummy text ever since.
        </p>
      </div>
      <div className="middle-content">
        <div className="container ml-5 mr-5">
          <div className="row content-about">
            <img className="content-img" alt="" src={contentImage} />
            <div className="right-content">
              <p className="paragraph-right">
                Charity Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley.
              </p>
              <h3>Charity Our Work</h3>
              <p className="paragraph-right">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s .
              </p>
              <button className="readmore">Read More</button>
            </div>
          </div>
          <div className="card-content">
            <div className="row content-about">
              <Card style={{ width: "19rem" }}>
                <Card.Header>
                  <Card.Title>Scholarship</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={cardImg1} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "19rem" }}>
                <Card.Header>
                  <Card.Title>Helping Hand</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={cardImg2} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "19rem" }}>
                <Card.Header>
                  <Card.Title>Helping Homeless</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={cardImg3} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "19rem" }}>
                <Card.Header>
                  <Card.Title>Family Resources Center</Card.Title>
                </Card.Header>
                <Card.Img variant="top" src={cardImg4} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="parallax-content">
        <Parallax
          bgImage={require("../assets/img/image-footer.jpg")}
          strength={200}
        >
          <div style={{ height: "250px" }}>
            <div className="parallax-front-image">
              <div className="col  logo-small">
                <img src={imgLogo1} alt="" />
                <h2>
                  <strong>1897</strong>
                </h2>
                <p className="text-center pt-0">Home Resigning</p>
              </div>
              <div className="col justify-content-center logo-small">
                <img src={imgLogo2} alt="" />
                <h2>
                  <strong>4897</strong>
                </h2>
                <p className="text-center pt-0">Charity Chart</p>
              </div>
              <div className="col justify-content-center logo-small">
                <img src={imgLogo3} alt="" />
                <h2>
                  <strong>5897</strong>
                </h2>
                <p className="text-center pt-0">Donation</p>
              </div>
              <div className="col justify-content-center logo-small">
                <img src={imgLogo4} alt="" />
                <h2>
                  <strong>58397</strong>
                </h2>
                <p className="text-center pt-0">Helping Hand</p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <Footer />
    </div>
  );
};

export default About;
