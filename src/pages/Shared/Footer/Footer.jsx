import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ marginTop:"7rem"}} className="project-bg-color-two py-3">
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={6}>
            <h4 className="main-font-family fs-1 fw-medium project-color-one">Recipe & Riot</h4>
            
          </Col>
          <Col xs={12} md={3} className="mt-4 pt-2 mt-md-0">
            <h5 className="main-font-family fs-3 fw-medium project-color-one">Navigation</h5>
            <ul className="list-unstyled">
              <li>
              <Link
              style={{ textDecoration: "none"}}
              className="project-color-one"
              to="/"
            >
              Home
            </Link>
              </li>
              <li>
              <Link
              style={{ textDecoration: "none"}}
              className="project-color-one"
              to="/blogs"
            >
              Blogs
            </Link>
              </li>
              <li>
              <Link
              style={{ textDecoration: "none"}}
              className="project-color-one"
              to="/about"
            >
              About
            </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mt-4 pt-2 mt-md-0">
            <h5 className="main-font-family fs-3 fw-medium project-color-one">Legal</h5>
            <ul className="list-unstyled">
              <li>
              <Link
              style={{ textDecoration: "none"}}
              className="project-color-one"
              to="/login/terms"
            >
              Terms and Conditions
            </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mt-4">
            <p className="text-center text-muted">
              Copyright by © Recipe & Riot in {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
