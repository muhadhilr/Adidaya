import React from "react";
import QR from "../assets/images/QRPayment.png";
import Button from "../elements/Button";

const PaymentPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-1/3 text-center">
        <h1 className="text-h2 font-bold">Pembayaran</h1>
        <p className="text-red">Scan QR Code berikut menggunakan handphone anda</p>
      </div>
      <div className="flex flex-col justify-center items-center py-10 bg-brown-bg rounded-3xl mt-5">
        <img src={QR} alt="" className="w-[60%]" />
        <div className="mt-5 w-[80%] p-2 rounded-3xl bg-orange text-white font-medium text-center mx-5">
            Scan & Bayar
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
