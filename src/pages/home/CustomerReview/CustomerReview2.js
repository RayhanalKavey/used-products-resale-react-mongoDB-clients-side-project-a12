import React from "react";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";

const CustomerReview2 = () => {
  return (
    <section className="bg-gray-100 p-10">
      <PrimaryHeading customClass=" mb-5">Customer Reviews</PrimaryHeading>
      <div className=" py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 text-sm font-medium mb-4">
                  "This product exceeded my expectations! I was able to achieve
                  my goals much faster than I thought possible."
                </p>
                <p className="text-gray-800 text-base font-medium">
                  - John Doe
                </p>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 text-sm font-medium mb-4">
                  "I've been using this product for several months now, and I
                  can honestly say it's the best investment I've ever made."
                </p>
                <p className="text-gray-800 text-base font-medium">
                  - Jane Doe
                </p>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 text-sm font-medium mb-4">
                  "I was skeptical at first, but after trying this product I can
                  say that it has truly changed my life."
                </p>
                <p className="text-gray-800 text-base font-medium">
                  - Bob Johnson
                </p>
              </div>
            </div>
            <div className="w-1/4 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 text-sm font-medium mb-4">
                  "I never thought I'd find a product that actually delivers on
                  its promises, but this one does. I'm so happy with my
                  purchase!"
                </p>
                <p className="text-gray-800 text-base font-medium">
                  - Sarah Johnson
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview2;
