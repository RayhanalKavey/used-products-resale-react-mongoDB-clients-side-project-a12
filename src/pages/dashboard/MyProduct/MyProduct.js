import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Spinner from "../../../components/Spinner/Spinner";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle/useTitle";

const MyProduct = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);
  // console.log("My products", user?.displayName);
  /// Load  seller products
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

  /// delete product
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

  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <h3 className="text-3xl text-center my-5">My Products</h3>
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
                <label
                  // onClick={() => setDeletingDoctor(doctor)}
                  htmlFor="confirmation-modal"
                  className="btn btn-sm btn-primary rounded"
                >
                  Advertise
                </label>
              </td>
              <td className="border py-2 pl-2">
                {" "}
                <label
                  onClick={() => handleDeleteProduct(product)}
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
    </>
  );
};

export default MyProduct;
