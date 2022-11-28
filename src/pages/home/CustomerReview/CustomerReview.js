import React from "react";
import { Link } from "react-router-dom";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import SecondaryHeading from "../../../components/SecondaryHeading/SecondaryHeading";

const CustomerReview = () => {
  return (
    <div className=" bg-secondary py-16 mb-20">
      <PrimaryHeading customClass="text-center mb-4">
        Don't Just Take Out Word For it
      </PrimaryHeading>
      <SecondaryHeading customClass="text-center mb-4 ">
        See what some of our users have to say
      </SecondaryHeading>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center mx-3">
        {/* /// */}
        <div className="w-full  mt-16 max-w-[400px] rounded-lg bg-white shadow-slate-600 shadow-lg px-5 pt-5 pb-10 text-gray-800">
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt=""
              />
            </div>
          </div>
          {/* /// */}
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-sm text-gray-600 text-center px-5">
              Wow, this book is amazing. David Priemer captures the essence of
              selling in today's world better than any other author I've read.
              He's someone who's clearly been doing in the trenches as well as
              others too.
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">
              Mr Atique
            </p>
            <p className="text-xs text-gray-500 text-center">@arique.window</p>
          </div>
        </div>
        {/* /// */}
        {/* /// */}
        <div className="w-full  mt-16 max-w-[400px] rounded-lg bg-white shadow-slate-600 shadow-lg px-5 pt-5 pb-10 text-gray-800">
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt=""
              />
            </div>
          </div>
          {/* /// */}
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-sm text-gray-600 text-center px-5">
              They delivers in detail both the theory behind his approach and an
              actionable strategy to implement the recommendations in your own
              sales org. Satisfied with the service and the product too.
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">
              Mr. Kavey
            </p>
            <p className="text-xs text-gray-500 text-center">@kavey.window</p>
          </div>
        </div>
        {/* /// */}
        {/* /// */}
        <div className="w-full  mt-16 max-w-[400px] rounded-lg bg-white shadow-slate-600 shadow-lg px-5 pt-5 pb-10 text-gray-800">
          <div className="w-full pt-1 pb-5">
            <div className="overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg">
              <img
                src="https://randomuser.me/api/portraits/men/15.jpg"
                alt=""
              />
            </div>
          </div>
          {/* /// */}
          <div className="w-full mb-10">
            <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
              “
            </div>
            <p className="text-sm text-gray-600 text-center px-5">
              There seems to be more and more content being put out today
              relating to sales enablement/training but I often find that many
              of these books (or other resources) tend to miss the mark.
            </p>
            <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div className="w-full">
            <p className="text-md text-indigo-500 font-bold text-center">
              Mr. Rayhan
            </p>
            <p className="text-xs text-gray-500 text-center">@rayhan.com</p>
          </div>
        </div>
        {/* /// */}
      </div>
    </div>
  );
};

export default CustomerReview;
