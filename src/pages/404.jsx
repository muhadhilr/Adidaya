import React from "react";
import Button from "../elements/Button";
import BackgroundImage from "../assets/images/background/bgErrorpage.png";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-[180px] font-bold text-green leading-none">404</h1>
      <h3 className="text-[48px] font-bold mb-5">Page Not Found</h3>
      <div className="text-[20px] text-center text-[#5B5B5B] mb-8">
        <p>Sorry. the content you`re looking for doesn`t exist.</p>
        <p>Either it was removed, or you mistyped the link.</p>
      </div>
      <Button
        className="w-[200px] font-semiBold"
        onClick={() => window.location.replace("/")}
      >
        Go Home
      </Button>
    </div>
  );
};

export default ErrorPage;
