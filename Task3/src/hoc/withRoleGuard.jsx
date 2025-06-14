import React from "react";
import { Navigate } from "react-router-dom";

const withRoleGuard = (Component, requiredRole) => {
  return function ProtectedComponent(props) {
    const role = localStorage.getItem("role"); // example: "agent", "admin", "customer"
    return role === requiredRole ? <Component {...props} /> : <Navigate to="/" />;
  };
};

export default withRoleGuard;
