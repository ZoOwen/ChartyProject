import React from "react";

function Testimonials() {
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
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-3">
            <img
              style={{ width: "18rem" }}
              src="https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
              alt="img"
            />
          </div>
          <div className="row col-3">
            <div className="col pl-0">
              <p className="text-dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry's standard dummy text ever since.
              </p>
              <h3>
                <strong>Jonathan Adrus</strong>
              </h3>
              <h6>
                <strong style={{ color: "#F75D08" }}>Event Manager</strong>
              </h6>
            </div>
          </div>
          <div className="col-3">
            <img
              style={{ width: "18rem" }}
              src="https://charity.w3itexperts.com/images/testimonials/pic1.jpg"
              alt="img"
            />
          </div>
          <div className="row col-3">
            <div className="col pl-0">
              <p className="text-dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry has been the industry's standard dummy text ever since.
              </p>
              <h3>
                <strong>Jonathan Adrus</strong>
              </h3>
              <h6>
                <strong style={{ color: "#F75D08" }}>Event Manager</strong>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
