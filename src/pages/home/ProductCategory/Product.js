import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle/useTitle";
import ProductDetails from "./ProductDetails";

const Product = () => {
  useTitle("Products");

  const data = useLoaderData();
  const products = data?.products;
  // console.log(products);
  return (
    <>
      <div className="grid  grid-cols-1 justify-items-center mx-3 my-14 gap-10">
        {products?.map((productDetails, i) => (
          <ProductDetails
            key={i}
            productDetails={productDetails}
          ></ProductDetails>
        ))}
      </div>
    </>
  );
};

export default Product;
