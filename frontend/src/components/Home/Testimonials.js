import React from "react";
// "https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
const Testimonials = () => {
  return (
    <div>
      <div className="container mb-4">
        <div className="row">
          <div className="col text-center ">
            <h2>
              <strong className="text-dark">
                Clients <span style={{ color: "#F75D08" }}>Testimonials</span>
              </strong>
            </h2>
            <p className="text-dark text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div data-aos="zoom-in-up" className="row">
          <div className="col mt-3">
            <img
              width="250px"
              src="https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
              alt="img"
            />
          </div>
          <div className="col mt-3">
            <h4>
              <strong>Jonathan Adrus</strong>
            </h4>
            <h6>Volunteer</h6>
            <p className="text-dark">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
              Lorem Ipsum is simply dummy text
            </p>
          </div>
          <div className="col mt-3">
            <img
              width="250px"
              src="https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
              alt="img"
            />
          </div>
          <div className="col mt-3">
            <h4>
              <strong>Jonathan Adrus</strong>
            </h4>
            <h6>Volunteer</h6>
            <p className="text-dark">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry's standard dummy text ever since.
              Lorem Ipsum is simply dummy text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
