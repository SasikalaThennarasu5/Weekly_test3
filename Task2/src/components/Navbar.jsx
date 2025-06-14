
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/recipes">Recipes</Link>
    <Link to="/add">Add Recipe</Link>
  </nav>
);

export default Navbar;
