// import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";
import ProductDetails from "./ProductDetails";

const Product = () => {
  useTitle("Products");

  const data = useLoaderData();
  const products = data;

  return (
    <>
      <div className="grid  grid-cols-1 justify-items-center mx-3 my-14 gap-10">
        {products?.map((productDetails) => (
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
