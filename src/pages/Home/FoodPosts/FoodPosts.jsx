import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Post from "../Post/Post";

const FoodPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-between main-font-family mb-5">
        <h3 className="project-color-two">
          <span className="project-color-three">Don't Miss! </span>latest posts
        </h3>
        <h3>
          <span className="project-color-three">{posts.length}</span> Posts
        </h3>
      </div>

      <Row xs={1} md={2} lg={4} className="g-4">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </Row>
    </Container>
  );
};

export default FoodPosts;
