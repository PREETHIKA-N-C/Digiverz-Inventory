import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SliderCarousel } from "../Components/SliderCarousel";

const VizProduct = () => {
  const { id } = useParams();
  const [data_temp, setDataTemp] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8000/vizprod/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataTemp(data.message);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "inherit" }}>
      {Object.keys(data_temp).length <= 0 ? (
        ""
      ) : (
        <SliderCarousel data={data_temp}></SliderCarousel>
      )}
    </div>
  );
};

export default VizProduct;
