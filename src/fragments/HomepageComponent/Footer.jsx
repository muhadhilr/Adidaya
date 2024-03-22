import React from "react";
import headerImage from "../../assets/images/homepageFooter.png";
import Button from "../../elements/Button";
import store from "../../assets/icon/addStore.png";
import priceTag from "../../assets/icon/priceTag.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-screen flex justify-center items-center p-5 text-center md:text-left">
      <div className="flex-1 hidden md:block">
        <img src={headerImage} alt="" />
      </div>
      <div className="md:flex-1">
        <h1 className="text-h2 md:text-h1 font-semiBold leading-tight mb-4">
          Mari, Perluas Dampak Pendanaan dengan Modalin UMKM
        </h1>
        <div className="flex justify-center md:justify-start flex-col sm:flex-row">
          <div className="my-2 sm:mr-4">
            <Link to="/produk">
              <Button className="px-6 w-full">
                <img src={store} alt="" className="mr-2" />
                Modalin UMKM
              </Button>
            </Link>
          </div>
          <div className="my-2 sm:mr-4">
            <Link to="/daftar">
              <Button className="px-6 w-full">
                <img src={priceTag} alt="" className="mr-2" />
                Daftar Menjadi Mitra
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
