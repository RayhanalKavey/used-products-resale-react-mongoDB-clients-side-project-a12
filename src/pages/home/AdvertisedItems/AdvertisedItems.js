import React from "react";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";

const AdvertisedItems = () => {
  return (
    <div className="mt-20">
      <PrimaryHeading customClass="text-center">
        Our Available Products
      </PrimaryHeading>
      {/* card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3  mx-4 lg:mx-1 my-8 mb-14 gap-5 justify-center justify-items-center">
        <div className="card    shadow-slate-600 shadow-lg rounded">
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
          <figure>
            <img
              className="w-full"
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
          </figure>
        </div>
      </div>
      {/* card */}
    </div>
  );
};

export default AdvertisedItems;
