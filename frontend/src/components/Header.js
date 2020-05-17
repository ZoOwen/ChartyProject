import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";
import { Navbar, Nav, Button, Modal, Form } from "react-bootstrap";

function Header(props) {
  var querystring = require("querystring");
  const [Img, setImg] = useState("");
  const [judulEvent, setJudulEvent] = useState("");
  const [deskripsiEvent, setDeskripsiEvent] = useState("");
  const [Expire, setExpire] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChangeImg = (e) => {
    setImg(e.target.value);
  };
  const handleChangeJudul = (e) => {
    setJudulEvent(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setDeskripsiEvent(e.target.value);
  };

  const handleChangeExpire = (e) => {
    setExpire(e.target.value);
  };

  const handlePostEvent = (e) => {
    window.location.reload();

    const idUser = 1;
    const img = Img;
    const name = judulEvent;
    const deskripsi = deskripsiEvent;
    const event_type = 2;
    const tanggal = Date.now();
    const expire = Expire;
    const total_donasi = 200000;
    const status = 2;
    const success = Axios.post(
      `https://gobekenapi.herokuapp.com/events`,
      querystring.stringify({
        idUser,
        img,
        name,
        deskripsi,
        event_type,
        tanggal,
        expire,
        total_donasi,
        status,
      })
    ).then((response) => {
      console.log(response.data);
    });

    {
      success
        ? swal("Terimakasih", "Buat Event Berhasil!", "success")
        : swal("Gagal", "Harap Buat ulang", "error");
    }
    setShow(false);
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="py-3">
        <Navbar.Brand href="#">
          <img
            src="https://charity.w3itexperts.com/images/logo.png"
            alt="img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link
              href="#"
              className="mx-2"
              onClick={() => props.history.push("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mx-2"
              onClick={() => props.history.push("/events")}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mx-2"
              onClick={() => props.history.push("/history")}
            >
              History
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mx-2"
              onClick={() => props.history.push("/about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#"
              className="mx-2"
              onClick={() => props.history.push("/contact")}
            >
              Contact Us
            </Nav.Link>
            {/* <Button
              variant="dark"
              className="ml-5 mr-1"
              onClick={() => props.history.push("/login")}
            >
              Login
            </Button> */}
            <Button
              onClick={handleShow}
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mx-5"
            >
              New Event
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* modal event */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Buat Event Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="my-0">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Upload Image :</Form.Label>
              <Form.Control
                type="file"
                name="Img"
                placeholder="Upload gambar"
                value={Img}
                onChange={handleChangeImg}
              />
              <Form.Label>Judul Event :</Form.Label>
              <Form.Control
                name="judul_event"
                placeholder="Judul Event"
                value={judulEvent}
                onChange={handleChangeJudul}
              />
            </Form.Group>
            <Form.Label>Deskripsi Event :</Form.Label>
            <textarea
              className="form-control"
              name="deskripsi_event"
              placeholder="Deskripsi Event"
              value={deskripsiEvent}
              onChange={handleChangeDesc}
            />

            <Button
              type="submit"
              onClick={handlePostEvent}
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="my-5"
            >
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default withRouter(Header);
