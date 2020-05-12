import React from "react";
import "../css/Forall.css";
import { Form, Button } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
function Contact() {
  return (
    <div className="container-fluid">
      <Jumbotron
        header="Contact Us"
        subtitle="Hubungi kami jika memiliki Pertanyaan"
      />

      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-4">
            <p>ADDRESS</p>
            <p>786 Dummy Road</p>
            <p>City Name</p>
            <p>Country</p>
          </div>
          <div className="col-md-4">
            <p> E-MAIL</p>
            <p>example@gmail.com or </p>
            <p>example@gmail.com</p>
          </div>
          <div className="col-md-4">
            <p>PHONE</p>
            <p>+1 123-456-7890 or </p>
            <p>+1 123-456-7890</p>
          </div>
        </div>
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-md-6">
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
            <div className="col-md-6">
              <iframe
                width="100%"
                height="350px"
                className="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143322.1634582701!2d-4.372542450038334!3d55.85557336217109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20Britania%20Raya!5e0!3m2!1sid!2sid!4v1586574593855!5m2!1sid!2sid"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
