import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "../../components/Spinner/Skeleton";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Skeleton></Skeleton>;
  }
  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
