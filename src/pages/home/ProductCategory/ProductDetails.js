import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";
import Skeleton from "../../../components/Spinner/Skeleton";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";
import BookingModal from "./BookingModal";

const ProductDetails = ({ productDetails }) => {
  useTitle("Product Details");

  const { user } = useContext(AuthContext);
  const { displayName, uid, email } = user;
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
    soldStatus,
    paymentStatus,
    _id,
  } = productDetails;
  // console.log(paymentStatus);
  ///Load seller for this product
  /// load seller data
  const {
    data: allSellerForVerification,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/users", "/seller"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/users/seller`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("laptop-utopia")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Skeleton></Skeleton>;
  }
  const verifiedSeller = allSellerForVerification?.find(
    (vSeller) => vSeller?.name === sellerName
  );

  //Handle report to admin

  const handleReportToAdmin = () => {
    const report = {
      name,
      img,
      reportedProductId: _id,
      reporterUserName: displayName,
      reporterUserEmail: email,
      reporterUserUid: uid,
    };
    fetch(`${process.env.REACT_APP_api_url}/reports`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          console.log("Data after report", data);
          toast.success("Items reported successfully.");
        }
      });
  };
  // console.log("for this product", verifiedSeller?.verifySeller);
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
            </div>
            {/* product info   */}
            {/* ///seller info workinG */}
            <div className="sm:self-end">
              <h3 className="text-xl mt-5 sm:mt-0  sm:text-right font-semibold">
                <label>
                  {verifiedSeller?.verifySeller === "verified" && (
                    <input
                      type="checkbox"
                      className="accent-blue-500  mr-2"
                      defaultChecked
                    />
                  )}
                  {sellerName}
                </label>
              </h3>
              <div className="flex sm:justify-end gap-2 items-center">
                <FaLocationArrow></FaLocationArrow>
                <div> {location}</div>
              </div>
              <div className="flex sm:justify-end gap-2 items-center">
                <FaClock></FaClock>
                <div> {postTime}</div>
              </div>
              <div className="flex sm:justify-end gap-2 items-center">
                <FaPhone></FaPhone>
                <div> {sellerMobileNo}</div>
              </div>
            </div>
            {/* seller info   */}
          </div>

          {/* /// */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="w-full mt-5 ">
              <label
                htmlFor="booking-modal"
                className="btn btn-primary w-full rounded"
              >
                Book Now
              </label>
            </div>
            <div className="w-full mt-5 ">
              <button
                onClick={() => handleReportToAdmin()}
                className="btn btn-primary w-full  btn-outline rounded"
              >
                Report to Admin
              </button>
            </div>
          </div>
        </div>
      </div>
      {clearModal && (
        <BookingModal
          productDetails={productDetails}
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
