import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
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
      const res = await fetch(`${process.env.REACT_APP_api_url}/users/seller`);
      const data = await res.json();
      return data;
    },
  });

  /// delete buyer
  const handleDeleteSeller = (seller) => {
    console.log(seller);
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

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <h3 className="text-3xl text-center my-5">Sellers</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row  --> */}
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    src={seller?.photoURL}
                    className="w-16 h-14 rounded-xl "
                    alt=""
                  />
                </td>
                <td>{seller?.name}</td>
                <td>{seller?.email}</td>

                <td>
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
      </div>
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
