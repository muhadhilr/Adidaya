import React from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";

const ProfilInvestor = () => {
  return (
    <div className="bg-purple-bg flex flex-col justify-center h-full p-10 rounded-3xl">
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
              <Input placeholder={"Masukkan Nomor Rekening"} type={"number"}>
                Nomor Rekening
              </Input>
              <Input placeholder={"Masukkan Jenis Bank"} type={"text"}>
                Jenis Bank
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

export default ProfilInvestor;
