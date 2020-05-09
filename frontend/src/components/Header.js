import React from "react";

import { Navbar, Nav, Button } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="py-4">
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
            <Nav.Link href="#" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="mx-2">
              Events
            </Nav.Link>
            <Nav.Link href="#" className="mx-2">
              History
            </Nav.Link>
            <Nav.Link href="#" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link href="#" className="mx-2">
              Contact Us
            </Nav.Link>
            <Button variant="dark" className="ml-5 mr-1">
              Login
            </Button>
            <Button
              style={{ backgroundColor: "#F75D08", border: "none" }}
              className="mr-5"
            >
              Donate Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
