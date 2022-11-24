import React from "react";

const SecondaryHeading = ({ customClass, children }) => {
  return <h2 className={`text-xl ${customClass}`}>{children}</h2>;
};

export default SecondaryHeading;
