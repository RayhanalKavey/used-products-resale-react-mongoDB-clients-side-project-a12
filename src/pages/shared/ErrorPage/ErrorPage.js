import React from "react";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../../hooks/useTitle/useTitle";
import Navbar from "../Navbar/Navbar";
import errImg from "../../../assets/error-img.png";

const ErrorPage = () => {
  useTitle("Error Page");
  const { status, statusText } = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <section className="flex justify-items-center vh-100 p-5 text-primary">
        <div className="container flex flex-col items-center justify-items-center px-5 text-center my-8">
          <img className="w-96" src={errImg} alt="error page" />
          <div className="max-w-md  text-center">
            <h2 className=" text-2xl">
              Error : <span className="text-error  font-bold">{status}</span>
            </h2>
            <p className="  mb-8 text-2xl">
              Text Status:{" "}
              <span className="text-error  font-bold">{statusText}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
