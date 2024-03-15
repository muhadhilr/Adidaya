import React from "react";
import { IDRCurrency } from "../utils/Currency";
import { Link } from "react-router-dom";

const CardProfit = ({ children, profit, href, prefix = "+" }) => {
  return (
    <div className="w-full rounded-[30px] flex justify-between p-4 px-7 text-orange bg-white my-4">
      <div>
        <h1 className="text-h4 font-semiBold text-black">{children}</h1>
        <p className="text-p2 text-green font-semiBold">{prefix} {IDRCurrency({ nominal: profit })}</p>
      </div>
      <div
        className="flex align-center justify-center text-center items-center"
      >
        <Link to={href}>
          <div className="flex align-center justify-center border border-solid px-4 py-3 rounded-3xl cursor-pointer bg-orange">
            <p className="text-p3 text-[#ffffff]">Cek Laporan Disini</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardProfit;
