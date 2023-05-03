import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactStarsRating from "react-awesome-stars-rating";

import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import { Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

const RecipeInfo = ({ recipeCards }) => {
  const [favoriteBtns, setFavoriteBtns] = useState({});

  const handleFavoriteClick = (id) => {
    setFavoriteBtns({ ...favoriteBtns, [id]: true });
    Store.addNotification({
      title: "Favorite Recipe",
      message: "This recipe has been added to your favorites!",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      },
    });
  };

  const isFavorite = (id) => favoriteBtns[id] || false;

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        <Col className="mb-5">
          <Card className="project-bg-color-one h-100 border border-0 shadow">
            <div className="m-4 rounded">
              <Card.Img
                className="rounded"
                variant="top"
                src={recipeCards[0].recipe_img}
              />
            </div>
            <Card.Body className="mx-4">
              <div style={{ height: "100px" }}>
                <Card.Title className="mb-4 main-font-family project-color-two fw-semibold fs-3">
                  {recipeCards[0].recipe_name}
                </Card.Title>
              </div>
              <Card.Text
                style={{ letterSpacing: "0.5px" }}
                className=" fw-semibold"
              >
                <span className="text-font-family project-color-two fw-bold ">
                  Ingredients:{" "}
                </span>
                {recipeCards[0].ingredients.slice(0, 60)}{" "}
                <span className="project-color-three fw-semibold">
                  {" "}
                  Read More...
                </span>
              </Card.Text>
              <Card.Text className="fw-semibold lh-lg">
                <span className="text-font-family project-color-two fw-bold">
                  Cooking Method:{" "}
                </span>
                {recipeCards[0].cooking_method.slice(0, 150)}{" "}
                <span className="project-color-three fw-semibold">
                  {" "}
                  Read More...
                </span>
              </Card.Text>
              <Card.Text className="d-flex justify-content-between">
                <span>
                  <ReactStarsRating value={recipeCards[0].rating} readOnly />
                </span>

                <span>
                  {!isFavorite(recipeCards[0]._id) ? (
                    <button
                      onClick={() => {
                        handleFavoriteClick(recipeCards[0]._id);
                      }}
                      className="p-0 bg-transparent border border-0 "
                    >
                      <MdFavoriteBorder className="fs-3 project-color-three"></MdFavoriteBorder>
                    </button>
                  ) : (
                    <button
                      className="p-0 bg-transparent border border-0"
                      disabled
                    >
                      <MdFavorite className="fs-3 project-color-three"></MdFavorite>
                    </button>
                  )}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-5">
          <Card className="project-bg-color-one border border-0 shadow h-100 ">
            <div className="m-4 rounded">
              <Card.Img
                className="rounded"
                variant="top"
                src={recipeCards[1].recipe_img}
              />
            </div>
            <Card.Body className="mx-4">
              <div style={{ height: "100px" }}>
                <Card.Title className="main-font-family project-color-two fw-semibold fs-3 mb-4">
                  {recipeCards[1].recipe_name}
                </Card.Title>
              </div>
              <Card.Text
                style={{ letterSpacing: "0.5px" }}
                className=" fw-semibold"
              >
                <span className="text-font-family project-color-two fw-bold ">
                  Ingredients:{" "}
                </span>
                {recipeCards[1].ingredients.slice(0, 60)}{" "}
                <span className="project-color-three fw-semibold">
                  {" "}
                  Read More...
                </span>
              </Card.Text>
              <Card.Text className="fw-semibold lh-lg">
                <span className="text-font-family project-color-two fw-bold">
                  Cooking Method:{" "}
                </span>
                {recipeCards[1].cooking_method.slice(0, 150)}{" "}
                <span className="project-color-three fw-semibold">
                  {" "}
                  Read More...
                </span>
              </Card.Text>
              <Card.Text className="d-flex justify-content-between">
                <span>
                  <ReactStarsRating value={recipeCards[1].rating} readOnly />
                </span>

                <span>
                  {!isFavorite(recipeCards[1]._id) ? (
                    <button
                      onClick={() => {
                        handleFavoriteClick(recipeCards[1]._id);
                      }}
                      className="p-0 bg-transparent border border-0 "
                    >
                      <MdFavoriteBorder className="fs-3 project-color-three"></MdFavoriteBorder>
                    </button>
                  ) : (
                    <button
                      className="p-0 bg-transparent border border-0"
                      disabled
                    >
                      <MdFavorite className="fs-3 project-color-three"></MdFavorite>
                    </button>
                  )}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mb-5 md">
          <Card className="project-bg-color-one border border-0 shadow h-100 ">
            <div className="m-4 rounded">
              <Card.Img
                className="rounded"
                variant="top"
                src={recipeCards[2].recipe_img}
              />
            </div>
            <Card.Body className="mx-4">
              <div style={{ height: "100px" }}>
                <Card.Title className="main-font-family project-color-two fw-semibold fs-3 mb-4">
                  {recipeCards[2].recipe_name}
                </Card.Title>
              </div>
              <Card.Text
                style={{ letterSpacing: "0.5px" }}
                className="fw-semibold"
              >
                <span className="text-font-family project-color-two fw-bold ">
                  Ingredients:{" "}
                </span>
                {recipeCards[2].ingredients.slice(0, 60)}{" "}
                <span className="project-color-three fw-semibold">
                  {" "}
                  Read More...
                </span>
              </Card.Text>
              <Card.Text className="fw-semibold lh-lg">
                <span className="text-font-family project-color-two fw-bold">
                  Cooking Method:{" "}
                </span>
                {recipeCards[2].cooking_method.slice(0, 150)}{" "}
                <span className="project-color-three fw-semibold">
                  {" "}
                  Read More...
                </span>
              </Card.Text>
              <Card.Text className="d-flex justify-content-between">
                <span>
                  <ReactStarsRating value={recipeCards[2].rating} readOnly />
                </span>

                <span>
                  {!isFavorite(recipeCards[2]._id) ? (
                    <button
                      onClick={() => {
                        handleFavoriteClick(recipeCards[2]._id);
                      }}
                      className="p-0 bg-transparent border border-0 "
                    >
                      <MdFavoriteBorder className="fs-3 project-color-three"></MdFavoriteBorder>
                    </button>
                  ) : (
                    <button
                      className="p-0 bg-transparent border border-0"
                      disabled
                    >
                      <MdFavorite className="fs-3 project-color-three"></MdFavorite>
                    </button>
                  )}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RecipeInfo;
