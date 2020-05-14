import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

import contentImage from "../assets/img/content-img.jpg";
import cardImg1 from "../assets/img/below-content.jpg";
import cardImg2 from "../assets/img/below-content2.jpg";
import cardImg3 from "../assets/img/below-content3.jpg";
import cardImg4 from "../assets/img/below-content4.jpg";

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
        <div className="container">
          <div className="row">
            <img className="content-img" src={contentImage} />
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
            <div className="row">
              <Card style={{ width: "17rem" }}>
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
              <Card style={{ width: "17rem" }}>
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
              <Card style={{ width: "17rem" }}>
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
              <Card style={{ width: "17rem" }}>
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
      <div className=""></div>
    </div>
  );
};

export default About;
