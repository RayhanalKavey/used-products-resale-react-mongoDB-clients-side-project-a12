import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { logout, setUser, user } = useContext(AuthContext);

  /// Handle log out
  const handleSignOut = () => {
    logout()
      .then((result) => {
        toast.success("Logged out successfully!");
        setUser(null);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navItems = (
    <React.Fragment>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </React.Fragment>
  );
  const logInOut = (
    <>
      {user?.uid ? (
        <>
          {" "}
          <li>
            {" "}
            <Link onClick={handleSignOut}> Logout</Link>
          </li>
          {user?.photoURL ? (
            <li className="mr-5">
              <img
                className="w-12 h-12 rounded-xl"
                src={user?.photoURL}
                alt=""
                title={user?.displayName}
              />
            </li>
          ) : (
            <li title={user?.displayName}>
              <FaUser></FaUser>
            </li>
          )}
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-info">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Assignment-12
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
      <div className="navbar-end ">
        <ul className="flex gap-6 items-center">{logInOut}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
