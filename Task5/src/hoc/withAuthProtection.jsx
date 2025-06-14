import React from 'react';
import { useAuth } from '../context/AuthContext';

const withAuthProtection = (Component) => {
  return (props) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      return <p style={{ color: 'red' }}>Please log in to book a property.</p>;
    }

    return <Component {...props} />;
  };
};

export default withAuthProtection;
