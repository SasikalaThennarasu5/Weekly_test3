// src/components/LivePreview.jsx
import React from "react";
import "./LivePreview.css";

const LivePreview = ({ survey, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{survey.title} (Preview)</h3>
        {survey.questions.map((q) => (
          <div key={q.id}>
            <label>{q.label}</label>
            <input type="text" disabled />
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LivePreview;
