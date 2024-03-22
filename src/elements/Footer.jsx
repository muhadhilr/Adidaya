import React from "react";
import Logo from "../assets/icon/logoModaleen.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterAsset from "../assets/images/Footer.png";

const Footer = () => {
  const socialMediaLinks = [
    {
      icon: <FaFacebookF className="text-[#5B5B5B]" />,
      link: "https://facebook.com",
    },
    {
      icon: <FaTwitter className="text-[#5B5B5B]" />,
      link: "https://twitter.com",
    },
    {
      icon: <FaInstagram className="text-[#5B5B5B]" />,
      link: "https://instagram.com",
    },
    {
      icon: <FaLinkedinIn className="text-[#5B5B5B]" />,
      link: "https://linkedin.com",
    },
    {
      icon: <FaYoutube className="text-[#5B5B5B]" />,
      link: "https://youtube.com",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-between w-full p-8 bg-[#FCF8F4]">
      <div className="hidden md:block">
        <img src={FooterAsset} alt="" />
      </div>
      <div className="block md:hidden">
        <Link to="/">
          <img src={Logo} alt="" className="h-8 mb-4 md:mb-0" />
        </Link>
      </div>
      <div className="flex md:hidden">
        {socialMediaLinks.map((socialMedia, index) => (
          <div key={index} className="p-2 bg-[#EFE8E1] rounded-xl mx-2">
            <a href={socialMedia.link}>{socialMedia.icon}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
