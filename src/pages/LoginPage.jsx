import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { Link, useParams } from "react-router-dom";
import Image from "../assets/images/loginImage.png";
import withNavbar from "../hoc/withNavbar";
import BackgroundImage from "../assets/images/background/bgOtentikasi.png";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const LoginPage = () => {
  const { role } = useParams();
  const signIn = useSignIn();

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

    let url;
    if (role === "investor") {
      url = "https://modaleen-def24eca5066.herokuapp.com/api/login";
    } else if (role === "mitra") {
      url = "https://modaleen-def24eca5066.herokuapp.com/api/loginowner";
    }

    axios
      .post(url, formData)
      .then((res) => {
        console.log(res.data.token);
        signIn({
          token: res.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: {
            role: role,
          }});
        Toastify({
          text: "Login Berhasil",
          duration: 3000,
          newWindow: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#4BB543",
          },
          onClick: function () {},
        }).showToast();
      })
      .catch((err) => {
        console.log(err);
        Toastify({
          text: "Akun tidak ditemukan, periksa kembali email dan password",
          duration: 3000,
          newWindow: true,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
            background: "#FF0000",
          },
          onClick: function () {},
        }).showToast();
      });
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div
      className="mt-10 bg-brown-bg flex font-medium items-center"
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
