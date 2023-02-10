import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import Skeleton from "../../../components/Spinner/Skeleton";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";

const AllSeller = () => {
  useTitle("Sellers");
  const [deletingSeller, setDeletingSeller] = useState(null);
  const closeModal = () => {
    setDeletingSeller(null);
  };

  /// load seller data
  const {
    data: sellers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", "seller"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/users/seller`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("laptop-utopia")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  /// delete buyer
  const handleDeleteSeller = (seller) => {
    fetch(`${process.env.REACT_APP_api_url}/users/${seller?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Seller ${seller.name} deleted successfully.`);
          refetch();
        }
      });
  };
  ///verify seller workinG
  const handleVerifySeller = (seller) => {
    fetch(`${process.env.REACT_APP_api_url}/users/seller/${seller?._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success(`Seller ${seller?.name} verified successfully.`);
          refetch();
        }
      });
  };

  /// Check loading state
  if (isLoading) {
    return <Skeleton></Skeleton>;
  }

  return (
    <div>
      <h3 className="text-3xl text-center my-5">Sellers</h3>

      <table className="table-auto border mb-10 text-center w-full">
        {/* <!-- head --> */}
        <thead className="border text-xl">
          <tr>
            <th className="border py-4 "></th>
            <th className="border py-4 ">Avatar</th>
            <th className="border py-4 ">Name</th>
            <th className="border py-4 ">Email</th>

            <th className="border py-4 ">Verify Seller</th>
            <th className="border py-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row  --> */}
          {sellers?.map((seller, i) => (
            <tr className="border" key={seller._id}>
              <th className="border py-4 pl-2 ">{i + 1}</th>
              <td className="border py-2 pl-2">
                <img
                  src={seller?.photoURL}
                  className="w-16 h-14 rounded-xl "
                  alt=""
                />
              </td>
              <td className="border py-2 pl-2">{seller?.name}</td>
              <td className="border py-2 pl-2">{seller?.email}</td>

              <td className="border py-2 pl-2">
                {seller?.verifySeller !== "verified" ? (
                  <label
                    onClick={() => handleVerifySeller(seller)}
                    className="btn btn-sm btn-primary"
                  >
                    Verify
                  </label>
                ) : (
                  <p className="text-primary">Verified</p>
                )}
              </td>
              <td className="border py-2 pl-2">
                <label
                  onClick={() => setDeletingSeller(seller)}
                  htmlFor="confirmation-modal"
                  className="btn btn-sm btn-error"
                >
                  Delete
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {deletingSeller && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`Deleting of ${deletingSeller.name} cannot be undone.`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction={handleDeleteSeller}
          modalData={deletingSeller}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSeller;
