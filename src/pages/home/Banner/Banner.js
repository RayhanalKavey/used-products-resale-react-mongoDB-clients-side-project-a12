import React from "react";
import img1 from "../../../assets/banner-image/lenove.jpeg";
import img2 from "../../../assets/banner-image/dell-xps-16-2.jpeg";
import img4 from "../../../assets/banner-image/macbook-air-m2.png";
import img3 from "../../../assets/banner-image/macbook-pro-m1.jpeg";
import "./BannerItem.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full max-h-[35rem] rounded-b ">
        <div
          id="item1"
          className="relative carousel-item carousel-items w-full  "
        >
          <img src={img1} className="w-full " alt="" />
        </div>
        <div
          id="item2"
          className="carousel-item w-full relative carousel-items "
        >
          <img src={img2} className="w-full " alt="" />
        </div>
        <div
          id="item3"
          className="carousel-item w-full relative carousel-items"
        >
          <img src={img3} className="w-full" alt="" />
        </div>
        <div
          id="item4"
          className="carousel-item w-full relative carousel-items"
        >
          <img src={img4} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-24 top-[22%]  sm:top-1/4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-secondary pb-2">
          Explore <br />
          For Your <br />
          Dream Laptop
        </h1>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-24 top-[52%] sm:top-[48%] w-[55%] sm:w-2/5">
        <p className="text-white text-sm md:text-lg lg:text-xl">
          We are providing the best deal for your dream laptop buying journey.
          Get the best product at an affordable price.
        </p>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-24 top-[76%] sm:top-[65%]">
        <button className="btn btn-outline  btn-secondary">Button</button>
      </div>
    </div>
  );
};

export default Banner;
