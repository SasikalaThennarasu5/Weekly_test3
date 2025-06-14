import ReactDOM from "react-dom";

const BookingModal = ({ property, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <h3>Booking: {property.title}</h3>
      <label>
        Select Date: <input type="date" />
      </label>
      <br />
      <button onClick={() => alert("Booked!")}>Confirm</button>
      <button onClick={onClose}>Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default BookingModal;
