import React from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const FormProfil = () => {

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-h2 font-bold">Profil Mitra</h1>
        <p className="text-p1 text-red font-medium">Harap Lengkapi Data Berikut</p>
      </div>
      <div className="mt-5">
        <div className="bg-brown-bg flex flex-col justify-center h-full p-10 rounded-3xl">
          <form action="">
            <div className="flex flex-col">
              <div className="flex w-full">
                <div className="flex-1">
                  <Input bgColor="#FCF8F4" placeholder={"Masukkan Nama Mitra"} type={"text"}>
                    Nama Usaha
                  </Input>
                </div>
                <div className="flex-1 lg:ml-5">
                  <Input bgColor="#FCF8F4"
                    placeholder={"Masukkan Nomor Rekening"}
                    type={"number"}
                  >
                    Nomor Rekening
                  </Input>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1">
                  <Input bgColor="#FCF8F4"
                    placeholder={"Masukkan Estimasi Tiap Bulan"}
                    type={"number"}
                  >
                    Estimasi Tiap Bulan
                  </Input>
                </div>
                <div className="flex-1 lg:ml-5">
                  <Input bgColor="#FCF8F4" placeholder={"Masukkan Jenis Bank"} type={"text"}>
                    Jenis Bank
                  </Input>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1">
                  <Input bgColor="#FCF8F4" placeholder={"Masukkan Alamat"} type={"text"}>
                    Alamat UMKM
                  </Input>
                </div>
                <div className="flex-1 lg:ml-5">
                  <Input bgColor="#FCF8F4" placeholder={"Masukkan Email"} type={"email"}>
                    Email
                  </Input>
                </div>
              </div>
            </div>
            <div className="my-5 font-medium">
              <Button type={"submit"} className="w-full text-center">
                Simpan Data
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormProfil;
