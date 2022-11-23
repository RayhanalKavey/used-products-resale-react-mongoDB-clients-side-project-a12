import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle/useTitle";

const Signup = () => {
  useTitle("Sign Up");
  // React hook form user form and error
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUpError] = useState("");

  // Auth Context
  const { createUser, updateUserProfile, googleLogin, setUser, setReload } =
    useContext(AuthContext);

  // Redirect user where they want to go
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //image bb image hosting key
  const imageHostKey = process.env.REACT_APP_imagebb_key;

  // Handle Sign Up
  const handleSignUp = (data) => {
    const { name, email, password, photoURL } = data;
    setSignUpError("");
    const image = photoURL[0];
    const formData = new FormData();
    formData.append("image", image);

    // send image to the dedicated image hosting server imgbb
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.data.url);
        if (imgData.success) {
          const photoURL = imgData.data.url;
          // //Create user with email and password starT
          createUser(email, password)
            .then((result) => {
              const user = result.user;
              toast.success(`Welcome ${user?.displayName}`);
              handleUpdateUserProfile(name, photoURL, email);
            })
            .catch((error) => {
              setSignUpError(error.message);
            });
          // //Create user with email and password enD
        }
      });
  };

  // Update user profile
  const handleUpdateUserProfile = (name, photoURL, email) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((result) => {
        setReload(false);
        // Navigate user to the desired path
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // LogIn/sign up with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        toast.success(`Welcome ${user?.displayName}`);
        setUser(user);

        //Navigate user to the desired path
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // ----------------------------//--------------------------------//
  return (
    <div className="flex items-center justify-center h-[800px]">
      <div className="w-96 p-7 shadow-2xl">
        {" "}
        <h1 className="text-3xl my-5 text-center">Sign Up</h1>
        {/* handleSubmit with react hook form */}
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            {/* name */}
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required !" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your name"
            />
            {/* erroR message */}
            {errors.name && (
              <p className="text-error mt-1"> {errors.name?.message}</p>
            )}
            {/* // //photoUrl */}
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="file"
              {...register("photoURL")}
              className="file-input file-input-bordered w-full max-w-xs"
              placeholder="Your Photo"
              accept="image/*"
            />
            {/*email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email address is required !",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Your email"
            />
            {/* Show email erroRs */}
            {errors.email && (
              <p className="text-error mt-1" role="alert">
                {errors.email?.message}
              </p>
            )}{" "}
            {/* // //password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required !",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer.",
                },
                pattern: {
                  value: /(?=.*[A-Z].*[A-Z])(?=.*[!#@$%&? "])/,
                  message:
                    "Ensure password has two uppercase and one special case letter.",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="*********"
            />
            {/* Show password erroRs */}
            {errors.password && (
              <p className="text-error mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}{" "}
          </div>

          <input
            className="btn btn-secondary w-full mt-5 mb-1"
            type="submit"
            value="Sign Up"
          />
          {signUpError && (
            <label className="label">
              <span className="label-text-alt text-error">{signUpError}</span>
            </label>
          )}
        </form>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-secondary" to={"/login"}>
            Login
          </Link>{" "}
        </p>
        <div className="divider">or</div>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-secondary w-full btn-outline"
          type="submit"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
