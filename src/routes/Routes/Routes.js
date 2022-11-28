import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import Login from "../../pages/authentication/Login";
import Signup from "../../pages/authentication/Signup";
import Blog from "../../pages/Blog/Blog";
import AddProduct from "../../pages/dashboard/AddProduct/AddProduct";
import AllBuyer from "../../pages/dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../pages/dashboard/AllSeller/AllSeller";
import MyOrders from "../../pages/dashboard/MyOrders/MyOrders";
import MyProduct from "../../pages/dashboard/MyProduct/MyProduct";
import Payment from "../../pages/dashboard/Payment/Payment";
import ReportedItems from "../../pages/dashboard/ReportedItem/ReportedItems";
import Home from "../../pages/home/Home/Home";
import Product from "../../pages/home/ProductCategory/Product";
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoure/SellerRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/login", element: <Login></Login> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/productCategory/:name",
        element: (
          <PrivateRoute>
            {" "}
            <Product></Product>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_api_url}/products?categoryName=${params?.name}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/myOrders",
        element: (
          <BuyerRoute>
            <MyOrders></MyOrders>{" "}
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_api_url}/bookings/${params?.id}`),
        element: (
          <BuyerRoute>
            <Payment></Payment>{" "}
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/myProduct",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>{" "}
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/allBuyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allSeller",
        element: (
          <AdminRoute>
            <AllSeller></AllSeller>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedItems",
        element: (
          <AdminRoute>
            <ReportedItems></ReportedItems>
          </AdminRoute>
        ),
      },
    ],
  },
]);
export default router;
