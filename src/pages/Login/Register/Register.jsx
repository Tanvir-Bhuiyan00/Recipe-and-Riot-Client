import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-center ">
        <Col md={6} sm={10}>
          <h2 className="text-center mb-4 main-font-family project-color-two display-4 fw-medium">
            Please Register
          </h2>
          <Form onSubmit={handleRegister} className="mt-5">
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

            <Form.Group className="mt-3" controlId="formBasicPhoto">
              <Form.Label
                style={{ letterSpacing: "1px" }}
                className="text-font-family fs-5 fw-semibold "
              >
                Photo Url
              </Form.Label>
              <Form.Control
                type="text"
                name="photoURL"
                placeholder="Enter Photo Url"
                required
              />
            </Form.Group>
            <Form.Group className="mt-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={handleAccepted}
                type="checkbox"
                name="accept"
                label={
                  <>
                    Accept{" "}
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/login/terms"
                      className="fw-semibold project-color-three"
                    >
                      Terms and Conditions
                    </Link>
                  </>
                }
              />
            </Form.Group>

            <Button
              disabled={!accepted}
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
