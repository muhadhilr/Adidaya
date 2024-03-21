import React, { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Add from "../../assets/icon/addStatement.png";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const FinanceStatement = () => {
  const fileInputRef = useRef(null);
  const handleRefClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const [fileName, setFileName] = useState(null);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-h2 font-bold">Laporan Keuangan</h1>
        <p className="text-p1 text-red font-medium">
          Harap Perbarui Laporan Keuangan Setiap Bulan
        </p>
      </div>
      <div className="mt-5">
        <div className="bg-brown-bg flex flex-col justify-center h-full p-10 rounded-3xl">
          <form action="">
            <div
              className="flex flex-col justify-center items-center bg-[#FCF8F4] h-[250px] w-[450px] rounded-3xl"
              onClick={handleRefClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={(e) => setFileName(e.target.files[0])}
              />
              {fileName ? (
                <div>
                  <p>{fileName.name}</p>
                </div>
              ) : (
                <img src={Add} alt="" />
              )}
            </div>
            <div>
              <Input
                bgColor="#FCF8F4"
                placeholder={"Masukkan Pendapatan Bulan Ini"}
                type={"email"}
              >
                Pendapatan Bulan Ini
              </Input>
            </div>
            <div className="mt-5">
              <Button className="w-full font-medium" type={"submit"}>Simpan</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FinanceStatement;
