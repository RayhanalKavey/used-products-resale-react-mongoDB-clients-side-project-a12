import { useQuery } from "@tanstack/react-query";
import React from "react";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import Spinner from "../../../components/Spinner/Spinner";

const AdvertisedItems = () => {
  /// load all advertised product
  const {
    data: allProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/products"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/products`);
      const data = await res.json();
      return data;
    },
  });
  const advertisedProducts = allProducts?.filter(
    (prod) =>
      prod?.advertisementStatus === "advertised" &&
      prod?.soldStatus === "Available"
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  console.log(advertisedProducts);

  return (
    <>
      {advertisedProducts?.length > 0 && (
        <div className="mt-20">
          <PrimaryHeading customClass="text-center">
            Our Available Products
          </PrimaryHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-4 lg:mx-1 my-8 mb-14 gap-7 justify-center justify-items-center">
            {advertisedProducts?.map((product) => (
              <div
                key={product?._id}
                className="card    shadow-slate-600 shadow-lg rounded"
              >
                <div className="card-body">
                  <h2 className="card-title">{product?.name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <figure>
                  <img
                    className="w-full max-h-60"
                    src={product?.img}
                    alt="advertised product"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertisedItems;
