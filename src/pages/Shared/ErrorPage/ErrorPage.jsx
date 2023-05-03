import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../../assets/image/404.jpg";
const ErrorPage = () => {
  return (
    <div>
      <Container fluid className="mt-5">
        <Row className="justify-content-center align-items-center vh-100">
          <Col sm={12} md={6} className="text-center">
            <div style={{height:"20em",width:"20em"}} className="mx-auto">
              <Image src={error} className="rounded-5" alt="error illustration" fluid />
            </div>

            <h1 className="mt-5 main-font-family display-4 fw-semibold project-color-two">Oops! Something went wrong.</h1>
            <Link to={`/`}>
              <button className="py-3 px-4 border border-0 rounded project-color-one fw-semibold text-font-family project-bg-color-three mt-5">
                Back to Home
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorPage;
