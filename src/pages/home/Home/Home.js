import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../hooks/useTitle/useTitle";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Banner from "../Banner/Banner";
import CustomerReview from "../CustomerReview/CustomerReview";
import CustomerReview2 from "../CustomerReview/CustomerReview2";
import ProductCategory from "../ProductCategory/ProductCategory";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <AdvertisedItems></AdvertisedItems>
      <ProductCategory></ProductCategory>
      <CustomerReview></CustomerReview>
      <CustomerReview2></CustomerReview2>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
