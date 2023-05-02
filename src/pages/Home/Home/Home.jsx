import React from "react";
import Banner from "../../Shared/Banner/Banner";
import FoodPosts from "../FoodPosts/FoodPosts";
import FoodMenu from "../FoodMenu/FoodMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodPosts></FoodPosts>
      <FoodMenu></FoodMenu>
    </div>
  );
};

export default Home;
