import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{height:"20rem", marginTop:"7rem"}} className="project-bg-color-two py-3">
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={4}>
            <h4>Brand Name</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col xs={12} md={2} className="mt-4 mt-md-0">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} className="mt-4 mt-md-0">
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col className="mt-4">
            <p className="text-center text-muted">
              Copyright © {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
