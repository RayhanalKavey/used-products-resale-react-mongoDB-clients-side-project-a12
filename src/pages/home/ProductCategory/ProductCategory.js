import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";
import "./ProductCategory.css";

const ProductCategory = () => {
  useTitle("Product Category");
  /// --2 get product category data from data base using TanStack query //refetch
  const { data: categories, isLoading } = useQuery({
    queryKey: ["productCategory"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_api_url}/productCategory`
        // `productCategory.json`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <PrimaryHeading customClass="text-center mt-20">
        Product Category
      </PrimaryHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-4 lg:mx-1 my-8 mb-14 gap-5  ">
        {categories?.map((category) => (
          // workinG
          <Link
            key={category?._id}
            to={`/productCategory/${category?.categoryName}`}
          >
            <div className="relative h-48  shadow-slate-600 shadow-lg   ">
              <div className="category-img ">
                <img
                  className="w-full h-48  rounded"
                  src={category?.categoryImg}
                  alt=""
                />
              </div>
              <div className=" absolute top-0">
                <PrimaryHeading customClass={"text-white text-4xl m-5"}>
                  {category?.categoryName}
                </PrimaryHeading>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
