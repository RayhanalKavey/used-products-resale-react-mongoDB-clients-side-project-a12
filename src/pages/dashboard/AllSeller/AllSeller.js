import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";

const AllSeller = () => {
  useTitle("Sellers");

  const { data: sellers, isLoading } = useQuery({
    queryKey: ["users", "seller"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/users/seller`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return <div>seller {sellers?.length}</div>;
};

export default AllSeller;
