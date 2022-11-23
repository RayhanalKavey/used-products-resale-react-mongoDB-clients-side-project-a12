import React from "react";

const PrimaryHeading = ({ customStyle, children }) => {
  return <h2 className={`text-4xl ${customStyle}`}>{children}</h2>;
};

export default PrimaryHeading;
