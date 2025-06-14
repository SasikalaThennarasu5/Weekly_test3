import React from "react";
import ReactDOM from "react-dom";

const LivePreview = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        width: "500px"
      }}>
        <h3>Survey Preview</h3>
        <p><strong>{content.title}</strong></p>
        <ul>
          {content.questions.map(q => (
            <li key={q.id}>{q.text}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default LivePreview;
