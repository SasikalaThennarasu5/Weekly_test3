import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const withLoginProtection = (WrappedComponent) => {
  return (props) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <WrappedComponent {...props} /> : <Navigate to="/" />;
  };
};

export default withLoginProtection;
