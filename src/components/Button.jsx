import React from "react";

const Button = ({ children, type }) => {
  return (
    <button className="w-full rounded-3xl p-3 focus:outline-none bg-purple text-white font-bold" type={type}>
      {children}
    </button>
  );
};

export default Button;
