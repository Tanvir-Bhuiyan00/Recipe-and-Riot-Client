import React, { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import "@progress/kendo-theme-default/dist/all.css";
import { Row, Button, Card, Col, Container } from "react-bootstrap";

const Blogs = () => {
  const pdfExportComponent = useRef(null);

  const handleDownload = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <Container>
      <h2 className="text-center my-5 display-4 main-font-family">QnA</h2>
      <div style={{ textAlign: "end" }} className="mb-4 mt-3">
        <Button
          onClick={handleDownload}
          className="text-font-family project-color-one project-bg-color-three  border border-0 px-4  fw-semibold"
        >
          Download Blogs
        </Button>
      </div>
      <PDFExport
        paperSize="A4"
        margin="2cm"
        fileName="blogs.pdf"
        ref={pdfExportComponent}
      >
        <Row xs={1} md={2} className="g-4 ">
          <Col>
            <Card className="project-bg-color-one border border-0 shadow p-3">
              <Card.Body className="my-4">
                <Card.Title
                  style={{ height: "70px" }}
                  className="text-font-family project-color-three fw-semibold fs-5"
                >
                  1. Tell us the differences between uncontrolled and controlled
                  components?
                </Card.Title>

                <Card.Text
                  style={{ letterSpacing: "1px", height: "230px" }}
                  className="text-font-family project-color-two fw-semibold mt-3 mb-5"
                >
                  Ans. In controlled components, the state is managed by React
                  and is passed to the component through props, while in
                  uncontrolled components, the state is managed by the DOM, and
                  the values are retrieved using useRefs. Controlled components
                  provide more control over the user interface, while
                  uncontrolled components are simpler to set up.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-bg-color-one border border-0 shadow p-3">
              <Card.Body className="my-4">
                <Card.Title
                  style={{ height: "70px" }}
                  className="text-font-family project-color-three fw-semibold fs-5"
                >
                  2. How to validate React props using PropTypes?
                </Card.Title>

                <Card.Text
                  style={{ letterSpacing: "1px", height: "230px" }}
                  className="text-font-family project-color-two fw-semibold mt-3 mb-5"
                >
                  Ans. React PropTypes is a way to validate the type of props
                  passed to a component. It's used to catch errors early and
                  ensure the correct data is passed. Developers can import
                  PropTypes from 'prop-types' and define the propTypes object as
                  a static property of the component class. PropTypes provides a
                  set of validators for data types, such as string, number,
                  array, and object.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-bg-color-one border border-0 shadow p-3">
              <Card.Body className="my-4">
                <Card.Title
                  style={{ height: "70px" }}
                  className="text-font-family project-color-three fw-semibold fs-5"
                >
                  3. Tell us the difference between nodejs and express js.?
                </Card.Title>

                <Card.Text
                  style={{ letterSpacing: "1px", height: "230px" }}
                  className="text-font-family project-color-two fw-semibold mt-3 mb-5"
                >
                  Ans. Node.js is a JavaScript runtime environment that executes
                  code outside the browser, while Express.js is a framework
                  built on top of Node.js that provides additional functionality
                  for building web applications, such as routing and middleware.
                  In other words, Node.js is the platform that runs the
                  JavaScript code, while Express.js is a framework that provides
                  a set of tools and features to build web applications on top
                  of Node.js.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-bg-color-one border border-0 shadow p-3">
              <Card.Body className="my-4">
                <Card.Title
                  style={{ height: "70px" }}
                  className="text-font-family project-color-three fw-semibold fs-5"
                >
                  4. What is a custom hook, and why will you create a custom
                  hook?
                </Card.Title>

                <Card.Text
                  style={{ letterSpacing: "1px", height: "230px" }}
                  className="text-font-family project-color-two fw-semibold mt-3 mb-5"
                >
                  Ans. A custom hook is a function that you can create in React
                  to reuse stateful logic across multiple components. Custom
                  hooks can be created for a variety of reasons, such as
                  handling network requests, managing state, or performing
                  computations. By creating custom hooks, you can make your code
                  more modular, reduce code duplication, and improve its overall
                  maintainability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </PDFExport>
    </Container>
  );
};

export default Blogs;
