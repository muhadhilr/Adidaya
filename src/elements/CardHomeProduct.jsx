import React from "react";
import image from "../assets/images/product-1.png";
import { Link } from "react-router-dom";

const CardHomeProduct = () => {
  return (
    <div className="flex flex-col p-5 rounded-3xl border border-[#B9B6B3] mx-2">
      <Link to="">
        <div className="w-full h-62 items-center rounded-3xl">
          <img src={image} alt="CardAbout" className="w-full h-full" />
        </div>
        <div>
          <h1 className="text-[24px] font-bold my-2">Kelontong Tomo</h1>
          <p>Usaha bisnis produksi kerajinan tangan</p>
        </div>
      </Link>
    </div>
  );
};

export default CardHomeProduct;
