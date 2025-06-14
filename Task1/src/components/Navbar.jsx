
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/events">Events</Link>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
