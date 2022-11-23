import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <PrimaryButton>hel0oooooooooo</PrimaryButton>
      <Spinner></Spinner> */}
      <h1>footer</h1>
    </div>
  );
};

export default Main;
