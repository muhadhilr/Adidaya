import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="bg-purple-bg flex flex-col justify-center h-full p-10">
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
            <a href="" className="font-bold">
              Daftar Disini
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
