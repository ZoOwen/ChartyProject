import React, { useState, useEffect } from "react";
import "../css/Desc.css";
import Jumbotron from "./Jumbotron";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Payment from "./Payment.js";

function HistoryDesc(props) {
  console.log("props", props);
  const [events, setEvents] = useState([]);
  const [detEvents, setDetEvents] = useState([]);
  const param = props.match.params.id;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("params", param);
  useEffect(() => {
    axios
      .get(`https://5e9f0a2711b078001679c0a2.mockapi.io/main_event/${param}`)
      .then((result) => {
        setEvents(result.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://5e9f0a2711b078001679c0a2.mockapi.io/main_event_detail`)
      .then((result) => {
        setDetEvents(result.data);
      });
  }, []);

  //filter untuk mendapatkan berdasarkan id_event
  var datafilter = detEvents.filter(function (eventdet) {
    return eventdet.id_event == param;
  });

  //filter untuk mendapatkan 1 data
  var dataFirst = detEvents.filter(function (det) {
    return det.id == param;
  });

  console.log("data dari hasil first", dataFirst[0]);
  // console.log("data dari hasil first", c);

  // console.log("data dari hasil first yang gk pake index", d);

  console.log("data filter", datafilter);
  console.log("events", events);
  return (
    <div className="container-fluid">
      <Jumbotron header="History Detail" />
      <br />
      <div className="container">
        <table style={{ width: "100%" }}>
          <div class="row">
            <div class="col-md-6">
              <tr>
                <td>No Events </td>
                <td> : </td>
                <td> {events.id}</td>
              </tr>
            </div>
            <div class="col-md-6">
              <tr>
                <td>Nama Events</td>
                <td> : </td>
                <td> {events.name}</td>
              </tr>
            </div>
            <div class="col-md-6">
              <tr>
                <td>Events Type</td>
                <td> : </td>
                <td> {events.even_type}</td>
              </tr>
            </div>
            <div class="col-md-6">
              <tr>
                <td>Total Donasi</td>
                <td> : </td>
                <td> {events.total_donasi}</td>
              </tr>
            </div>
          </div>
        </table>
      </div>
      <div className="container">
        <br />
        <hr />
        <br />
        <table className="table table-striped">
          <thead>
            <tr>
              <td>No</td>
              <td>Donatur Name</td>
              <td>total Donate</td>
              <td>date</td>
              <td>Action</td>
            </tr>
          </thead>

          {datafilter.map((item, index) => (
            <tbody>
              <tr key={index}>
                <td>{index}</td>
                <td>{item.donatur}</td>
                <td>{item.dana_donasi}</td>
                <td>{item.tgl_donasi}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    key={index}
                    variant="primary"
                    onClick={handleShow}
                  >
                    PayBack
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Payback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Payment />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Bayar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default withRouter(HistoryDesc);
