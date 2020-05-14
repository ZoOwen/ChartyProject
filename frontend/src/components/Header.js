import React from "react";
import { withRouter } from "react-router-dom";

import { Navbar, Nav, Button } from "react-bootstrap";

function Header(props) {
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
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mx-5"
            >
              Donate Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Header);
