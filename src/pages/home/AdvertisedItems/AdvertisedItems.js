import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaClock, FaLocationArrow, FaPhone, FaTimes } from "react-icons/fa";
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
  // console.log(advertisedProducts);

  return (
    <>
      {advertisedProducts?.length > 0 && (
        <div className="mt-20">
          <PrimaryHeading customClass="text-center">
            Our Available Products
          </PrimaryHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-4 lg:mx-1 my-8 mb-14 gap-7 justify-center ">
            {advertisedProducts?.map((product) => (
              <div
                key={product?._id}
                className="card    shadow-slate-600 shadow-lg rounded"
              >
                <div className="card-body">
                  <h2 className="card-title justify-center mb-5">
                    {product?.name}
                  </h2>

                  {/* // */}
                  <div className="">
                    <h3 className="text-sm mt-5 sm:mt-0  font-semibold">
                      {product?.sellerName}
                    </h3>
                    <div className="flex  text-sm gap-2 items-center">
                      <FaLocationArrow></FaLocationArrow>
                      <div> {product?.location}</div>
                    </div>
                    <div className="flex text-sm  gap-2 items-center">
                      <FaClock></FaClock>

                      <div className="text-sm">{product?.postTime}</div>
                    </div>
                    <div className="flex text-sm  gap-2 items-center">
                      <FaPhone></FaPhone>
                      <div> {product?.sellerMobileNo}</div>
                    </div>
                  </div>
                  {/* // */}
                  <div className="divider"></div>
                  <p>{product?.description}</p>
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
