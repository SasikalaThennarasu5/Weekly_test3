// src/components/Tickets.jsx
import React from "react";
import { Link } from "react-router-dom";
import { mockTickets } from "../data/mockTickets";

const Tickets = () => {
  return (
    <div>
      <h2>All Tickets</h2>
      {mockTickets.map((ticket) => (
        <div key={ticket.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h4>{ticket.subject}</h4>
          <p>Status: {ticket.status}</p>
          <p>Priority: {ticket.priority}</p>
          <p>Customer: {ticket.customer}</p>
          <Link to={`/tickets/${ticket.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Tickets;
