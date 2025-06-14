import React from 'react';
import { useParams } from 'react-router-dom';
import { mockEvents } from '../data/mockEvents';

const EventDetails = () => {
  const { id } = useParams();
  const event = mockEvents.find((e) => e.id === id);

  if (!event) return <p>Event not found.</p>;

  return (
    <div>
      <h2>{event.title}</h2>
      <img src={event.image} alt={event.title} width="500" />
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Price:</strong> {event.price}</p>
      <p><strong>Seats Available:</strong> {event.seatsAvailable}</p>
      <button>Book Now</button>
    </div>
  );
};

export default EventDetails;
