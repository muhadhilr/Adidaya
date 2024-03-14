import React from "react";
import CardStep from "../../components/CardStep";

const StepPartner = () => {
  const cardData = [
    {
      no: "01",
      title: "Daftar Akun",
      content:
        "Daftarkan akun mitra dengan klik “Daftar menjadi mitra” pada bagian atas website kemudian dihubungkan melalui WhatsApp ",
    },
    {
      no: "02",
      title: "Isi Formulir",
      content:
        "Isi formulir yang diberikan oleh Contact Person kami pada WhatsApp",
    },
    {
      no: "03",
      title: "Verifikasi Data",
      content:
        "Lengkapi data pada Profil UMKM setelah Login akun anda pada fitur “Masuk” di bagian atas website",
    },
    {
      no: "04",
      title: "Mitra Terdaftar",
      content:
        "UMKM telah terdaftar dan anda dapat memantau riwayat permodalan usaha anda",
    },
  ];

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-h2">Langkah Pengajuan UMKM</h1>
      <p className="my-2 text-[#5B5B5B]">
        Ikuti langkah berikut untuk memulai pengajuan pendanaan sebagai mitra
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

export default StepPartner;
