import React, { useEffect, useState } from "react";
import CardTotal from "../../elements/CardTotal";
import { IDRCurrency } from "../../utils/Currency";
import CardProfit from "../../elements/CardProfit";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import { useNavigate } from "react-router-dom";

const FinanceRecap = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState('Mie Ayam Celaket');
  const token = useAuthHeader();
  const auth = useAuthUser();
  const Navigate = useNavigate();

  useEffect(() => {
    if (auth.role !== 'investor') {
      Navigate('/profil-mitra');
    }
    
    axios
      .get("https://modaleen-def24eca5066.herokuapp.com/api/validate", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-h2 font-bold mb-5">Rekap Keuangan</h1>
      <div className="w-2/4 bg-brown-bg p-8 px-12 rounded-3xl">
        <div>
          <CardTotal description="total keuntungan">
            {data.init_invest}
          </CardTotal>
          <div className="flex justify-center text-orange font-semiBold my-4 text-h4">
            <p>total keuntungan</p>
            <p className="mx-1">:</p>
            <h1 className="text-[#000000]">
            {IDRCurrency({ nominal: data.init_invest  })}
            </h1>
          </div>
        </div>
        <div className={`border border-orange rounded-3xl p-10 py-5 ${data.init_invest == 0 ? "hidden" : ""}`}>
          <CardProfit profit={data.init_invest} href="">
            {product}
          </CardProfit>
        </div>
          <p className={`text-center font-bold text-orange ${data.init_invest == 0 ? "" : "hidden"}`}>Tidak Ada Data</p>
      </div>
    </div>
  );
};

export default FinanceRecap;
