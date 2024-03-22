import React, { useEffect, useState } from "react";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import Toastify from "toastify-js";
import withNavbar from "../../hoc/withNavbar";

const FormProfil = () => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({});
  const token = useAuthHeader();

  useEffect(() => {
    axios
      .get("https://modaleen-def24eca5066.herokuapp.com/api/validate", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data.user);
        setFormData({
          name: res.data.user.name,
          address: res.data.user.address,
          account_number: res.data.user.account_number,
          bank_name: res.data.user.bank_name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithNumber = {
      ...formData,
      account_number: parseInt(formData.account_number, 10),
    };
    axios
      .put(
        "https://modaleen-def24eca5066.herokuapp.com/api/updateuser",
        formDataWithNumber,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        Toastify({
          text: "Update Profil Berhasil",
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
        Toastify({
          text: "Gagal Update User",
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

  return (
    <div className={`h-screen flex flex-col justify-center items-center`}>
      <div className="text-center">
        <h1 className="text-h2 font-bold leading-tight">Profil Investor</h1>
        <p
          className={`text-p1 text-red font-medium text-p2 ${
            data.address ? "hidden" : ""
          }`}
        >
          Harap Lengkapi Data Berikut
        </p>
        <p
          className={`text-p1 text-green font-medium text-p2 ${
            data.address ? "" : "hidden"
          }`}
        >
          Form Edit Profil
        </p>
      </div>
      <div className="mt-5">
        <div className="bg-brown-bg flex flex-col justify-center items-center h-full px-10 pb-10 rounded-3xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex w-full mt-5">
                <div className="w-full mr-5">
                  <Input
                    placeholder={"Masukkan Nama Lengkap"}
                    type={"text"}
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                  >
                    Nama Lengkap
                  </Input>
                  <Input
                    placeholder={"Masukkan Alamat"}
                    type={"text"}
                    name="address"
                    value={formData.address || ""}
                    onChange={handleChange}
                  >
                    Alamat
                  </Input>
                </div>
                <div className="w-full">
                  <Input
                    placeholder={"Masukkan Nomor Rekening"}
                    type={"number"}
                    name="account_number"
                    value={formData.account_number || ""}
                    onChange={handleChange}
                  >
                    Nomor Rekening
                  </Input>
                  <Input
                    placeholder={"Masukkan Jenis Bank"}
                    type={"text"}
                    name="bank_name"
                    value={formData.bank_name || ""}
                    onChange={handleChange}
                  >
                    Jenis Bank
                  </Input>
                </div>
              </div>
              <div className="mt-5">
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

export default withNavbar(FormProfil);
