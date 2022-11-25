import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../../components/Spinner/Spinner";
import useTitle from "../../../hooks/useTitle/useTitle";

const AllBuyer = () => {
  useTitle("Buyers");
  const { data: buyers, isLoading } = useQuery({
    queryKey: ["users", "buyer"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_api_url}/users/buyer`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return <div>all buyer {buyers?.length}</div>;
};

export default AllBuyer;
