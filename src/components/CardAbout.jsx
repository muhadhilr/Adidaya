import React from "react";

const CardAbout = ({ children, image, title }) => {
  return (
    <div className="flex flex-col border border-[#B9B6B3] border-slate-800 w-1/3 h-[30rem] justify-center mx-2 items-center text-center px-11 rounded-3xl hover:bg-[#96A50C] hover:text-white">
      <div className="w-28 h-28">
        <img src={image} alt="CardAbout" className="w-full h-full" />
      </div>
      <div>
        <h1 className="text-sh font-bold my-6">{title}</h1>
        <p className="font-medium">
          {children}
        </p>
      </div>
    </div>
  );
};

export default CardAbout;
