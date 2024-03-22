import React from "react";
import headerImage from "../../assets/images/homepageHeader.svg";
import Button from "../../elements/Button";
import store from "../../assets/icon/addStore.png";
import priceTag from "../../assets/icon/priceTag.png";
import { Link } from "react-router-dom";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

const Header = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="h-screen flex flex-col justify-center items-center md:flex-row p-5 md:p-20 pr-5 text-center md:text-left">
      <div className="md:flex-1 md:mr-8">
        <h1 className="text-h2 md:text-h1 font-bold leading-tight">
          Perluas Dampak Pendanaan dengan Modalin UMKM
        </h1>
        <p className="font-medium my-7">
          Platform Crowdfunding yang menjembatani antara para bisnis lokal atau
          UMKM yang membutuhkan modal dengan para investor
        </p>
        <div
          className={`flex justify-center md:justify-start flex-col sm:flex-row ${
            isAuthenticated ? "hidden" : "flex"
          }`}
        >
          <div className="my-2 sm:mr-4">
            <Link to="/daftar">
              <Button className="px-6 w-full">
                <img src={store} alt="" className="mr-2" />
                Daftar Menjadi Investor
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
      <div className="flex-1 hidden md:block">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
