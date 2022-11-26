import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, prev, id, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousal-img w-full ">
        <img src={image} alt="" className=" w-full h-full rounded-b " />
      </div>

      <div className="absolute flex  transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="text-6xl font-semibold text-secondary ">
          Explore <br />
          For Your <br />
          Dream Laptop
        </h1>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-24 top-1/2 w-2/5">
        <p className="text-white text-xl">
          We are providing the best deal for your dream laptop buying journey.
          Get the best product at an affordable price.
        </p>
      </div>
      <div className="absolute flex  transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn btn-outline   btn-secondary mr-5">
          Appointment
        </button>
        <button className="btn btn-outline   btn-secondary">Button</button>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
