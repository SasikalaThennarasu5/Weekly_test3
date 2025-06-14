import React from "react";

const withValidation = (Component) => {
  return function ValidatedComponent(props) {
    const isValid = (data) => {
      return data.title && data.body;
    };

    return <Component {...props} isValid={isValid} />;
  };
};

export default withValidation;
