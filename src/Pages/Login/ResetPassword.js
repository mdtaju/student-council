import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { database } from '../../config/cofig.firebase';
// import useAuth from '../../hooks/useAuth';

const ResetPassword = () => {
  const [message, setMessage] = useState("");
  const auth = getAuth();
  // const auth = useAuth()
  const history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userMail = e.target.email.value;

    sendPasswordResetEmail(auth, userMail)
      .then((data) => {
        console.log(data);
        alert("Password reset email sent! Check Email");
        history("/login");
      })
      .catch((error) => {
        // alert(error.code)
        const errorCode = error.code;
        setMessage(errorCode);
        const errorMessage = error.message;
        setMessage(errorMessage);
      });
  };

  return (
    <div className="py-40 flex justify-center items-center   ml-20  ">
      <form
        className="bg-white w-96 p-10 shadow-xl rounded-lg"
        action=""
        onSubmit={(e) => handleSubmit(e)}>
        <p className="text-center mb-5 text-2xl font-bold ">
          Recover Your Password
        </p>
        <input
          className="p-3 outline w-full rounded-lg text-black "
          placeholder="Enter Your Email"
          type="email"
          name="email"
        />
        <p className="text-red-500 pt-4 ">{message}</p>
        <div className="text-center mt-4 ">
          <button
            type="submit"
            className="bg-green-600 hover:bg-blue-950 text-white rounded-xl p-3 w-full ">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
