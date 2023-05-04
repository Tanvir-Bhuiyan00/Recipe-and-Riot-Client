import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { HiHandThumbUp } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ChefDetails = ({ chef }) => {
  const { id, chef_picture, chef_name, experience, recipes, likes } = chef;

  return (
    <Col>
      <Card
        className="mb-3 project-bg-color-one shadow border border-0 h-100"
        style={{ maxWidth: "540px" }}
      >
        <Row className="row g-0 h-100">
          <div className="col-md-4">
            <img
              src={chef_picture[0]}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body mt-3">
              <h5
                style={{ letterSpacing: "2px" }}
                className="card-title main-font-family fs-4 fw-semibold project-color-two"
              >
                {chef_name}
              </h5>
              <div>
                <p className="project-color-two text-font-family">
                  <span className="project-color-two fw-semibold">
                    Experience:
                  </span>{" "}
                  {experience}
                </p>
                <p className="project-color-two text-font-family">
                  <span className="project-color-two fw-semibold">
                    Recipe Number:
                  </span>{" "}
                  {recipes.recipes_number}
                </p>
              </div>
              <div>
                <p className="project-color-two text-font-family d-flex justify-content-between align-items-center">
                  <small className="text-body-secondary d-flex align-items-center">
                    <HiHandThumbUp
                      style={{ width: "20px", height: "20px" }}
                      className="project-color-three"
                    ></HiHandThumbUp>{" "}
                    <span className="fs-6 ms-1 fw-semibold">
                      {" "}
                      {likes} Likes
                    </span>
                  </small>
                  <small>
                    <Link to={`/chef/${id}`}>
                      <Button  className="project-bg-color-three border border-0 project-color-one fw-semibold">
                        View Recipes
                      </Button>
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </Row>
      </Card>
    </Col>
  );
};

export default ChefDetails;
