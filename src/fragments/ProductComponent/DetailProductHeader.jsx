import React, { useState } from "react";
import Button from "../../elements/Button";
import Image from "../../assets/images/product-4.png";
import ChartImage from "../../assets/images/chartImage.png";
import BackgroundImage from "../../assets/images/bgDetailProduct-1.png";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { IoArrowForward } from "react-icons/io5";

const DetailProductHeader = () => {
  const slides = [
    {
      url: Image,
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className="h-screen flex justify-center items-center p-12"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex-1 m-8 rounded-3xl">
        <div className="max-w-[1400px] h-[600px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-2 bg-white text-green cursor-pointer">
            <GoChevronLeft onClick={prevSlide} size={30} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-white text-green cursor-pointer">
            <GoChevronRight onClick={nextSlide} size={30} />
          </div>
        </div>
      </div>
      <div className="flex-1 px-5">
        <h1 className="text-h2 font-bold">Mie Ayam Cak Qodir</h1>
        <p className="text-grey py-4">
          Mie Ayam Cak Qodir" adalah warung mie ayam yang menyajikan hidangan
          lezat dengan cita rasa autentik. Didirikan tahun 2023 dan bertempat di
          Jl. Soekarno Hatta 23, Tlogomas, Mojokerto
        </p>
        <img src={ChartImage} alt="" className="pb-5" />
        <Button className="w-full font-bold">Danai&nbsp;<IoArrowForward /></Button>
      </div>
    </div>
  );
};

export default DetailProductHeader;
