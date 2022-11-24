import { useQuery } from "@tanstack/react-query";
import React from "react";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import Spinner from "../../../components/Spinner/Spinner";

const ProductCategory = () => {
  /// --2 get product category data from data base using TanStack query //refetch
  const { data: productCategory, isLoading } = useQuery({
    queryKey: ["productCategory"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_api_url}/productCategory`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  console.log(productCategory);

  return (
    <div>
      <PrimaryHeading customClass={""}>Product Category</PrimaryHeading>
      <div className="grid grid-col-2 lg:grid-cols-3">
        {productCategory?.map((category) => (
          <div
            key={category?._id}
            className="card w-96 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img src={category?.categoryImg} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{category?.categoryName}</h2>

              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
