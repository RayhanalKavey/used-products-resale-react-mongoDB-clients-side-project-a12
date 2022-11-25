import React from "react";
import { Link, Outlet } from "react-router-dom";
import PrimaryHeading from "../../components/PrimaryHeading/PrimaryHeading";
import useTitle from "../../hooks/useTitle/useTitle";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";

const DashboardLayout = () => {
  useTitle("Dashboard");
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
        <div className="drawer-side shadow-lg">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52  gap-2 text-base-content bg-secondary">
            <PrimaryHeading
              customClass={
                "text-xl font-semibold mb-2 bg-primary px-4 py-2 text-white rounded "
              }
            >
              DashBoard
            </PrimaryHeading>
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/dashboard/myOrders"}>My Orders</Link>
            </li>
            <li>
              <Link to={"/dashboard/myProduct"}>My Product</Link>
            </li>
            <li>
              <Link to={"/dashboard/AddProduct"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/dashboard/allBuyer"}>All Buyer</Link>
            </li>
            <li>
              <Link to={"/dashboard/allSeller"}>All Seller</Link>
            </li>
            <li>
              <Link to={"/dashboard/reportedItems"}>Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
