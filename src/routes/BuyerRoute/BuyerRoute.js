import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer/useBuyer";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isBuyer, setIsBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();
  if (loading || setIsBuyerLoading) {
    return <Spinner></Spinner>;
  }
  if (user?.uid && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
