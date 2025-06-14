import React from 'react';
import { Link } from 'react-router-dom';
import { mockEvents } from '../data/mockEvents';

const Events = () => {
  return (
    <div>
      <h2>Upcoming Events</h2>
      {mockEvents.map((event) => (
        <div key={event.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <img src={event.image} alt={event.title} width="300" />
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <Link to={`/events/${event.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default Events;
