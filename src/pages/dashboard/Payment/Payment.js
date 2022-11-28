import React from "react";
import { useLoaderData } from "react-router-dom";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import useTitle from "../../../hooks/useTitle/useTitle";

const Payment = () => {
  useTitle("Payment");
  const bookedProduct = useLoaderData();
  // console.log(bookedProduct);
  const {
    buyerName,
    email,
    itemImg,
    meetingLocation,
    phone,
    price,
    productName,
    _id,
  } = bookedProduct;
  console.log(bookedProduct);
  return (
    <div>
      <PrimaryHeading customClass="text-center mt-12">
        Billing Information for{" "}
        <span className="text-primary font-semibold">{productName}</span>
      </PrimaryHeading>
      {/* <div className="text-accent w-96 mt-10 mx-auto  shadow-slate-600 shadow-lg rounded p-6 "></div> */}
    </div>
  );
};

export default Payment;
