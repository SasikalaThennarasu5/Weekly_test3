// src/hoc/withAutoSave.jsx
import React, { useEffect } from "react";

const withAutoSave = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      const interval = setInterval(() => {
        console.log("Auto-saving data...");
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAutoSave;
