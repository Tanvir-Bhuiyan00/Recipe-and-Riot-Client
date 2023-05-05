import React from "react";

import FoodPosts from "../FoodPosts/FoodPosts";
import FoodMenu from "../FoodMenu/FoodMenu";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefCard></ChefCard>
      <FoodMenu></FoodMenu>
      <FoodPosts></FoodPosts>
      
      
    </div>
  );
};

export default Home;
