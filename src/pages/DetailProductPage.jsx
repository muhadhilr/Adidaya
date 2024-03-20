import React from "react";
import DetailProductHeader from "../fragments/ProductComponent/DetailProductHeader";
import DetailProductContent from "../fragments/ProductComponent/DetailProductContent";
import { useParams } from "react-router-dom";
import DaftarUMKM from "../utils/DaftarUMKM.json";

const DetailProductPage = () => {
  const { id } = useParams();

  const product = DaftarUMKM.find((product) => product.id === parseInt(id));
  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  return (
    <>
      <DetailProductHeader title={product.name}>
        {product.description}
      </DetailProductHeader>
      <DetailProductContent />
    </>
  );
};

export default DetailProductPage;
