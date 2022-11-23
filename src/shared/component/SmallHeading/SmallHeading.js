import React from "react";

const SmallHeading = ({ children, customStyle }) => {
  return (
    <h3 className={`text-secondary font-bold text-xl uppercase ${customStyle}`}>
      {children}
    </h3>
  );
};

export default SmallHeading;
