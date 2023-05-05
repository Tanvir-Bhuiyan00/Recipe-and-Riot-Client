import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="pb-5">
      <Row className="justify-content-md-center mt-5 pt-5">
        <Col md={8}>
          <h1 className="text-center mb-4 main-font-family project-color-two display-4 fw-medium">
            About
          </h1>
          <div className="pt-5">
            <p className="text-font-family fs-5 project-color-two  fw-medium text-center lh-5 mb-4">
              Welcome to our website! Our goal is to provide you with the best
              possible user experience, whether you're browsing on a desktop
              computer, tablet, or smartphone.
            </p>
            <p className="text-font-family fs-5 project-color-two  fw-medium text-center lh-5 mb-4">
              Our website is dedicated to Making Food Delicious. We believe that
              by doing that we can do something good for humanity. We strive to
              create a community where food is delicious.
            </p>
            <p className="text-font-family fs-5 project-color-two  fw-medium text-center lh-5 mb-4">
              We've designed our website with user experience in mind. Our clean
              and modern design ensures that you can easily find what you're
              looking for. Our website is also mobile responsive, so you can
              browse on the go and never miss a beat.
            </p>
            <p className="text-font-family fs-5 project-color-two  fw-medium text-center lh-5 mb-4">
              We're passionate about what we do, and we hope that our website
              reflects that. If you have any questions or comments, please don't
              hesitate to reach out to us in Recipe&Riot@example.com. We
              appreciate your support and look forward to serving you.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
