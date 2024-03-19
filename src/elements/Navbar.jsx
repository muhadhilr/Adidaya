import React, { useState } from "react";
import Logo from "../assets/icon/logoModaleen.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Nav = () => {
  const Links = [
    { name: "Modalin UMKM", link: "/produk" },
    { name: "Daftar Menjadi Mitra", link: "/daftar" },
    { name: "Tentang Kami", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full fixed z-50 top-0 left-0 p-0 font-medium md:p-3 bg-[#FCF8F4]">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <div>
          <Link to="/">
            <img src={Logo} alt="" className="logo-img h-8" />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden"
        >
          {open ? <IoClose /> : <IoMenu />}
        </div>
        <ul
          className={`md:flex md:items-center bg-[#FCF8F4] md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-14 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to="/masuk"
              className="px-5 py-3 rounded-3xl cursor-pointer bg-orange text-white hover:bg-[#E4B68D] font-semiBold"
            >
              Masuk
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
