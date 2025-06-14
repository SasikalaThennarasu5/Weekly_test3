import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../portals/BookingModal";

const Booking = () => {
  const { eventId } = useParams();
  const [showModal, setShowModal] = useState(false);

  const handleBooking = () => setShowModal(true);

  return (
    <div>
      <h2>Booking Event ID: {eventId}</h2>
      <button onClick={handleBooking}>Confirm Booking</button>
      {showModal && (
        <BookingModal
          ticketInfo={`#TICKET-${eventId}`}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Booking;
