import React from "react";
import { Link } from "react-router-dom";
import "../css/About.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    </div>
  );
};

export default About;
