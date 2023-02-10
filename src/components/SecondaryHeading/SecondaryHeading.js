import React from "react";

const SecondaryHeading = ({ customClass, children }) => {
  return (
    <h2 className={`text-xl pl-5 text-center ${customClass}`}>{children}</h2>
  );
};

export default SecondaryHeading;
