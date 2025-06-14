import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

const NutritionModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <h2>Nutrition Facts</h2>
        <p>Calories: 200</p>
        <p>Protein: 10g</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};

export default NutritionModal;
