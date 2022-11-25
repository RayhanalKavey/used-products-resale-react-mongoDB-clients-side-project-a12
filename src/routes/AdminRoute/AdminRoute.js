import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //before check the user first catch the user's current location
  const [isAdmin, setIsAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || setIsAdminLoading) {
    // Use spinner here
    return (
      <Spinner></Spinner>
      // <div className=" mt-5 text-center flex flex-col justify-center items-center">
      //   <div>Loading...</div>
      //   <progress className="progress w-56"></progress>
      // </div>
    );
  }
  if (user?.uid && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
