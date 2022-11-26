import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";
import useBuyer from "../../hooks/useBuyer/useBuyer";
import useSeller from "../../hooks/useSeller/useSeller";
import useTitle from "../../hooks/useTitle/useTitle";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";

const DashboardLayout = () => {
  useTitle("Dashboard");
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  // console.log(isBuyer);
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side  shadow-slate-600 shadow-lg ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52  gap-2 text-base-content bg-secondary  lg:bg-white">
            <PrimaryHeading
              customClass={
                "text-xl font-semibold mb-2 bg-primary px-4 py-2 text-white rounded "
              }
            >
              DashBoard
            </PrimaryHeading>
            {/* <!-- Sidebar content here --> */}
            {isBuyer && (
              <li>
                <Link to={"/dashboard/myOrders"}>My Orders</Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link to={"/dashboard/myProduct"}>My Product</Link>
                </li>
                <li>
                  <Link to={"/dashboard/AddProduct"}>Add Product</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link to={"/dashboard/allBuyer"}>All Buyer</Link>
                </li>
                <li>
                  <Link to={"/dashboard/allSeller"}>All Seller</Link>
                </li>
                <li>
                  <Link to={"/dashboard/reportedItems"}>Reported Items</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
