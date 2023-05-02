import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FaFireAlt } from "react-icons/fa";

const Post = ({ post }) => {
  const { food_name, image_url, post_title, user_img, user_name, viewers } =
    post;
  return (
    <Col className="mb-4">
      <Card className="h-100 project-bg-color-one shadow border border-0 position-relative">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Text className="text-center text-font-family position-absolute top-0 start-50 translate-middle">
            <Button style={{letterSpacing:"2px"}} className="project-bg-color-three project-color-one border border-0 px-4 fw-semibold">{food_name}</Button>
          </Card.Text>
          <Card.Title className="text-center main-font-family fs-4 fw-medium">
            {post_title}
          </Card.Title>
        </Card.Body>
        <Card.Footer
          style={{ borderTopColor: "#2d2119" }}
          className="d-flex justify-content-between text-font-family fw-semibold project-color-two"
        >
          <small className="text-muted">
            <img
              src={user_img}
              alt={user_name}
              height="20"
              width="20"
              className="rounded-circle me-2"
            />
            {user_name}
          </small>
          <small className="text-muted">
            <p>
              <FaFireAlt
                className="project-color-three "
                style={{ height: "20px", width: "20px" }}
              ></FaFireAlt>{" "}
              {viewers} Views
            </p>
          </small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
