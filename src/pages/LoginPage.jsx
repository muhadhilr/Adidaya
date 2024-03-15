import React, { useState } from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { Link } from "react-router-dom";
import Image from "../assets/images/loginImage.png";

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="h-screen bg-brown-bg flex font-medium">
      <div className="flex flex-col justify-center p-12 rounded-3xl flex-1">
        <h1 className="text-h1 font-bold">Masuk</h1>
        <form action="">
          <div>
            <Input type={"email"} placeholder={"Masukkan Email"}>
              Email
            </Input>
            <Input type={"password"} placeholder={"Masukkan Password"}>
              Password
            </Input>
          </div>
          <div>
            <input
              type="checkbox"
              id="ingatSaya"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-2"
            />
            <label htmlFor="ingatSaya" className="text-green">Ingat Saya</label>
          </div>
          <div className="my-5">
            <Button type={"submit"} className="w-full text-center">
              Masuk
            </Button>
          </div>
          <div>
            <p>
              Belum Punya Akun?{" "}
              <Link to="/register" className="font-bold">
                Daftar Disini
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex-1">
        <img src={Image} alt="" className="h-screen" />
      </div>
    </div>
  );
};

export default LoginPage;