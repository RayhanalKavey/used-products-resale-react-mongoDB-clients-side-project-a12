import React from "react";
import useTitle from "../../../hooks/useTitle/useTitle";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import ProductCategory from "../ProductCategory/ProductCategory";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <ProductCategory></ProductCategory>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
