import React from "react";
import ProductImage from "../assets/images/product-1.png";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";

const CardProduct = ({ title, image, children, link }) => {
  return (
    <div className="flex flex-col border border-[#B9B6B3] md:w-[30%] h-[30rem] rounded-3xl p-7 hover:bg-green hover:text-white m-3 shadow-md">
      <div className="w-full h-52">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="font-bold text-[27px] my-3 whitespace-nowrap overflow-hidden">{title}</h1>
          <p className="mb-6 text-justify pr-2">
            {children}
          </p>
        </div>
        <div className="mb-3">
          <Link to={link} className="flex items-center font-bold py-2">
            Selengkapnya <IoMdArrowForward className="ml-2"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
