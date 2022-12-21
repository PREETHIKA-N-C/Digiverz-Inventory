import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const VizProduct = () => {
  const { id } = useParams();
  const [data_temp, setDataTemp] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/vizprod/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div class="flex flex-row align-middle justify-center">
      <h1 class="h-1" style={{ color: "white", margin: "60px" }}>
        Hello product {id}
      </h1>
    </div>
  );
};

export default VizProduct;
