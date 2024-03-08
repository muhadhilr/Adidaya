import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="bg-purple-bg flex flex-col justify-center h-full p-10 rounded-3xl">
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
            <div className="my-5">
              <Button type={"submit"}>Daftar Sebagai Investor</Button>
            </div>
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
      </form>
      <div>
        <p>Ingin Mendaftar Sebagai Mitra? <a href="https://wa.me/+6281234567890?text=Halo!%20Saya%20ingin%20mendaftar%20sebagai%20mitra" className="font-bold">Hubungi Kami</a></p>
      </div>
    </div>
  );
};

export default Login;
