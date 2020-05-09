import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <div>
      <div
        className=" container-fluid  wrapper"
        style={{ background: "#363636" }}
      >
        <br />
        <div className="row">
          <div className="col-md-3">
            <img
              src="https://charity.w3itexperts.com/images/logo.png"
              alt="img"
            />
            <p className="fcontent">
              Charity Lorem Ipsum is dummy text ever since the been when an
              unknown printer. simply dummy text of the printing and typesetting
              industry has been the industry Lorem Ipsum is dummy text ever
              since the been when an unknown printer. simply dummy text of the
              printing and typesetting industry has been the industry
            </p>
            <p className="fcontent">
              Charity Lorem Ipsum is dummy text ever since the been when an
              unknown printer. simply dummy text of the printing and typesetting
              industry has been the industry Lorem Ipsum is dummy text ever
              since the been when an unknown printer. simply dummy text of the
              printing and typesetting industry has been the industry
            </p>
          </div>
          <div className="col-md-3">
            <br />
            <br />
            <h2>Our Services</h2>
            <hr />
            <p>Food Services</p>
            <p>Clear Water</p>
            <p>Education</p>
            <p>Donation</p>
          </div>
          <div className="col-md-3">
            <br />
            <br />
            <h2>Contact Info</h2>
            <hr />
            <p>Address: - 786 Dummy Road, City Name, Country</p>

            <p>Phone: - +1 123-456-7890 or +1 123-456-7890</p>

            <p>E-mail: - example@gmail.com example@gmail.com</p>
          </div>
          <div className="col-md-3">
            <br />
            <br />
            <br />
            <br />
            <h2>Social Link</h2>
          </div>
        </div>

        <br />
      </div>
      <div
        className=" wrapper"
        style={{ background: "#F75D08", marginTop: "-5px" }}
      >
        &nbsp; &nbsp; &nbsp;
        <p className="copyright">Reserved CopyRight 2020 Charity</p>
        &nbsp;
      </div>
    </div>
  );
}

export default Footer;
