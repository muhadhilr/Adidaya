import React, { useState, useEffect } from "react";
import CardProduct from "../elements/CardProduct";
import BackgroundImage from "../assets/images/background/bgProductpage.png";
import withNavbar from "../hoc/withNavbar";
import DaftarUMKM from "../utils/DaftarUMKM.json";

const ProductPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DaftarUMKM);
  }, []);

  return (
    <div
      className="flex justify-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mt-20 md:w-11/12 md:py-20">
        <div className="flex flex-col justify-center items-center text-center px-5">
          <div className="md:w-1/2">
            <h1 className="text-h2 md:text-h1 font-bold">Daftar UMKM</h1>
            <p className="text-grey md:font-medium">
              Lorem ipsum dolor sit amet consectetur adipiscing elit semper
              dalar elementum tempus hac tellus libero accumsan.
            </p>
          </div>
          <div className="w-full text-justify flex flex-col md:flex-row flex-wrap justify-center my-8">
            {data.map((item, index) => (
              <CardProduct
                key={item.id}
                image={item.image}
                title={item.name}
                children={item.description}
                link={`/detail-produk/${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNavbar(ProductPage);
