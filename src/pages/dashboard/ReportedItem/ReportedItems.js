import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";

const ReportedItems = () => {
  useTitle("Reported Items");
  const [deletingReport, setDeletingReport] = useState(null);
  const closeModal = () => {
    setDeletingReport(null);
  };
  const {
    data: allReports,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_api_url}/reports`
        // `productCategory.json`
      );
      const data = await res.json();
      return data;
    },
  });

  ///
  const handleDeletingReport = (repo) => {
    fetch(`${process.env.REACT_APP_api_url}/reports/${repo?._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(
            `Report for ${deletingReport?.name} deleted successfully.`
          );
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
      <table className="table-auto border mb-10 text-center w-full">
        {/* <!-- head --> */}
        <thead className="border text-xl">
          <tr>
            <th className="border py-4 "></th>
            <th className="border py-4 ">Reported Product</th>
            <th className="border py-4 ">Reported User</th>

            <th className="border py-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row  --> */}
          {allReports?.map((report, i) => (
            <tr className="border" key={i}>
              <th className="border py-4 pl-2 ">{i + 1}</th>
              <td className="border py-2 pl-2 flex flex-col justify-center items-center">
                <div>
                  {" "}
                  <img
                    src={report?.img}
                    className="w-16 h-14 rounded-xl "
                    alt=""
                  />
                </div>
                <div>{report?.name}</div>
              </td>

              <td className="border py-2 pl-2">{report?.reporterUserName}</td>

              <td className="border py-2 pl-2">
                <label
                  onClick={() => setDeletingReport(report)}
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
      {deletingReport && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`Deleting of ${deletingReport?.name} cannot be undone.`}
          closeModal={closeModal}
          successButtonName="Delete"
          successAction={handleDeletingReport}
          modalData={deletingReport}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ReportedItems;
