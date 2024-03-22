import React, { useEffect, useState } from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import axios from "axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useNavigate } from "react-router-dom";

const FormProfil = () => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    project: "",
    bank_number: "",
    email: "",
    bank_name: "",
    estimate_profit: "",
    address: "",
  });
  const token = useAuthHeader();
  const auth = useAuthUser();
  const Navigate = useNavigate();

  useEffect(() => {
    if (auth.role !== 'mitra') {
      Navigate('/profil-investor');
    }
    axios
      .get("https://modaleen-def24eca5066.herokuapp.com/api/validateowner", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://modaleen-def24eca5066.herokuapp.com/api/updateowner",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-h2 font-bold">Profil Mitra</h1>
        <p className="text-p1 text-red font-medium">
          Harap Lengkapi Data Berikut
        </p>
      </div>
      <div className="mt-5">
        <div className="bg-brown-bg flex flex-col justify-center h-full p-10 rounded-3xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex w-full">
                <div className="flex-1">
                  <Input
                    bgColor="#FCF8F4"
                    placeholder={"Masukkan Nama Mitra"}
                    type={"text"}
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                  >
                    Nama Usaha
                  </Input>
                </div>
                <div className="flex-1 lg:ml-5">
                  <Input
                    bgColor="#FCF8F4"
                    placeholder={"Masukkan Nomor Rekening"}
                    type={"number"}
                    name="bank_number"
                    value={formData.bank_number}
                    onChange={handleInputChange}
                  >
                    Nomor Rekening
                  </Input>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1">
                  <Input
                    bgColor="#FCF8F4"
                    placeholder={"Masukkan Estimasi Tiap Bulan"}
                    type={"number"}
                    name="estimate_profit"
                    value={formData.estimate_profit}
                    onChange={handleInputChange}
                  >
                    Estimasi Tiap Bulan
                  </Input>
                </div>
                <div className="flex-1 lg:ml-5">
                  <Input
                    bgColor="#FCF8F4"
                    placeholder={"Masukkan Jenis Bank"}
                    type={"text"}
                    name="bank_name"
                    value={formData.bank_name}
                    onChange={handleInputChange}
                  >
                    Jenis Bank
                  </Input>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex-1">
                  <Input
                    bgColor="#FCF8F4"
                    placeholder={"Masukkan Alamat"}
                    type={"text"}
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  >
                    Alamat UMKM
                  </Input>
                </div>
                <div className="flex-1 lg:ml-5">
                  <Input
                    bgColor="#FCF8F4"
                    placeholder={"Masukkan Email"}
                    type={"email"}
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  >
                    Email
                  </Input>
                </div>
              </div>
            </div>
            <div className="my-5 font-medium">
              <Button type="submit" className="w-full text-center">
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
