import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../assets/image/banner1.jpg";
import banner2 from "../../../assets/image/banner2.jpg";

import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel className="banner-height">
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img banner-height"
            src={banner1}
            alt="First slide"
          />

          <Carousel.Caption>
            <h1 className="project-color-one main-font-family fw-semibold">
              Chicken Biryani with steamed Basmati Rice
            </h1>
            <p className="text-font-family project-color-one">
              By Sumon Patwari in August 23 2021
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img banner-height"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1 className="project-color-one main-font-family fw-semibold">
              Stewed Meatballs with Tomato Sauce
            </h1>
            <p className="text-font-family project-color-one">
              By Bahar Mia in April 05 2022
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
