import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const ProfilMitra = () => {
  return (
    <div className="bg-purple-bg flex flex-col justify-center h-full p-10 rounded-3xl">
      <form action="">
        <div className="flex flex-col">
          <div className="flex w-full">
            <div className="w-full mr-5">
              <Input placeholder={"Masukkan Nama Mitra"} type={"text"}>
                Nama Usaha
              </Input>
              <Input
                placeholder={"Masukkan Estimasi Tiap Bulan"}
                type={"number"}
              >
                Estimasi Tiap Bulan
              </Input>
              <Input placeholder={"Masukkan Alamat"} type={"text"}>
                Alamat UMKM
              </Input>
            </div>
            <div className="w-full">
              <Input placeholder={"Masukkan Nomor Rekening"} type={"number"}>
                Nomor Rekening
              </Input>
              <Input placeholder={"Masukkan Jenis Bank"} type={"text"}>
                Jenis Bank
              </Input>
              <Input placeholder={"Masukkan Email"} type={"email"}>
                Email
              </Input>
            </div>
          </div>
          <div className="my-5">
            <Button type={"submit"}>Simpan Data</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilMitra;
