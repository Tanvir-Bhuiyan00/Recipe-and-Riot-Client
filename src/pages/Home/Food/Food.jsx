import React from "react";

const Food = ({ food }) => {
  const { food_image, food_title } = food;
  return (
    <div>
      <img className="w-100" src={food_image} alt="" />
      <h4 style={{letterSpacing:"2px"}} className="main-font-family project-color-two w-100 text-center mt-3 fw-semibold ">{food_title}</h4>
    </div>
  );
};

export default Food;
