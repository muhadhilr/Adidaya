import React, { useState } from "react";
import CardAbout from "../../elements/CardAbout";
import VisiMisi from "../../assets/icon/visimisiImage.png";
import Keunggulan from "../../assets/icon/keunggulanImage.png";
import BagiHasil from "../../assets/icon/bagihasilImage.png";

const About = () => {
  const cardData = [
    {
      title: "Visi Misi",
      image: VisiMisi,
      content:
        "Meningkatkan pendapatan perekonomian lokal dengan sistem Crowd Funding berbasis digital.",
    },
    {
      title: "Keunggulan",
      image: Keunggulan,
      content:
        "Cairkan keuntungan investasi kapan pun sewaktu kamu butuhkan tanpa penalti.",
    },
    {
      title: "Bagi Hasil",
      image: BagiHasil,
      content:
        "Investor akan mendapatkan keuntungan dari UMKM sebesar persentase sesuai kesepakatan.",
    },
  ];

  return (
    <div className="md:h-screen flex justify-center items-center bg-blue">
      <div className="w-3/4 text-center">
        <div className="mb-5">
          <h1 className="text-sh font-bold">
            Modaleen Sebagai Platform Permodalan UMKM
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          {cardData.map((card, index) => (
            <CardAbout key={index} image={card.image} title={card.title}>
              {card.content}
            </CardAbout>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
