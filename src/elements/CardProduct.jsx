import React from "react";
import ProductImage from "../assets/images/product-1.png";
import Arrow from "../assets/icon/rightArrow.png";
import { Link } from "react-router-dom";

const CardProduct = () => {
  return (
    <div className="flex flex-col border border-[#B9B6B3] w-[30%] rounded-3xl p-7 hover:bg-green hover:text-white m-2">
      <div className="w-full">
        <img src={ProductImage} alt="" className="w-full" />
      </div>
      <div>
        <h1 className="font-bold text-h3 my-3 hover:text-white">Bebek Abas</h1>
        <p className="mb-6 text-justify">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
          dalaracc lacus vel facilisis volutpat est velitolm.
        </p>
        <Link to="/" className="flex items-center font-bold">
          Selengkapnya <img src={Arrow} alt="" className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default CardProduct;
