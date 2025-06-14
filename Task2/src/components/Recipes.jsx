import React, { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("/posts") // placeholder for recipes
      .then((res) => setRecipes(res.data.slice(0, 10))) // limiting for mock API
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
