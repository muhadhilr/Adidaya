import React from "react";
import backgroundImage from "../../assets/images/homepageProduct_bg.png";
import CardHomeProduct from "../../components/CardHomeProduct";

const Product = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
    >
      <h1 className="font-bold text-h2">Modalin UMKM</h1>
      <p className="font-regular">Berikut merupakan UMKM yang bisa anda investasikan</p>
      <div className="w-3/4 my-8 flex">
        <CardHomeProduct></CardHomeProduct>
        <CardHomeProduct></CardHomeProduct>
        <CardHomeProduct></CardHomeProduct>
      </div>
    </div>
  );
};

export default Product;
