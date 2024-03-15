import React from "react";
import CardProduct from "../elements/CardProduct";

const ProductPage = () => {
  return (
    <div className="p-12">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="w-1/2">
          <h1 className="text-h1 font-bold">Daftar UMKM</h1>
          <p className="text-grey font-medium">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.
          </p>
        </div>
        <div className="w-full text-justify flex flex-wrap justify-center my-8">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
