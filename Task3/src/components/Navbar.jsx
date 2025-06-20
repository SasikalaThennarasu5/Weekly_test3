// components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Optional styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>TicketSupport</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tickets">Tickets</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
