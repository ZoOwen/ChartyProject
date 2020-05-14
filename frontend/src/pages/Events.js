import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Button, Modal, Form } from "react-bootstrap";

import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

import { useSelector, useDispatch } from "react-redux";
import { getDataEvent } from "../Redux/Actions/HistoryActions";

const Events = () => {
  const eventState = useSelector((state) => state.getEvent.data);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    dispatch(getDataEvent());
    Aos.init({ duration: 2000 });
  }, [dispatch]);
  //   console.log(eventState);
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
                  <strong>{item.name}</strong>
                </h3>
                <p className="text-dark">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry has been the industry's standard dummy
                  text ever since. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry has been the industry's
                  standard dummy text ever since.
                </p>
                <div className="row">
                  <div className="col-8">
                    <h3>
                      <strong>Biaya Yang Terkumpul :</strong>
                    </h3>
                  </div>
                  <div className="col text-align-right">
                    <h3>
                      <strong>{item.total_donasi}</strong>
                    </h3>
                  </div>
                </div>
                <Button
                  onClick={handleShow}
                  style={{ backgroundColor: "#F75D08", border: "none" }}
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
          <Form className="my-0">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Donasi Berapa:</Form.Label>
              <Form.Control type="number" placeholder="IDR." />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Melalui E-money:</Form.Label>
              <Form.Control as="select">
                <option>BCA</option>
                <option>BRI</option>
                <option>Mandiri</option>
                <option>Gopay</option>
                <option>Lainnya</option>
              </Form.Control>
            </Form.Group>
            <Button
              type="submit"
              onClick={handleShow}
              style={{ backgroundColor: "#F75D08", border: "none" }}
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
