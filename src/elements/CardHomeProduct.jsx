import React from "react";
import { Link } from "react-router-dom";

const CardHomeProduct = ({ title, image, children, link }) => {
  return (
    <div className="flex flex-col p-5 rounded-3xl border border-[#B9B6B3] mx-2 hover:bg-green hover:text-white">
      <Link to={link}>
        <div className="w-full h-62 items-center rounded-3xl">
          <img src={image} alt="CardAbout" className="w-full h-full" />
        </div>
        <div>
          <h1 className="text-[24px] font-bold my-2 line-clamp-1">{title}</h1>
          <p className="line-clamp-2">{children}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardHomeProduct;
