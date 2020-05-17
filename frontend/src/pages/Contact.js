import React from "react";
import "../css/Forall.css";
import { Form, Button } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
function Contact() {
  return (
    <div>
      <Jumbotron
        header="Contact Us"
        subtitle="Hubungi kami jika memiliki Pertanyaan"
      />

      <div className="container " style={{ marginTop: "100px" }}>
        <div className="row text-center">
          <div className="col-md-4">
            <p className="text-dark">ADDRESS</p>
            <p className="text-dark">786 Dummy Road</p>
            <p className="text-dark pt-0">City Name</p>
            <p className="text-dark pt-0">Country</p>
          </div>
          <div className="col-md-4">
            <p className="text-dark"> E-MAIL</p>
            <p className="text-dark">example@gmail.com or </p>
            <p className="text-dark pt-0">example@gmail.com</p>
          </div>
          <div className="col-md-4">
            <p className="text-dark">PHONE</p>
            <p className="text-dark">+1 123-456-7890 or </p>
            <p className="text-dark pt-0">+1 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="container ml-0 pl-0 mt-5">
        <div className="row">
          <div className="col">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col">
            <iframe
              title="title"
              width="100%"
              height="400px"
              className="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.051699798315!2d106.81246881414931!3d-6.256920062999904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f17f3a4d6d8b%3A0x1392b5623d84313b!2sImpact%20Byte%20Jakarta!5e0!3m2!1sid!2sid!4v1589259249430!5m2!1sid!2sid"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
