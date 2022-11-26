import React from "react";
import img1 from "../../../assets/banner-image/lenove.jpeg";
import img2 from "../../../assets/banner-image/dell-xps-16-2.jpeg";
import img3 from "../../../assets/banner-image/macbook-pro-m1.jpeg";
import img4 from "../../../assets/banner-image/macbook-air-m2.png";
import img5 from "../../../assets/banner-image/macbook-pro-m1.jpeg";
import img6 from "../../../assets/banner-image/macbook-pro-m1.jpeg";
import BannerItem from "./BannerItem";

const bannerData = [
  { image: img1, prev: 6, id: 1, next: 2 },
  { image: img2, prev: 1, id: 2, next: 3 },
  { image: img3, prev: 2, id: 3, next: 4 },
  { image: img4, prev: 3, id: 4, next: 5 },
  { image: img5, prev: 4, id: 5, next: 6 },
  { image: img6, prev: 5, id: 6, next: 1 },
];

const Banner = () => {
  return (
    <>
      <div className="relative carousel w-full max-h-[37rem] ">
        {bannerData.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </>
  );
};

export default Banner;
