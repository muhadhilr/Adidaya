import React from "react";
import headerImage from "../../assets/images/homepageHeader.svg";
import Button from "../../elements/Button";
import store from "../../assets/icon/addStore.png";
import priceTag from "../../assets/icon/priceTag.png";

const Header = () => {
  return (
    <div className="h-screen flex justify-center items-center p-20 pr-5">
      <div className="flex-1">
        <h1 className="text-h1 font-bold leading-tight">
          Perluas Dampak Pendanaan dengan Modalin UMKM
        </h1>
        <p className="font-medium my-7">
          Platform Crowdfunding yang menjembatani antara para bisnis lokal atau
          UMKM yang membutuhkan modal dengan para investor
        </p>
        <div className="flex mr-8">
          <div className="mr-4">
            <Button><img src={store} alt="" className="mr-2" />Modalin UMKM</Button>
          </div>
          <div>
            <Button><img src={priceTag} alt="" className="mr-2" />Daftar Menjadi Mitra</Button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
