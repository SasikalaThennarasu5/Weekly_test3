import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to Event Booking</h1>
    <Link to="/events">Browse Events</Link>
  </div>
);

export default Home;
