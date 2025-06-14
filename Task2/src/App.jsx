import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/recipes">Recipes</Link> | <Link to="/add">Add Recipe</Link>
      </nav>

      <Routes>
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
