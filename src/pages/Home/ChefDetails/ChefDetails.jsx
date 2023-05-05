import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { HiHandThumbUp } from "react-icons/hi2";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
const ChefDetails = ({ chef }) => {
  const { id, chef_picture, chef_name, experience, recipes, likes } = chef;

  return (
    <Col>
      <Card
        className="mb-3 project-bg-color-one shadow border border-0 h-100"
        style={{ maxWidth: "540px" }}
      >
        {/* Added lazy Loader  */}
        <LazyLoad height={365} offset={100}>
          <Card.Img
            variant="top"
            className="img-fluid rounded-top"
            src={chef_picture[0]}
            style={{ opacity: 0 }}
            onLoad={(e) => {
              e.target.style.opacity = 1;
            }}
          />
        </LazyLoad>
        <Card.Body className="d-flex flex-column justify-content-between ">
          <div>
            <Card.Title
              style={{ letterSpacing: "2px" }}
              className="card-title main-font-family fs-4 fw-bold project-color-three"
            >
              {chef_name}
            </Card.Title>
            <Card.Text className="project-color-two text-font-family">
              <span className="project-color-two fw-semibold">Experience:</span>{" "}
              {experience}
            </Card.Text>
            <Card.Text className="project-color-two text-font-family">
              <span className="project-color-two fw-semibold">
                Recipe Number:
              </span>{" "}
              {recipes.recipes_number}
            </Card.Text>
          </div>
          <div className="project-color-two text-font-family d-flex justify-content-between align-items-center">
            <Card.Text className="text-body-secondary pt-3 d-flex">
              <HiHandThumbUp
                style={{ width: "20px", height: "20px" }}
                className="project-color-three"
              ></HiHandThumbUp>{" "}
              <span className="fs-6 ms-1 fw-semibold"> {likes} Likes</span>
            </Card.Text>
            <div>
              <Link to={`/chef/${id}`}>
                <Button className="project-bg-color-three border border-0 project-color-one fw-semibold">
                  View Recipes
                </Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefDetails;
