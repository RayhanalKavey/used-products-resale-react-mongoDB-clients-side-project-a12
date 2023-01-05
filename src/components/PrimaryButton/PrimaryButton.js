import React from "react";

const PrimaryButton = ({ children, Class, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-red-400 to-pink-400 text-white ${Class}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
