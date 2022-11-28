import React, { useContext, useEffect, useState } from "react";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import useTitle from "../../../hooks/useTitle/useTitle";
import axios from "axios";
import toast from "react-hot-toast";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyOrders = () => {
  useTitle("My Order");
  const { user } = useContext(AuthContext);
  const [allBookedProducts, setAllBookedProducts] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_api_url}/bookings`
      );
      setAllBookedProducts(result.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const bookedProducts = allBookedProducts.filter(
    (product) => product?.email === user?.email
  );

  // const {
  //   data: bookedProducts,
  //   isLoading,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["bookings"],
  //   queryFn: async () => {
  //     const res = await fetch(`${process.env.REACT_APP_api_url}/bookings`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  // /// Check loading state
  // if (isLoading) {
  //   return <Spinner></Spinner>;
  // }
  // console.log(bookedProducts);
  return (
    <div className="mt-10">
      <PrimaryHeading customClass="text-center">My Orders</PrimaryHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-4 lg:mx-8 mt-8 mb-14 gap-8 justify-center ">
        {bookedProducts?.map((product) => {
          const {
            productName,
            price,
            phone,
            meetingLocation,
            buyerName,
            itemImg,
            _id,
          } = product;

          return (
            <div
              key={product?._id}
              className="card  shadow-slate-600 shadow-lg rounded"
            >
              <figure>
                <img
                  className="w-full max-h-52"
                  src={itemImg}
                  alt="booked product"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title mb-4 ">{productName}</h2>
                <div className="divider mt-0 pt-0"></div>
                <h3 className="text-sm mt-5 sm:mt-0  font-semibold">
                  {buyerName}
                </h3>
                <div className="flex  text-sm gap-2 items-center">
                  <FaLocationArrow></FaLocationArrow>
                  <div>Meeting Location: {meetingLocation}</div>
                </div>
                <div className="flex text-sm  gap-2 items-center">
                  <FaPhone></FaPhone>
                  <div>Contact No.: {phone}</div>
                </div>
                <div className="divider mt-0 pt-0"></div>
                <div>
                  <span className="font-semibold">Price:</span> {price} tk
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/dashboard/payment/${_id}`}>
                    <button className="btn btn-primary w-full mt-5">
                      Pay Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
