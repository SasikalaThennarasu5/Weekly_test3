import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "../axiosConfig";

const ReplyModal = ({ ticketId, onClose }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    axios.post(`/tickets/${ticketId}/reply`, { text })
      .then(() => {
        alert("Reply sent");
        onClose();
      })
      .catch(console.error);
  };

  return ReactDOM.createPortal(
    <div className="modal">
      <h3>Reply to Ticket</h3>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSend}>Send</button>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ReplyModal;
