import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { SiIfood } from "react-icons/si";
import { HiHandThumbUp } from "react-icons/hi2";

const ViewRecipes = () => {
  const recipeDetails = useLoaderData();
  const {
    bio_description,
    chef_name,
    chef_picture,
    experience,
    likes,
    recipes,
  } = recipeDetails;

  return (
    <div className="project-bg-color-two">
      <Container className="py-5">
        <Row className="py-5">
          <Col md={6}>
            <Image
              src={chef_picture[1]}
              rounded
              className="w-100 mb-4 mb-md-0"
            />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2
                style={{ letterSpacing: "2px" }}
                className="mb-0 main-font-family project-color-one fs-1 fw-semibold"
              >
                {chef_name}
              </h2>
              <p className="lead text-muted text-font-family fw-semibold mt-3">
                {bio_description}
              </p>
              <p className="mb-0 project-color-one text-font-family fw-medium ">
                <strong style={{ letterSpacing: "2px" }}>Experience:</strong>{" "}
                {experience} years
              </p>
              <div className="d-flex justify-content-between mt-3 align-items-center">
                <p className="mb-0 project-color-one text-font-family">
                  <SiIfood className="project-color-three me-2"></SiIfood>{" "}
                  {recipes.recipes_number}{" "}
                  <strong style={{ letterSpacing: "2px" }}>Recipes</strong>
                </p>
                <p className="mb-0 project-color-one text-font-family">
                  <HiHandThumbUp className="project-color-three me-2"></HiHandThumbUp>{" "}
                  {likes}{" "}
                  <strong style={{ letterSpacing: "2px" }}>Likes</strong>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ViewRecipes;
