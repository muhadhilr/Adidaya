import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import Image from "../assets/images/loginImage.png";
import BackgroundImage from "../assets/images/background/bgOtentikasi.png";
import withNavbar from "../hoc/withNavbar";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password dan konfirmasi password harus sama.");
      return;
    }
    console.log(formData);
  };
  
  return (
    <div
      className="bg-brown-bg flex font-medium justify-center items-center mt-10"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-purple-bg flex flex-col justify-center h-full p-10 rounded-3xl flex-1">
        <h1 className="text-h1 text-purple font-bold text-center lg:text-left">
          Daftar
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <Input
                  placeholder={"Masukkan Nama Lengkap"}
                  type={"text"}
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                >
                  Nama Lengkap
                </Input>
              </div>
              <div className="flex-1 lg:ml-5">
                <Input
                  placeholder={"Masukkan Email"}
                  type={"email"}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                >
                  Email
                </Input>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <Input
                  placeholder={"Masukkan Password"}
                  type={"password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                >
                  Password
                </Input>
              </div>
              <div className="flex-1 lg:ml-5">
                <Input
                  placeholder={"Masukkan Konfirmasi Password"}
                  type={"password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                >
                  Konfirmasi Password
                </Input>
              </div>
            </div>
          </div>
          <div className="my-5">
            <Button
              type={"submit"}
              className="w-full text-center font-semiBold"
            >
              Daftar Sebagai Investor
            </Button>
          </div>
        </form>
        <div className="text-center lg:text-left">
          <p>
            Ingin Mendaftar Sebagai Mitra? &nbsp;
            <a
              href="https://wa.me/+6281234567890?text=Halo!%20Saya%20ingin%20mendaftar%20sebagai%20mitra"
              className="text-green"
            >
              Hubungi Kami
            </a>
          </p>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <img src={Image} alt="" className="h-screen" />
      </div>
    </div>
  );
};

export default withNavbar(RegisterPage);
