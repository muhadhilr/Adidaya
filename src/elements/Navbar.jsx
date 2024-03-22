import React, { useEffect, useState } from "react";
import Logo from "../assets/icon/logoModaleen.png";
import { IoMenu, IoClose } from "react-icons/io5";
import { HashLink as Link } from "react-router-hash-link";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const Nav = () => {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const auth = useAuthUser();
  const authHeader = useAuthHeader();

  const [data, setData] = useState({});

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get(
          auth.role === "mitra"
            ? "https://modaleen-def24eca5066.herokuapp.com/api/validateowner"
            : "https://modaleen-def24eca5066.herokuapp.com/api/validate",
          {
            headers: {
              Authorization: authHeader,
            },
          }
        )
        .then((res) => {
          auth.role === "mitra"
            ? setData(res.data.message)
            : setData(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated]);

  const Links = [
    { name: "Daftar Menjadi Investor", link: "/daftar" },
    { name: "Daftar Menjadi Mitra", link: "/daftar" },
    { name: "Tentang Kami", link: "/#about" },
  ];

  let Profile = [];
  if (isAuthenticated) {
    Profile = [
      {
        name: "Edit Profile",
        link:
          auth.role === "mitra"
            ? "/profil-mitra#profil"
            : "/profil-investor#profil",
        classname: "",
      },
      {
        name: "Rekap Keuangan",
        link:
          auth.role === "mitra"
            ? "/profil-mitra#keuangan"
            : "/profil-investor#keuangan",
        classname: "",
      },
      { name: "Logout", link: "/", classname: "text-red", onClick: signOut },
    ];
  }

  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="w-full fixed z-50 top-0 left-0 p-0 font-medium md:p-2 bg-[#FCF8F4]">
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
                className={`hover:text-gray duration-500 ${link.classname}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li
            className={`md:ml-8 text-xl md:my-0 my-7 ${
              isAuthenticated ? "hidden" : "block"
            }`}
          >
            <Link
              to="/masuk"
              className="px-5 py-3 rounded-3xl cursor-pointer bg-orange text-white hover:bg-[#E4B68D] font-semiBold"
            >
              Masuk
            </Link>
          </li>
          <div
            className={`md:ml-8 text-xl md:my-0 my-7 ${
              isAuthenticated ? "block" : "hidden"
            }`}
          >
            <div
              className="px-5 py-3 rounded-3xl cursor-pointer bg-orange text-white hover:bg-[#E4B68D] font-semiBold flex w-fit items-center"
              onClick={() => setOpenProfile(!openProfile)}
            >
              Selamat datang, {data.name || ""} &nbsp;
              {openProfile ? <GoChevronUp /> : <GoChevronDown />}
            </div>
            <ul
              className={`bg-[#EFE8E1] absolute z-[-1] lg:right-12 py-2 transition-all duration-500 ease-in mt-2 w-[220px] rounded-xl ${
                openProfile ? "block" : "hidden"
              }`}
            >
              {Profile.map((link) => (
                <li
                  key={link.name}
                  className={`mx-3 text-xl my-2 p-2 pl-4 bg-[#FCF8F4] rounded-xl ${link.classname}`}
                >
                  <Link
                    to={link.link}
                    onClick={link.onClick}
                    className="duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
