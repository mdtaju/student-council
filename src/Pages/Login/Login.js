import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Lottie from "react-lottie";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import lottieAnimation from "../../assets/lotties/student.json";
import useFirebaseLogin from "../../hooks/useFirebaseLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignInWithGoogle, SignInAuthUser } = useFirebaseLogin();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // register with email
  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    const result = await SignInAuthUser(email, password);
    if (result?.status !== 200) {
      return setError(result?.message);
    }
    if (result?.role === "Student") {
      navigate("/student-dashboard");
      return;
    } else if (result?.role === "Lead") {
      navigate("/");
      return;
    } else if (result?.role === "Admin") {
      navigate("/dashboard");
      return;
    } else if (result?.role === "Counsellor_Admin") {
      navigate("/counsellor-dashboard");
      return;
    } else {
      return;
    }
  };

  // google login popup
  const handleLoginWithGoogle = async () => {
    setError("");
    const result = await SignInWithGoogle();
    if (result?.status !== 200) {
      return setError(result?.message);
    }
    if (result?.role === "Student") {
      navigate("/student-dashboard");
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <div className="my-20 md:my-32 w-11/12 lg:w-9/12 mx-auto grid lg:grid-cols-2 gap-10 ">
      <div className="lg:flex justify-center hidden ">
        <Lottie options={defaultOptions} height={600} width={600} />
      </div>

      <div className=" bg-slate-100 rounded-lg w-full">
        <div className="flex  justify-center items-center">
          <img src={logo} alt="logo" className="w-48 pt-10 pb-5 " />
        </div>
        <h1 className="pb-5 text-center text-xl md:text-2xl lg:text-3xl font-semibold">
          Login To Student Council
        </h1>

        <form onSubmit={handleSubmit} className="px-10 py-5">
          <label className="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-secondary">
              User ID/ Email
            </span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder-black  block w-full rounded-md sm:text-sm"
              placeholder="xyz123a"
            />
          </label>

          <label className="block mt-5">
            <div className="flex">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-secondary">
                Password
              </span>
              <Link
                to="/resetPassword"
                className="ml-auto text-sm underline cursor-pointer text-secondary">
                forgot password
              </Link>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-lightGray bg-transparent placeholder-black  block w-full rounded-md sm:text-sm"
              placeholder="Enter your password"
            />
          </label>

          <p className="text-red-400 mt-4">{error && error}</p>

          <button
            className="py-3 w-full bg-secondary hover:bg-primary mt-10 border-2 border-white rounded-md text-white font-medium cursor-pointer"
            type="submit">
            Login
          </button>

          <div
            onClick={handleLoginWithGoogle}
            className="w-full mt-6 px-3 py-2 border border-gray-300 bg-gray-100 rounded-md cursor-pointer">
            <div className="w-fit mx-auto flex items-center gap-4">
              <FcGoogle className="text-4xl" />
              <span className="text-lg font-semibold text-gray-800">
                Continue With Google
              </span>
            </div>
          </div>
        </form>

        <p className="px-10 pb-5 flex items-center">
          {" "}
          <span className="mx-2">
            <BsArrowLeft />
          </span>{" "}
          No account yet. Please{" "}
          <Link to="/register" className="underline text-blue-500 mx-2">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
