import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PrimaryHeading from "../../../components/PrimaryHeading/PrimaryHeading";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";
import { format } from "date-fns";

/*
    img, (Product image)
    name,  (Product name)
    location,
    resalePrice,
    originalPrice,
    yearsOfUse,
    postTime, (new date function theke) default
    sellerName, (AuthContext theke) Default 
    sellerId, (authContext theke) don't show up in the ui 
    conditionType, (Excelent , good ,fare) can use radio button
    sellerMobileNo,
    description,
    yearOfPurchase,
*/
const AddProduct = () => {
  useTitle("Add Product");
  const [categories, setCategories] = useState([]);
  const { user } = useContext(AuthContext);
  //------------- redirect user
  const navigate = useNavigate();
  //Hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //image bb image hosting key
  const imageHostKey = process.env.REACT_APP_imagebb_key;
  //current date
  const currentDate = format(new Date(), "PP");
  //Product condition
  const productCondition = ["Excellent", "Good", "Fair"];

  ///get product category array
  useEffect(() => {
    fetch(`${process.env.REACT_APP_api_url}/productCategory`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  const allCategory = categories?.map((category) => category?.categoryName);
  // console.log(allCategory);

  ///  handle add product
  const handleAddProduct = (data) => {
    const image = data?.img[0];
    const formData = new FormData();
    formData.append("image", image);
    // send image to the dedicated image hosting server
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const imageURL = imgData.data.url;
          const product = {
            name: data?.name,
            img: imageURL,
            location: data?.location,
            yearsOfUse: data?.yearsOfUse,
            resalePrice: data?.resalePrice,
            originalPrice: data?.originalPrice,
            yearOfPurchase: data?.yearOfPurchase,
            postTime: currentDate,
            sellerMobileNo: data?.sellerMobileNo,
            sellerName: user?.displayName,
            conditionType: data?.condition,
            description: data?.description,
            categoryName: data?.categoryName,
            sellerId: user?.uid,
            sellerEmail: user?.email,
          };
          console.log(product);
          // /// --2 save product information to the database workinG
          // fetch(`${process.env.REACT_APP_api_url}/productCategory`, {
          //   method: "PATCH",
          //   headers: {
          //     "content-type": "application/json",
          //   },
          //   body: JSON.stringify(product),
          // })
          //   .then((res) => res.json())
          //   .then((result) => {
          //     // console.log(result);
          //     toast.success(`${data?.name} is added.`);
          //     // //Navigate user to the desired path
          //     // navigate("/dashboard/myProduct");
          //   });
          //-----
        }
      });
    ///Add doctor handler notE image hosting enD
  };
  //----------------------------///-------------------------------//
  return (
    <div className="  w-auto flex flex-col   shadow-slate-600 shadow-lg  p-8 m-12 rounded ">
      <PrimaryHeading customClass=" text-center mb-5">
        Add Product
      </PrimaryHeading>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        {/* daisy ui */}
        <div className="form-control w-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            {/*  name */}
            <div>
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required !" })}
                className="input input-bordered w-full"
                placeholder="Your Product"
              />
              {/* erroR message */}
              {errors?.name && (
                <p className="text-error mt-1"> {errors.name?.message}</p>
              )}
            </div>
            {/* photo */}
            <div>
              <label className="label">
                <span className="label-text">Product Photo</span>
              </label>
              <input
                type="file"
                {...register("img", { required: "Name is required !" })}
                className="file-input text-primary  file-input-primary w-full "
                placeholder="Your Photo"
              />
              {/* erroR message */}
              {errors.img && (
                <p className="text-error mt-1"> {errors.img?.message}</p>
              )}
            </div>
            {/*location */}
            <div>
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location")}
                className="input input-bordered w-full"
                placeholder="Location"
              />
            </div>
            {/*Year of use */}
            <div>
              <label className="label">
                <span className="label-text">Year of Use</span>
              </label>
              <input
                type="text"
                {...register("yearsOfUse")}
                className="input input-bordered w-full"
                placeholder="Year of Use"
              />
            </div>
            {/*resalePrice */}
            <div>
              <label className="label">
                <span className="label-text">Resell Price</span>
              </label>
              <input
                type="text"
                {...register("resalePrice", {
                  required: "Resell Price is required !",
                })}
                className="input input-bordered w-full"
                placeholder="Resell Price"
              />
              {/* erroR message */}
              {errors?.resalePrice && (
                <p className="text-error mt-1">
                  {" "}
                  {errors.resalePrice?.message}
                </p>
              )}
            </div>
            {/* originalPrice */}
            <div>
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="text"
                {...register("originalPrice", {
                  required: "Original Price is required !",
                })}
                className="input input-bordered w-full"
                placeholder="Original Price"
              />
              {/* erroR message */}
              {errors?.originalPrice && (
                <p className="text-error mt-1">
                  {" "}
                  {errors.originalPrice?.message}
                </p>
              )}
            </div>
            {/* yearOfPurchase */}
            <div>
              <label className="label">
                <span className="label-text">Purchase Year</span>
              </label>
              <input
                type="text"
                {...register("yearOfPurchase")}
                className="input input-bordered w-full"
                placeholder="Purchase Year"
              />
            </div>
            {/*  postTime */}
            <div>
              <label className="label">
                <span className="label-text">Post Time</span>
              </label>
              <input
                type="text"
                {...register("postTime")}
                className="input input-bordered w-full"
                placeholder="Post Time"
                value={currentDate}
                disabled
              />
            </div>

            {/*  mobile no */}
            <div>
              <label className="label">
                <span className="label-text">Contact No</span>
              </label>
              <input
                type="text"
                {...register("sellerMobileNo", {
                  required: "Contact No. is required !",
                })}
                className="input input-bordered w-full"
                placeholder="Contact No."
              />
              {/* erroR message */}
              {errors?.sellerMobileNo && (
                <p className="text-error mt-1">
                  {" "}
                  {errors.sellerMobileNo?.message}
                </p>
              )}
            </div>
            {/*  sellerName */}
            <div>
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                {...register("sellerName")}
                className="input input-bordered w-full"
                placeholder="Seller Name"
                value={user?.displayName}
                disabled
              />
            </div>
            {/* /// Select conditionType */}
            <div>
              <label className="label">
                <span className="label-text">Product Condition</span>
              </label>
              <select
                {...register("condition")}
                className="select select-bordered w-full "
              >
                <option disabled>
                  Please Select a condition for the product.
                </option>
                {productCondition?.map((condition, i) => (
                  <option value={condition} key={i}>
                    {condition}
                  </option>
                ))}
              </select>
            </div>
            {/* /// Select Category */}
            <div>
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>
              <select
                {...register("categoryName")}
                className="select select-bordered w-full "
              >
                <option disabled>Please Select a Product Category</option>
                {allCategory?.map((category, i) => (
                  <option value={category} key={i}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            {/* description */}
            <div className="col-span-2">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                type="text"
                {...register("description", {
                  required: "Description is required !",
                })}
                className="textarea textarea-bordered w-full h-56"
                placeholder="Text...."
              />
              {/* erroR message */}
              {errors?.description && (
                <p className="text-error mt-1">
                  {" "}
                  {errors.description?.message}
                </p>
              )}
            </div>

            {/* ///end field */}
          </div>
        </div>

        <input
          className="btn btn-primary w-full mt-5 mb-1"
          type="submit"
          value="Add Product"
        />
        {/* {signUpError && (
          <label className="label">
            <span className="label-text-alt text-error">{signUpError}</span>
          </label>
        )} */}
      </form>
    </div>
  );
};

export default AddProduct;
