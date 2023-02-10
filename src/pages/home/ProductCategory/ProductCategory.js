import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import SkeletonHorizontal from "../../../components/Spinner/SkeletonHorizontal";
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
    return <SkeletonHorizontal></SkeletonHorizontal>;
  }

  return (
    <div className="mt-28 mb-36">
      <PrimaryHeading customclassName="text-center ">
        Product Category
      </PrimaryHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-4 lg:mx-1 my-8 mb-14 gap-5  ">
        {categories?.map((category) => (
          // workinG
          <div key={category?._id}>
            <div className="relative h-48  shadow-slate-600    ">
              <div className="category-img ">
                <img
                  className="w-full h-48  "
                  src={category?.categoryImg}
                  alt=""
                />
              </div>
              <Link to={`/productCategory/${category?.categoryName}`}>
                <button className="btn   btn-primary mt-5">Products</button>
              </Link>
              <div className=" absolute top-0">
                <PrimaryHeading customclassName={"text-white text-4xl m-5"}>
                  {category?.categoryName}
                </PrimaryHeading>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
