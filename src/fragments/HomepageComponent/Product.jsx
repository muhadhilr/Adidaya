import React, { useState, useEffect } from "react";
import CardHomeProduct from "../../elements/CardHomeProduct";
import Button from "../../elements/Button";
import { FiSearch } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import DaftarUMKM from "../../utils/DaftarUMKM.json";

const Product = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [produk, setProduk] = useState([]);

  useEffect(() => {
    setProduk(DaftarUMKM);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center md:text-left">
      <h1 className="font-bold text-h2">Modalin UMKM</h1>
      <p className="font-regular">
        Berikut merupakan UMKM yang bisa anda investasikan
      </p>
      <div className="w-2/3 my-8">
        <Slider {...settings}>
          {produk.map((item, index) => (
            <div>
              <CardHomeProduct
                key={item.id}
                title={item.name}
                image={item.image}
                children={item.description}
                link={`/detail-produk/${item.id}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-2/3 md:w-1/2">
        <Link to="/produk">
          <Button className="w-full">
            <FiSearch className="mr-2" />
            Lihat Lebih Banyak
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
