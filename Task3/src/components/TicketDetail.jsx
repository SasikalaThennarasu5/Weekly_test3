// src/components/TicketDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { mockTickets } from "../data/mockTickets";

const TicketDetail = () => {
  const { ticketId } = useParams();
  const ticket = mockTickets.find((t) => t.id === ticketId);

  if (!ticket) return <p>Ticket not found.</p>;

  return (
    <div>
      <h2>{ticket.subject}</h2>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Created:</strong> {new Date(ticket.createdAt).toLocaleString()}</p>
      <p><strong>Customer:</strong> {ticket.customer}</p>
      <p><strong>Assigned To:</strong> {ticket.assignedTo}</p>
      <h3>Messages:</h3>
      {ticket.messages.map((msg, idx) => (
        <p key={idx}><strong>{msg.sender}:</strong> {msg.content}</p>
      ))}
    </div>
  );
};

export default TicketDetail;
