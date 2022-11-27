import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";

const MyProduct = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);

  //Generic modal
  const [deletingProduct, setDeletingProduct] = useState(null);
  const closeModal = () => {
    setDeletingProduct(null);
  };

  // Load  seller products
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.displayName],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_api_url}/products/${user?.displayName}`
      );
      const data = await res.json();
      return data;
    },
  });

  // delete product --4
  const handleDeleteProduct = (product) => {
    fetch(`${process.env.REACT_APP_api_url}/products/${product?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Product ${product?.name} deleted successfully.`);
          refetch();
        }
      });
  };
  ///handle Advertisement --4 workinG
  const handleAdvertisement = (product) => {
    // console.log("clicked", product._id);
    fetch(
      `${process.env.REACT_APP_api_url}/products/advertised/${product?._id}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Product ${product?.name} advertised successfully.`);
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <h3 className="text-3xl text-center my-5">
        {user?.displayName}'s Products
      </h3>
      <table className="table-auto border w-full mb-10 text-center">
        <thead className="border text-xl">
          <tr>
            <th className="border py-4 ">Product Name</th>
            <th className="border py-4 ">Category</th>
            <th className="border py-4 ">Price</th>
            <th className="border py-4 ">Sales Status</th>
            <th className="border py-4 ">Advertise</th>
            <th className="border py-4 ">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product?._id} className="border">
              <td className="border py-2 pl-2">
                <span className="font-semibold">{product?.name}</span>
                <br />
                <small>
                  <span className="font-semibold">Post Time: </span>
                  {product?.postTime}
                </small>
              </td>
              <td className="border py-2 pl-2">{product?.categoryName}</td>
              <td className="border py-2 pl-2">{product?.resalePrice} tk</td>
              <td className="border py-2 pl-2">Available/sold</td>
              <td className="border py-2 pl-2">
                {" "}
                {product?.advertisementStatus === "advertised" ? (
                  <label
                    ///

                    // onClick={() => handleAdvertisement(product)}
                    htmlFor="confirmation-modal"
                    className={`btn btn-sm  rounded  btn-success`}
                    disabled
                  >
                    Advertised
                  </label>
                ) : (
                  <label
                    ///

                    onClick={() => handleAdvertisement(product)}
                    htmlFor="confirmation-modal"
                    className={`btn btn-sm  rounded btn-primary`}
                  >
                    Advertise
                  </label>
                )}
              </td>
              <td className="border py-2 pl-2">
                {" "}
                <label
                  onClick={() => setDeletingProduct(product)}
                  htmlFor="confirmation-modal"
                  className="btn btn-sm btn-error rounded"
                >
                  Delete
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`Deleting of ${deletingProduct.name} cannot be undone.`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
        ></ConfirmationModal>
      )}
    </>
  );
};

export default MyProduct;
