import React from "react";
import CardStep from "../../elements/CardStep";

const StepInvestor = () => {
  const cardData = [
    {
      no: "01",
      title: "Daftar Akun",
      content: "Daftarkan akun dengan klik “Masuk” pada bagian atas website ",
    },
    {
      no: "02",
      title: "Pilih UMKM",
      content:
        "Cari informasi tentang berbagai UMKM lalu klik “Selengkapnya” untuk Pilih UMKM yang anda tertarik untuk berinvestasi",
    },
    {
      no: "03",
      title: "Modalin",
      content: "Mulai investasi modal dengan klik “Danai” pada Profil UMKM",
    },
    {
      no: "04",
      title: "Pendanaan",
      content:
        "Mulai proses pendanaan melalui chat WhatsApp yang terhubung setelah klik “Danai”",
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-h2">Langkah Modalin UMKM</h1>
      <p className="my-2 text-[#5B5B5B]">
        Ikuti langkah berikut untuk memulai investasi anda
      </p>
      <div className="w-full px-20 my-5 flex">
        {cardData.map((card, index) => (
          <CardStep key={index} no={card.no} title={card.title}>
            {card.content}
          </CardStep>
        ))}
      </div>
    </div>
  );
};

export default StepInvestor;
