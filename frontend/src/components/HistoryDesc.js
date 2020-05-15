import React, { useState, useEffect } from "react";
import "../css/Desc.css";
import Jumbotron from "./Jumbotron";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Payment from "./Payment.js";

function HistoryDesc(props) {
  useEffect(() => {
    axios
      .get(`https://5e9f0a2711b078001679c0a2.mockapi.io/main_event/${param}`)
      .then((result) => {
        setEvents(result.data);
      });
  }, []);

  const fetchApi = useEffect(() => {
    axios
      .get(`https://5e9f0a2711b078001679c0a2.mockapi.io/main_event_detail`)
      .then((result) => {
        setDetEvents(result.data);
      });
  }, []);

  const [events, setEvents] = useState([]);
  const [detEvents, setDetEvents] = useState([]);
  const [handleData, setHandleData] = useState({});
  const [singleDetEvent, setSingleDetEvent] = useState([]);
  const param = props.match.params.id;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    var dataFirst = detEvents.filter(function (det) {
      return det.id == index;
    });
    var obj = Object.assign({}, dataFirst[0]);
    setHandleData(obj);
    setShow(true);
  };

  const handleBayar = (item) => {
    console.log(singleDetEvent);
    console.log(handleData.donatur);

    console.log("isinya id", handleData.id.toString());
    setShow(false);
  };
  var stringid = handleData.id;

  console.log("string yang sudah di id", stringid);
  useEffect(() => {
    axios
      .get(
        `https://5e9f0a2711b078001679c0a2.mockapi.io/main_event_detail/${stringid}`
      )
      .then((result) => {
        setSingleDetEvent(result.data);
      });
  }, []);

  //filter untuk mendapatkan berdasarkan id_event
  var datafilter = detEvents.filter(function (eventdet) {
    return eventdet.id_event == param;
  });

  //filter untuk mendapatkan 1 data

  return (
    <div className="container-fluid">
      <Jumbotron header="History Detail" />
      <br />
      <div className="container">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <td>No Events </td>
              <td> : </td>
              <td> {events.id}</td>
            </tr>

            <tr>
              <td>Nama Events</td>
              <td> : </td>
              <td> {events.name}</td>
            </tr>

            <tr>
              <td>Events Type</td>
              <td> : </td>
              <td> {events.even_type}</td>
            </tr>

            <tr>
              <td>Total Donasi</td>
              <td> : </td>
              <td> {events.total_donasi}</td>
            </tr>
          </thead>
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
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>

          {datafilter.map((item, index) => (
            <tbody key={index}>
              <tr key={index}>
                <td>{index}</td>
                <td>{item.donatur}</td>
                <td>{item.dana_donasi}</td>
                <td>{item.tgl_donasi}</td>
                <td>{item.sts.toString()}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    key={index}
                    variant="primary"
                    onClick={() => {
                      handleShow(item.id);
                    }}
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
          <Payment name={handleData.donatur} total={handleData.dana_donasi} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleBayar(handleData.id);
            }}
          >
            Bayar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default withRouter(HistoryDesc);
