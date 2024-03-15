import React from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const FormProfil = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-h2 font-bold leading-tight">Profil Investor</h1>
        <p className="text-p1 text-red font-medium text-p2">Harap Lengkapi Data Berikut</p>
      </div>
      <div className="mt-5">
        <div className="bg-brown-bg flex flex-col justify-center items-center h-full px-10 pb-10 rounded-3xl">
          <form action="">
            <div className="flex flex-col">
              <div className="flex w-full">
                <div className="w-full mr-5">
                  <Input placeholder={"Masukkan Nama Lengkap"} type={"text"}>
                    Nama Lengkap
                  </Input>
                  <Input placeholder={"Masukkan Alamat"} type={"text"}>
                    Alamat
                  </Input>
                </div>
                <div className="w-full">
                  <Input
                    placeholder={"Masukkan Nomor Rekening"}
                    type={"number"}
                  >
                    Nomor Rekening
                  </Input>
                  <Input placeholder={"Masukkan Jenis Bank"} type={"text"}>
                    Jenis Bank
                  </Input>
                </div>
              </div>
              <div className="">
                <Button type={"submit"} className="w-full text-center">
                  Simpan Data
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormProfil;
