import React from "react";
import ReactDOM from "react-dom";

const BookingModal = ({ onClose, ticketInfo }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h2>Booking Confirmed!</h2>
      <p>Ticket: {ticketInfo}</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default BookingModal;
