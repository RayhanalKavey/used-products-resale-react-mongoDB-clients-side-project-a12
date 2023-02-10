import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "../../components/Spinner/Skeleton";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, setIsAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || setIsAdminLoading) {
    return <Skeleton></Skeleton>;
  }
  if (user?.uid && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
