import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-purple-bg flex flex-col justify-center h-full p-10 rounded-3xl">
      <h1 className="text-h1 text-purple font-bold">Masuk</h1>
      <form action="">
        <div>
          <Input type={"email"} placeholder={"Masukkan Email"}>
            Email
          </Input>
          <Input type={"password"} placeholder={"Masukkan Password"}>
            Password
          </Input>
        </div>
        <div className="flex justify-end">
          <a href="">Lupa Password?</a>
        </div>
        <div className="my-5">
          <Button>Masuk</Button>
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
  );
};

export default Login;
