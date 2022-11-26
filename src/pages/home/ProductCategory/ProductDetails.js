import React, { useState } from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import useTitle from "../../../hooks/useTitle/useTitle";
import BookingModal from "./BookingModal";

const ProductDetails = ({ productDetails }) => {
  useTitle("Product Details");

  const [clearModal, setClearModal] = useState(true);
  const {
    img,
    name,
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postTime,
    sellerName,
    conditionType,
    sellerMobileNo,
    description,
    yearOfPurchase,
  } = productDetails;
  // console.log(productDetails);
  return (
    <div className="card lg:card-side bg-base-100 rounded h-full  shadow-slate-600 shadow-lg ">
      <figure className="lg:w-1/3">
        <img className="h-full w-full" src={img} alt="Album" />
      </figure>
      <div className="card-body lg:w-2/3">
        <div>
          <h2 className="text-2xl font-bold mb-3">{name}</h2>
          <p>{description}</p>
          {/* divider */}
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider"></div>
          </div>
          {/* divider */}
          <div className="flex justify-between flex-col sm:flex-row mt-5">
            {/* /// product info*/}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl mb-3 font-semibold">
                Product Information
              </h3>

              <div className="flex  gap-2 ">
                <div className="font-semibold">Condition:</div>
                <div> {conditionType}</div>
              </div>
              <div className="flex gap-2 ">
                <div className="font-semibold">Purchase Year:</div>
                <div> {yearOfPurchase}</div>
              </div>
              <div className="flex gap-2 ">
                <div className="font-semibold">Use Year:</div>
                <div> {yearsOfUse}</div>
              </div>
              <div className="flex gap-2 ">
                <div className="font-semibold">Original Price:</div>
                <div> {originalPrice} tk</div>
              </div>
              <div className="flex gap-2 ">
                <div className="font-semibold">Resale Price:</div>
                <div> {resalePrice} tk</div>
              </div>
              <div className="flex gap-2 ">
                <div className="font-semibold">Post Time:</div>
                <div> {postTime} </div>
              </div>
            </div>
            {/* product info   */}
            {/* ///seller info */}
            <div className="sm:self-end">
              <h3 className="text-xl mt-5 sm:mt-0  sm:text-right font-semibold">
                {sellerName}
              </h3>
              <div className="flex sm:justify-end gap-2 items-center">
                <FaLocationArrow></FaLocationArrow>
                <div> {location}</div>
              </div>
              <div className="flex sm:justify-end gap-2 items-center">
                <FaPhone></FaPhone>
                <div> {sellerMobileNo}</div>
              </div>
            </div>
            {/* seller info   */}
          </div>

          {/* /// */}
          <div className="w-full mt-5 ">
            <label
              htmlFor="booking-modal"
              className="btn btn-primary w-full rounded"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
      {clearModal && (
        <BookingModal
          itemName={name}
          itemImg={img}
          productPrice={resalePrice}
          setClearModal={setClearModal}
        ></BookingModal>
      )}
    </div>
  );
};

export default ProductDetails;
