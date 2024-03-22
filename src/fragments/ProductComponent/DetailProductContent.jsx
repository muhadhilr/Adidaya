import React from "react";
import CardDetailProduct from "../../elements/CardDetailProduct";
import BackgroundImage from "../../assets/images//background/bgDetailProduct-2.png";

const DetailProductContent = ({ profit = 2, duration = 3, modal = 18000000 }) => {
  const dotModal = modal.toLocaleString("id-ID", {
    maximumFractionDigits: 0
  });

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
          header={`${profit}%`}
          description={
            `Investor akan mendapatkan keuntungan sebesar ${profit}%, dari keuntungan UMKM setiap bulan`
          }
        >
          Sistem Bagi Hasil
        </CardDetailProduct>
        <CardDetailProduct
          header={`${duration} Bulan`}
          description={
            `Target kebutuhan modal Mie Ayam Cak Qodir harus terpenuhi dalam jangka waktu ${duration} bulan kedepan`
          }
        >
          Jangka Waktu
        </CardDetailProduct>
        <CardDetailProduct
          header={dotModal}
          description={
            `Sisa Modal yang diperlukan oleh Mie Ayam Cak Qodir adalah sebesar Rp${dotModal},-`
          }
        >
          Sisa Kebutuhan Modal
        </CardDetailProduct>
      </div>
    </div>
  );
};

export default DetailProductContent;
