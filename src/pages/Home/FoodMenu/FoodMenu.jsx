import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import Food from "../Food/Food";
const FoodMenu = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/food")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.log(err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <Container className="mt-5">
      <h2 className="main-font-family display-5 fw-semibold text-center project-color-three mb-5">
        RECIPES OF THE WEEK
      </h2>
      <Slider {...settings}>
        {foods.map((food) => (
          <Food key={food.id} food={food}></Food>
        ))}
      </Slider>
    </Container>
  );
};

export default FoodMenu;
