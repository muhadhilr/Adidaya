import React from "react";
import headerImage from "../../assets/images/homepageFooter.png";
import Button from "../../components/Button";
import store from "../../assets/icon/addStore.png";
import priceTag from "../../assets/icon/priceTag.png";

const Footer = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-1">
        <img src={headerImage} alt="" />
      </div>
      <div className="flex-1">
        <h1
          className="text-h1 font-bold leading-tight mb-4"
        >
          Mari, Perluas Dampak Pendanaan dengan Modalin UMKM 
        </h1>
        <div className="flex mt-12">
          <div className="mr-4">
            <Button>
              <img src={store} alt="" className="mr-2" />
              Modalin UMKM
            </Button>
          </div>
          <div>
            <Button>
              <img src={priceTag} alt="" className="mr-2" />
              Daftar Menjadi Mitra
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
