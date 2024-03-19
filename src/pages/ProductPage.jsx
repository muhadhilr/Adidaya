import React, { useState } from "react";
import CardProduct from "../elements/CardProduct";
import BackgroundImage from "../assets/images/background/bgProductpage.png";
import withNavbar from "../hoc/withNavbar";

const ProductPage = () => {
  const [data, setData] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Bebek Abas",
      description: "Tempat makan yang menyajikan bebek goreng dan bakar. Terletak di Jl. Kusuma Wijaya 24, Peru, Semarang",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Mie Rahmad",
      description: "Usaha bisnis yang menawarkan berbagai varian mie dengan beragam pilihan kuah. bertempat di Jl. Sukun 23, Tunggul, Jogja",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "KerajinanQu",
      description: "Usaha bisnis yang berfokus pada produksi dan penjualan kerajinan tangan, bertekmpat di Jl. Mojolangu 2, Merjosari",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Kelontong Tomo",
      description: "Bisnis toko kelontong yang menyediakan berbagai macam kebutuhan sehari-hari masyarakat. Terletak di Jl. Agung 2, Klojen",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Kios Tlogomas",
      description: "Kios Tlogomas berfokus pada jual-beli buku bekas dengan harga terjangkau, bertempat di Jl. Ahmad 2, Singosari",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      name: "Mie Ayam Cak Qodir",
      description: "Mie Ayam Cak Qodir adalah warung mie ayam yang didirikan tahun 2023 dan bertempat di Jl. Soekarno Hatta 23",
    },
  ]);

  return (
    <div
      className="flex justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-20 md:w-11/12 md:py-20">
        <div className="flex flex-col justify-center items-center text-center px-5">
          <div className="md:w-1/2">
            <h1 className="text-h2 md:text-h1 font-bold">Daftar UMKM</h1>
            <p className="text-grey md:font-medium">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan.
            </p>
          </div>
          <div className="w-full text-justify flex flex-col md:flex-row flex-wrap justify-center my-8">
            {data.map((item) => (
              <CardProduct
                key={item.id}
                image={item.image}
                title={item.name}
                children={item.description}
                link={`/product/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNavbar(ProductPage);
