import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className="header container" expand="lg">
      <Navbar.Brand href="#">AN - GYM</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mx-auto align-items-lg-center">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#AboutUs">About Us</Nav.Link>
          <Nav.Link href="#Gallery">Gallery</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <a href="./signin.html" class="btn btn-light mx-2">Login</a>
      <a href="./signup.html" class="btn btn-light">Create account</a>

    </Navbar>
  );
}

export default Header;
