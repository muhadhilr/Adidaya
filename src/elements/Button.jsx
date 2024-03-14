import React from "react";

const Button = ({ children, type }) => {
  return (
    <button className="rounded-full flex items-center p-4 px-8 text-p2 bg-orange text-white hover:bg-[#E4B68D]" type={type}>
      {children}
    </button>
  );
};

export default Button;
