import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand className="main-font-family fs-1 fw-medium project-color-two" href="#home">Recipe & Riot</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-font-family fs-5 fw-medium">
            <Nav.Link className="project-color-two" href="#features">Home</Nav.Link>
            <Nav.Link className="project-color-two" href="#pricing">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">
              <Image style={{ height: "40px" }} src="/vite.svg" roundedCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
