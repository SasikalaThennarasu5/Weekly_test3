import React from 'react';
import { Link } from 'react-router-dom';
import { mockProperties } from '../data/mockProperties';

const Properties = () => (
  <div>
    <h2>Available Properties</h2>
    <div className="property-list">
      {mockProperties.map((property) => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>{property.price}</p>
          <Link to={`/properties/${property.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  </div>
);

export default Properties;
