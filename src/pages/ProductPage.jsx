import React, { useState, useEffect } from "react";
import CardProduct from "../elements/CardProduct";
import BackgroundImage from "../assets/images/background/bgProductpage.png";
import Image from "../assets/images/product-4.png";
import withNavbar from "../hoc/withNavbar";
import axios from "axios";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://modaleen-def24eca5066.herokuapp.com/api/projects")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="flex justify-center min-h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-2 md:w-11/12 md:py-20 overflow-y-auto">
        <div className="flex flex-col justify-center items-center text-center px-5">
          <div className="md:w-1/2">
            <h1 className="text-h2 md:text-h1 font-bold">Daftar UMKM</h1>
            <p className="text-grey md:font-medium">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan.
            </p>
          </div>
          <div className="w-full text-justify flex flex-col md:flex-row flex-wrap justify-center my-8">
            {Array.isArray(data.projects) && data.projects.length > 0 ? (
              data.projects.map((item, index) => (
                <CardProduct
                  key={item.ID}
                  title={item.project_name}
                  children={item.description}
                  link={`/detail-produk/${item.ID}`}
                  image={item.image_link}
                />
              ))
            ) : (
              <p className="text-center">Tidak ada data ditemukan</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNavbar(ProductPage)