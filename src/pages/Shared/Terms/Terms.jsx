import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Terms = () => {
  return (
    <Container className="mt-5 project-color-two text-font-family">
      <Row>
        <Col>
          <h1 className="display-4 fw-semibold">Terms and Conditions</h1>
          <p className="fs-5 mt-4 fw-medium">
            By using this website, you agree to be bound by these terms and
            conditions. If you do not agree with any of these terms and
            conditions, you should not use this website.
          </p>
          <h2 className="display-4 fw-semibold">Intellectual Property</h2>
          <p className="fs-5 mt-4 fw-medium">
            All content on this website, including but not limited to text,
            graphics, logos, images, and software, is the property of our
            company or its licensors and is protected by copyright and other
            intellectual property laws. You may not reproduce, modify,
            distribute, or display any of this content without our prior written
            consent.
          </p>
          <h2 className="display-4 fw-semibold">Disclaimer</h2>
          <p className="fs-5 mt-4 fw-medium">
            The information contained on this website is for general information
            purposes only. We make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability,
            suitability, or availability with respect to the website or the
            information, products, services, or related graphics contained on
            the website for any purpose. Any reliance you place on such
            information is therefore strictly at your own risk.
          </p>
          <h2 className="display-4 fw-semibold">Limitation of Liability</h2>
          <p className="fs-5 mt-4 fw-medium">
            In no event will we be liable for any loss or damage including
            without limitation, indirect or consequential loss or damage, or any
            loss or damage whatsoever arising from loss of data or profits
            arising out of, or in connection with, the use of this website.
          </p>
          <h2 className="display-4 fw-semibold">Modification of Terms and Conditions</h2>
          <p className="fs-5 mt-4 fw-medium">
            We reserve the right to modify these terms and conditions at any
            time without prior notice. By continuing to use this website after
            any changes have been made, you are agreeing to be bound by the
            modified terms and conditions.
          </p>
          <h2 className="display-4 fw-semibold">Governing Law</h2>
          <p className="fs-5 mt-4 fw-medium">
            These terms and conditions are governed by and construed in
            accordance with the laws of My Country. Any
            disputes arising out of or in connection with these terms and
            conditions shall be subject to the exclusive jurisdiction of the
            courts of My Country.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Terms;
