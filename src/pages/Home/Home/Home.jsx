import React from "react";

import FoodPosts from "../FoodPosts/FoodPosts";
import FoodMenu from "../FoodMenu/FoodMenu";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FoodPosts></FoodPosts>
      <FoodMenu></FoodMenu>
      <ChefCard></ChefCard>
    </div>
  );
};

export default Home;
