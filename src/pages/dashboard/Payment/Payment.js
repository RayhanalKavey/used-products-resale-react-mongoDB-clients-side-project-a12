import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import useTitle from "../../../hooks/useTitle/useTitle";
import CheckoutForm from "./CheckoutForm";
import SecondaryHeading from "../../../components/SecondaryHeading/SecondaryHeading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

//===============///=========================//
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
  return (
    <div>
      <PrimaryHeading customClass="text-center mt-12">
        Billing Information for{" "}
        <span className="text-primary font-semibold">{productName}</span>
      </PrimaryHeading>
      <div className=" w-96 mt-10 mx-auto  shadow-slate-600 shadow-lg rounded px-6 py-8 ">
        <Elements stripe={stripePromise}>
          <SecondaryHeading customClass="text-center mb-6">
            Payment Details
          </SecondaryHeading>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
