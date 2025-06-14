import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Recipe Sharing App</h1>
    <Link to="/recipes">View Recipes</Link> | <Link to="/add">Add Recipe</Link>
  </div>
);

export default Home;
