import React, { useState } from "react";
import CardTotal from "../components/CardTotal";
import { IDRCurrency } from "../utils/Currency";
import CardProfit from "../components/CardProfit";

const DashboardInvestor = () => {
    const [pendanaan, setPendanaan] = useState(16000000);
    const [keuntungan, setKeuntungan] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-2/4 bg-green-bg p-12 rounded-3xl">
        <div>
            <CardTotal description="total pendanaan">
                {pendanaan}
            </CardTotal>
            <div className="flex justify-center text-green mt-2">
                <p>total keuntungan</p>
                <p className="mx-1">:</p>
                <h1 className="font-bold">{IDRCurrency({ nominal: keuntungan })}</h1>
            </div>
        </div>
        <div className="border border-green mt-5 rounded-3xl p-5 px-8">
            <CardProfit profit={keuntungan} href={"/testing"}>
                Mie Ayam Celaket
            </CardProfit>
        </div>
      </div>
    </div>
  );
};

export default DashboardInvestor;
