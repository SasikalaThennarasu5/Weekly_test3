import React from "react";
import ReactDOM from "react-dom";

const ImageUploadModal = ({ onClose, previewUrl }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h3>Image Preview</h3>
      <img src={previewUrl} alt="Preview" width="200" />
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ImageUploadModal;
