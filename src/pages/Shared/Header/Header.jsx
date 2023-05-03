import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="project-bg-color-two " collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand>
          <Link
            style={{ textDecoration: "none" }}
            className="main-font-family fs-1 fw-medium project-color-three"
            to="/"
          >
            Recipe & Riot
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-font-family fs-5 fw-medium">
            <Link
              style={{ textDecoration: "none"}}
              className="project-color-three ms-3"
              to="/"
            >
              Home
            </Link>
            <Link
              style={{ textDecoration: "none"}}
              className="project-color-three ms-3"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              style={{ textDecoration: "none"}}
              className="project-color-three ms-3"
              to="/about"
            >
              About
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing" className="ms-3">
              <Image style={{ height: "40px" }} src="/vite.svg" roundedCircle />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
