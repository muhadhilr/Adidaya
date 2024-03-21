import React from "react";
import { IDRCurrency } from "../utils/Currency";
import { Link } from "react-router-dom";

const CardNeeds = ({ children, profit, bank, date, rekening }) => {
  return (
    <div className="w-full rounded-[30px] flex justify-between p-4 px-7 text-orange bg-white my-4">
      <div>
        <h1 className="text-h4 font-semiBold text-black">{children}</h1>
        <p className="text-p2 text-green font-semiBold">{date}</p>
      </div>
      <div className="text-end">
        <h1 className="text-h4 font-semiBold text-black">+ {profit}</h1>
        <p className="text-p2 text-green font-semiBold">{bank} {rekening}</p>
      </div>
    </div>
  );
};

export default CardNeeds;
