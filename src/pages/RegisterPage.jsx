import React from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import Image from "../assets/images/loginImage.png";

const RegisterPage = () => {
  return (
    <div className="h-screen bg-brown-bg flex font-medium">
      <div className="bg-purple-bg flex flex-col justify-center h-full p-10 rounded-3xl flex-1">
        <h1 className="text-h1 text-purple font-bold">Daftar</h1>
        <form action="">
          <div className="flex w-full">
            <div className="w-full mr-5">
              <Input placeholder={"Masukkan Nama Lengkap"} type={"text"}>
                Nama Lengkap
              </Input>
              <Input placeholder={"Masukkan Password"} type={"password"}>
                Password
              </Input>
            </div>
            <div className="w-full">
              <Input placeholder={"Masukkan Email"} type={"email"}>
                Email
              </Input>
              <Input
                placeholder={"Masukkan Konfirmasi Password"}
                type={"password"}
              >
                Konfirmasi Password
              </Input>
            </div>
          </div>
          <div className="mb-5 mt-3">
            <Button type={"submit"} className="w-full text-center font-semiBold">
              Daftar Sebagai Investor
            </Button>
          </div>
        </form>
        <div>
          <p>
            Ingin Mendaftar Sebagai Mitra?{" "}
            <a
              href="https://wa.me/+6281234567890?text=Halo!%20Saya%20ingin%20mendaftar%20sebagai%20mitra"
              className="text-green"
            >
              Hubungi Kami
            </a>
          </p>
        </div>
      </div>
      <div className="flex-1">
        <img src={Image} alt="" className="h-screen" />
      </div>
    </div>
  );
};

export default RegisterPage;
