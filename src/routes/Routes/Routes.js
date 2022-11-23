import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import Login from "../../pages/authentication/Login";
import Signup from "../../pages/authentication/Signup";
import Blog from "../../pages/Blog/Blog";
import MyOrders from "../../pages/dashboard/MyOrders/MyOrders";
import Home from "../../pages/home/Home/Home";
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{ path: "/dashboard/myOrder", element: <MyOrders></MyOrders> }],
  },
]);
export default router;
