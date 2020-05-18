import React from "react";
import CardView from "../components/CardView";
// import "../css/Forall.css";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
function History(props) {
  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Jumbotron
        header="Riwayat"
        subtitle="Acara Galang dana yang sudah selesai"
      />
      <br />
      <br />
      <div className="col text-center ">
        <h2>
          <strong className="text-dark">
            Riwayat <span style={{ color: "#F75D08" }}>Acara</span>
          </strong>
        </h2>
      </div>

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
