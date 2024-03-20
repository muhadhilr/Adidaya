import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import Image from "../assets/images/loginImage.png";
import withNavbar from "../hoc/withNavbar";
import BackgroundImage from "../assets/images/background/bgOtentikasi.png";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div
      className="mt-10 bg-brown-bg flex font-medium"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="h-screen lg:h-full flex flex-col justify-center p-12 rounded-3xl flex-1">
        <h1 className="text-h1 font-bold">Masuk</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              placeholder={"Masukkan Email"}
              type={"email"}
              name="email"
              value={formData.email}
              onChange={handleChange}
            >
              Email
            </Input>
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
          <div>
            <input
              type="checkbox"
              id="ingatSaya"
              checked={rememberMe}
              onChange={handleRememberMe}
              className="mr-2 custom-checkbox"
            />
            <label htmlFor="ingatSaya" className="text-green">
              Ingat Saya
            </label>
          </div>
          <div className="my-5">
            <Button type={"submit"} className="w-full text-center">
              Masuk
            </Button>
          </div>
          <div>
            <p>
              Belum Punya Akun?{" "}
              <Link to="/daftar" className="text-green">
                Daftar Disini
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex-1 hidden lg:block">
        <img src={Image} alt="" className="h-screen" />
      </div>
    </div>
  );
};

export default withNavbar(LoginPage);
