import React from "react";

const Input = ({ children, placeholder, type, onChange = () => {} }) => {
  return (
    <div className="my-8">
      <label htmlFor={children} className="font-semiBold">
        {children}
      </label>
      <input
        type={type}
        className="w-full rounded-3xl p-4 pl-5 focus:outline-none mt-2 border border-[#B9B6B3] font-medium"
        placeholder={placeholder}
        id={children}
        onChange={onChange}
        required
        style={{ backgroundColor: 'transparent' }} 
      />
    </div>
  );
};

export default Input;
