import React from "react";

const Button = ({ children, type, className = "", onClick = () => {} }) => {
  return (
    <button className={`rounded-full flex items-center justify-center p-3 text-p2 bg-orange text-white hover:bg-[#E4B68D] ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
