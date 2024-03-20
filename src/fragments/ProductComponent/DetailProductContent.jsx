import React from "react";
import CardDetailProduct from "../../elements/CardDetailProduct";
import BackgroundImage from "../../assets/images//background/bgDetailProduct-2.png";

const DetailProductContent = () => {
  return (
    <div
      className="md:h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h1 className="text-[40px] font-bold mb-5">Data Mitra</h1>
      </div>
      <div className="flex flex-col md:flex-row px-20">
        <CardDetailProduct
          header={"2%"}
          description={
            "Investor akan mendapatkan keuntungan sebesar 2% dari keuntungan UMKM setiap bulan"
          }
        >
          Sistem Bagi Hasil
        </CardDetailProduct>
        <CardDetailProduct
          header={"3 Bulan"}
          description={
            "Target kebutuhan modal Mie Ayam Cak Qodir harus terpenuhi dalam jangka waktu 3 bulan kedepan"
          }
        >
          Jangka Waktu
        </CardDetailProduct>
        <CardDetailProduct
          header={"18.000.000"}
          description={
            "Sisa Modal yang diperlukan oleh Mie Ayam Cak Qodir adalah sebesar Rp18.000.000,-"
          }
        >
          Sisa Kebutuhan Modal
        </CardDetailProduct>
      </div>
    </div>
  );
};

export default DetailProductContent;
