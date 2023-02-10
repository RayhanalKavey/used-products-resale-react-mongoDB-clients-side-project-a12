import React from "react";

const PrimaryHeading = ({ customClass, children }) => {
  return (
    <h2 className={`text-3xl font-bold pb-6 text-center ${customClass}`}>
      {children}
    </h2>
  );
};

export default PrimaryHeading;
