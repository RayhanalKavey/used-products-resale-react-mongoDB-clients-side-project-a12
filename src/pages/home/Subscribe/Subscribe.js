import React from "react";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";

const Subscribe = () => {
  return (
    <section className="container mx-auto text-center py-20">
      <PrimaryHeading>Subscribe for the latest laptops?</PrimaryHeading>
      <p className="text-lg mb-6">
        Join us on a journey of discovery and growth.
      </p>
      <div className="  p-6 sm:max-w-[80%] mx-auto ">
        <input
          type="email"
          className="bg-white border border-gray-400 rounded-lg py-2 px-4 block  w-full  appearance-none leading-normal"
          placeholder="Enter your email address"
        />
      </div>
      <button className="btn btn-primary">Subscribe</button>
    </section>
  );
};

export default Subscribe;
