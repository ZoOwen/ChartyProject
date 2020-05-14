import React from "react";

import CardView from "../components/CardView";
import "../css/Forall.css";
import Jumbotron from "../components/Jumbotron";

function History(props) {
  return (
    <div className="container-fluid wrapper">
      <Jumbotron header="HISTORY" subtitle="lastest Activity" />
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
