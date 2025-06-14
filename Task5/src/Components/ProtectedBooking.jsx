import React from 'react';
import withAuthProtection from '../hoc/withAuthProtection';

const Booking = () => {
  return <button onClick={() => alert('Booking Confirmed!')}>Book Now</button>;
};

const ProtectedBooking = withAuthProtection(Booking);
export default ProtectedBooking;
