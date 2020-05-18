import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { Redirect } from "react-router-dom";
import swal from "sweetalert";
import Aos from "aos";
import "aos/dist/aos.css";
import Axios from "axios";

import { Button, Modal, Form } from "react-bootstrap";

import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getDataEvent } from "../Redux/Actions/HistoryActions";

const Events = () => {
  var querystring = require("querystring");
  const [singleEvent, setSingleEvent] = useState([]);
  const eventState = useSelector((state) => state.getEvent.data);
  const dispatch = useDispatch();

  const [donasi, setDonasi] = useState(0);
  const [metode, setMetode] = useState();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  //getdata user
  //getdata from localstorage dan get user
  const isLogged = useSelector((state) => state.user);
  console.log("Logged", isLogged);

  let decode = jwt(localStorage.getItem("token"));
  let id = decode.id;
  let token = localStorage.getItem("token");
  console.log(token);
  console.log("hasil decode", decode);
  console.log("hasil ID decode", id);
  const [dataUser, setDataUser] = useState([]);
  var api = `https://backend-go-charity.herokuapp.com/users/${id}`;

  useEffect(() => {
    Axios.get(api, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((response) => {
      setDataUser(response.data);
    });
  }, []);
  console.log("data user yang di get", dataUser.Name);

  const handleShowEvent = (id) => {
    Axios.get(
      `https://5e9f0a2711b078001679c0a2.mockapi.io/main_event/${id}`
    ).then((response) => {
      setSingleEvent(response.data);
    });
    console.log("data id yang dikirim", id);

    setShow(true);
  };
  const handlePost = (e) => {
    e.preventDefault();
    const id_event = singleEvent.id;
    const donatur = dataUser.Name;
    const dana_donasi = donasi;
    const metode_donasi = metode;
    const date = Date.now();

    const success = Axios.post(
      `https://gobekenapi.herokuapp.com/donasi`,
      querystring.stringify({
        id_event,
        donatur,
        dana_donasi,
        metode_donasi,
        date,
      })
    ).then((response) => {
      console.log(response.data);
    });

    {
      success
        ? swal("Terimakasih", "Donasi Berhasil!", "success")
        : swal("Donasi Gagal", "Harap melakukan Donasi ulang", "error");
    }
    setShow(false);
  };
  console.log("data singleEvent", singleEvent);
  const handleClose = () => setShow(false);

  const handleChangeDonasi = (e) => {
    setDonasi(e.target.value);
  };

  const handleChangeMetode = (e) => {
    setMetode(e.target.value);
  };

  useEffect(() => {
    dispatch(getDataEvent());
    Aos.init({ duration: 2000 });
  }, [dispatch]);
  console.log("METODE", metode);
  return (
    <div>
      <div className="countainer-fluid">
        <Jumbotron header="EVENTS" />
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col text-center ">
            <h2>
              <strong className="text-dark">
                Our <span style={{ color: "#F75D08" }}>Events</span>
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
      {eventState.map((item) => {
        console.log(item);
        return (
          <div
            data-aos="fade-right"
            className="container my-5 border cart-event"
            key={item.id}
          >
            <div className="row">
              <div className="col-sm-12 col-lg-8 col-xl-6">
                <img
                  className="img-event pl-0"
                  src="https://cdn.thelifeyoucansave.org/uploads/2019/11/Screen-Shot-2015-07-13-at-1.53.34-PM.png"
                  alt="img"
                />
              </div>
              <div className="col">
                <h3>
                  <strong>{item.JudulEvent}</strong>
                </h3>
                <p className="text-dark pr-3">{item.DeskripsiEvent}</p>
                <div className="row">
                  <div className="col-8">
                    <h3>
                      <strong>Biaya Yang Terkumpul : {item.TotalDonasi}</strong>
                    </h3>
                    <p className="text-dark pr-3">
                      Event Expire : {item.Expire}
                    </p>
                  </div>
                  <div className="col text-align-right">
                    <h3>
                      <strong>{item.total_donasi}</strong>
                    </h3>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    handleShowEvent(item.Id);
                  }}
                  style={{
                    backgroundColor: "#F75D08",
                    border: "none",
                  }}
                  className="my-5"
                >
                  Donate This Event
                </Button>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" value={singleEvent.id} />

          <Form className="my-0">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Donasi Berapa:</Form.Label>
              <Form.Control
                type="number"
                name="donasi"
                value={donasi}
                placeholder="IDR."
                onChange={handleChangeDonasi}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Metode Pembayaran:</Form.Label>
              <select
                name="metode"
                value={metode}
                onChange={handleChangeMetode}
                as="select"
              >
                <option value="BCA">BCA</option>
                <option value="BRI">BRI</option>
                <option value="Mandiri">Mandiri</option>
                <option value="Gopay">Gopay</option>
                <option value="OVO">OVO</option>
              </select>
            </Form.Group>
            <Button
              type="submit"
              onClick={handlePost}
              style={{
                backgroundColor: "#F75D08",
                border: "none",
              }}
              className="my-5"
            >
              Donate Now
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Events;
