import React from "react";

const PrimaryHeading = ({ customClass, children }) => {
  return <h2 className={`text-2xl ${customClass}`}>{children}</h2>;
};

export default PrimaryHeading;
