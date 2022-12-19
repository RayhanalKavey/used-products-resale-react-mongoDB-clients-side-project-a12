// import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle/useTitle";
import ProductDetails from "./ProductDetails";

const Product = () => {
  useTitle("Products");

  const data = useLoaderData();
  const products = data;
  const unsoldProducts = products?.filter(
    (unsold) => unsold?.paymentStatus !== "paid"
  );
  return (
    <>
      <div className="grid  grid-cols-1  mx-4 my-14 gap-10">
        {unsoldProducts?.map((productDetails) => (
          <ProductDetails
            key={productDetails?._id}
            productDetails={productDetails}
          ></ProductDetails>
        ))}
      </div>
    </>
  );
};

export default Product;
