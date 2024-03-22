import React from "react";
import BackgroundImage from "../assets/images/background/bgRolepage.png";
import { Link } from "react-router-dom";

const RolePage = () => {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center text-center lg:w-[35%] w-[90%]">
        <h1 className="text-h2 font-bold">Gabung Bersama Kami</h1>
        <h2 className="font-medium text-center text-[16px]">
          Untuk memulai perjalanan ini, beri tahu kami jenis akun apa yang akan
          Anda gunakan
        </h2>
        <div className="mt-5 w-full text-center font-semiBold">
          <Link to={"/masuk/investor"}>
            <div className="border border-[#B9B6B3] p-2 rounded-xl mb-2 cursor-pointer hover:bg-orange hover:text-white">
              <p>Investor</p>
            </div>
          </Link>
          <Link to={"/masuk/mitra"}>
          <div className="border border-[#B9B6B3] p-2 rounded-xl cursor-pointer hover:bg-orange hover:text-white">
            <p>Mitra</p>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RolePage;
