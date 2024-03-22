import React, { useEffect, useState } from "react";
import DetailProductHeader from "../fragments/ProductComponent/DetailProductHeader";
import DetailProductContent from "../fragments/ProductComponent/DetailProductContent";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailProductPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://modaleen-def24eca5066.herokuapp.com/api/project/${id}`)
      .then((res) => {
        setData(res.data.projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <DetailProductHeader title={data.project_name} image={data.image_link}>
        {data.description}
      </DetailProductHeader>
      <DetailProductContent duration={data.duration} profit={data.profit} modal={data.price}>

      </DetailProductContent>
    </>
  );
};

export default DetailProductPage;
