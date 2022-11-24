import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import ProductCategory from "../ProductCategory/ProductCategory";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      this is home
      <ProductCategory></ProductCategory>
    </div>
  );
};

export default Home;
