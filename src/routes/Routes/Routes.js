import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import About from "../../pages/About/About";
import Login from "../../pages/authentication/Login";
import Signup from "../../pages/authentication/Signup";
import Home from "../../pages/home/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/login", element: <Login></Login> },
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
]);
export default router;
