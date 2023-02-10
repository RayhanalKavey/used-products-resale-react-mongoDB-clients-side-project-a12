import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "../../components/Spinner/Skeleton";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller/useSeller";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, setIsSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || setIsSellerLoading) {
    return <Skeleton></Skeleton>;
  }
  if (user?.uid && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
