import React from "react";
import CardView from "../components/CardView";
import "../css/Forall.css";
function History(props) {
  return (
    <div className="container-fluid wrapper">
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
    </div>
  );
}

export default History;
