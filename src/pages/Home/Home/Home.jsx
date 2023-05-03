import React from "react";
import Banner from "../../Shared/Banner/Banner";
import FoodPosts from "../FoodPosts/FoodPosts";
import FoodMenu from "../FoodMenu/FoodMenu";
import ChefCard from "../ChefCard/ChefCard";

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
