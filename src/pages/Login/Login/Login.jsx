import React, { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <Container className="mt-5">
      <Row className="justify-content-center ">
        <Col md={6} sm={10}>
          <h2 className="text-center mb-4 main-font-family project-color-two display-4 fw-medium">
            Please Login
          </h2>
          <Form onSubmit={handleLogin} className="mt-5">
            <Form.Group controlId="formBasicEmail">
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

            <Button
              className="text-font-family project-color-one mt-4 mb-5 fw-semibold project-bg-color-two border border-0 px-4"
              variant="primary"
              type="submit"
              block
            >
              Login
            </Button>
          </Form>
          <hr className="w-50 mx-auto project-color-two " />
          <div className="mt-4 mb-4 text-center">
            Don't have an account?{" "}
            <Link
              to="/login/register"
              style={{ textDecoration: "none" }}
              className="fw-semibold project-color-three"
            >
              Register Here
            </Link>
          </div>
          <div className="text-center">
            <p className="my-3">Or login with:</p>
            <Button variant="outline-primary" className="m-2">
              <FaGoogle />
              &nbsp;Google Sign-in
            </Button>
            <Button variant="outline-dark" className="m-2">
              <FaGithub />
              &nbsp;GitHub Sign-in
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
