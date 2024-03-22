import React, { useState } from "react";
import Button from "../../elements/Button";
import ChartImage from "../../assets/images/chartImage.png";
import BackgroundImage from "../../assets/images/background/bgDetailProduct-1.png";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import withNavbar from "../../hoc/withNavbar";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const DetailProductHeader = ({ title, children, image }) => {
  const slides = [
    {
      url: image,
    },
    {
      url: "https://via.placeholder.com/150",
    }
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
      className="h-screen flex justify-center items-center p-5 md:p-12"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hidden md:flex flex-1 m-8 rounded-3xl">
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
        <h1 className="text-h2 font-bold text-center md:text-left">{title}</h1>
        <p className="text-grey py-4">
          {children}
        </p>
        <img src={ChartImage} alt="" className="pb-5" />
        <Link to={"/pembayaran"}>
        <Button className="w-full font-bold">Danai&nbsp;<IoArrowForward /></Button>
        </Link>
      </div>
    </div>
  );
};

export default withNavbar(DetailProductHeader);
