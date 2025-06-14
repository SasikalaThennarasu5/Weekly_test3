import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProperties } from '../data/mockProperties';
import ProtectedBooking from './ProtectedBooking';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = mockProperties.find((p) => p.id === id);

  if (!property) return <p>Property not found.</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p>{property.location}</p>
      <p>{property.price}</p>
      <ProtectedBooking />
    </div>
  );
};

export default PropertyDetails;
