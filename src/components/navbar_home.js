import React from "react";
import logo from "../assets/img/maria-teneva-OCXL4DP3yYw-unsplash.jpg";
import { Navbar, Container } from "react-bootstrap";

export default function navbar_home() {
  return (
    <>
      <Navbar sticky="top" className="navbar">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} width="40" height="40" alt="React Bootstrap logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ color: "white" }}>
              Personal Websites!
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
