import React from "react";
import CardView from "../components/CardView";
// import "../css/Forall.css";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
function History(props) {
  return (
    <div>
      <div className=" bgimage">
        <div className="box">
          <h1 className="titlebanner">History</h1>
          <h3 style={{ color: "#fff", marginLeft: "20px" }}>Event History</h3>
        </div>
      </div>
      <br />
      <br />
      <h1>Our History</h1>

      <br />
      <br />
      <CardView />

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default History;
