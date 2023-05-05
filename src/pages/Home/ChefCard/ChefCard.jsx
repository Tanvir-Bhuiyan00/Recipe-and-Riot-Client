import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);


  
  const fetchChef = async () => {
    try {
      const response = await fetch("https://recipe-and-riot-server-tanvir-bhuiyan00.vercel.app/chef");
      const json = await response.json();
      if (json) {
        setChefs(json);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchChef();
  }, []);

  

  return (
    <Container className="mt-5">
      <h2 className="main-font-family display-5 fw-semibold text-center project-color-three mb-5">
        OUR TOP CHEF
      </h2>
      <Row xs={1} md={2} className="g-4 my-5">
        {
          chefs.map(chef=> <ChefDetails key={chef.id} chef={chef}></ChefDetails>)
        }
      </Row>
    </Container>
  );
};

export default ChefCard;
