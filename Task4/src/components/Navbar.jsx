// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Survey Builder</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/surveys/1/edit">Edit Survey 1</Link>
        <Link to="/surveys/1/view">View Survey 1</Link>
      </div>
    </nav>
  );
};

export default Navbar;
