import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center ">
        <Col md={6} sm={10}>
          <h2 className="text-center mb-4 main-font-family project-color-two display-4 fw-medium">
            Please Register
          </h2>
          <Form className="mt-5">
            <Form.Group controlId="formBasicName">
              <Form.Label
                style={{ letterSpacing: "1px" }}
                className="text-font-family fs-5 fw-semibold "
              >
                Your Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicEmail">
              <Form.Label
                style={{ letterSpacing: "1px" }}
                className="text-font-family fs-5 fw-semibold "
              >
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicPassword">
              <Form.Label
                style={{ letterSpacing: "1px" }}
                className="text-font-family fs-5 fw-semibold "
              >
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicEmail">
              <Form.Label
                style={{ letterSpacing: "1px" }}
                className="text-font-family fs-5 fw-semibold "
              >
                Photo Url
              </Form.Label>
              <Form.Control
                type="text"
                name="photo"
                placeholder="Enter Photo Url"
                required
              />
            </Form.Group>

            <Button
              className="text-font-family project-color-one mt-4 mb-5 fw-semibold project-bg-color-two border border-0 px-4"
              variant="primary"
              type="submit"
              block
            >
              Register
            </Button>
          </Form>

          <div className="mt-4 mb-4 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="fw-semibold project-color-three"
            >
              Login Here
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
