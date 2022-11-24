import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <PrimaryButton>hel0oooooooooo</PrimaryButton>
      <Spinner></Spinner> */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
