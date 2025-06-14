import ReactDOM from "react-dom";

const ImageViewer = ({ image, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h3>Image Viewer</h3>
      <img src={image} alt="Full view" width="100%" />
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ImageViewer;
