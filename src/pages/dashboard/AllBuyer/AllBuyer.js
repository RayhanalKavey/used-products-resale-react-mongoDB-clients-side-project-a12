import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";

const AllBuyer = () => {
  useTitle("Buyers");

  //Generic modal
  const [deletingBuyer, setDeletingBuyer] = useState(null);
  const closeModal = () => {
    setDeletingBuyer(null);
  };

  /// Load buyer data
  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users", "buyer"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/users/buyer`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("laptop-utopia")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  /// delete buyer
  const handleDeleteBuyer = (buyer) => {
    fetch(`${process.env.REACT_APP_api_url}/users/${buyer?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Buyer ${buyer.name} deleted successfully.`);
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <h3 className="text-3xl text-center my-5">Buyers</h3>
      <div className="overflow-x-auto rounded">
        <table className="table w-full rounded">
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
            {buyers.map((buyer, i) => (
              <tr className="rounded" key={buyer._id}>
                <th>{i + 1}</th>
                <td>
                  <img
                    src={buyer?.photoURL}
                    className="w-16 h-14 rounded "
                    alt=""
                  />
                </td>
                <td>{buyer?.name}</td>
                <td>{buyer?.email}</td>

                <td>
                  <label
                    onClick={() => setDeletingBuyer(buyer)}
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
      {deletingBuyer && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`Deleting of ${deletingBuyer.name} cannot be undone.`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction={handleDeleteBuyer}
          modalData={deletingBuyer}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllBuyer;
