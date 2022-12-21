import React from "react";
import { useParams } from "react-router";
const VizProduct = () => {
  const { id } = useParams();

  return (
    <div class="flex flex-row align-middle justify-center">
      <h1 class="h-1" style={{ color: "white", margin: "60px" }}>
        Hello product {id}
      </h1>
    </div>
  );
};

export default VizProduct;
