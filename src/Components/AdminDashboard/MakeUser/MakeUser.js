import React, { useState } from "react";
import axiosInstance from "../../../config/axiosInstance";
import Input from "../../Inputs/Input";
import SelectInput from "../../Inputs/SelectInput";

const MakeUser = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [name, setName] = useState("");
  const [mss, setMss] = useState("");
  const [isError, setIsError] = useState(false);

  const userTypes = [
    "Admin",
    "Branch_Admin",
    "Counsellor_Admin",
    "Smart_Partner",
    "Agent",
    "B2B Partner",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMss("");
    setIsError(false);
    // email, isVerified, password, uid, provider, role
    const data = {
      email: userId,
      password,
      isVerified: false,
      provider: "Email",
      role: userType,
      name,
    };
    const res = await axiosInstance.post("/auth_users", data);
    if (res?.status !== 201) {
      setIsError(true);
      return setMss(res?.response?.data?.message);
    }
    setMss("User Successfully Created.");
    setUserId("");
    setPassword("");
    setUserType("");
    setName("");
  };
  return (
    <div className="w-full min-h-[80vh] grid place-items-center">
      <div className="p-4 sm:p-6 shadow-md rounded-md bg-white w-[400px]">
        <h1 className="text-center text-2xl font-medium">Make An Admin</h1>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="">
            <Input
              title="Admin ID"
              isRequired
              required
              type="text"
              placeholder="Enter unique admin id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              title="Password"
              isRequired
              required
              type="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <SelectInput
              title="Type Of Admin"
              isRequired
              placeholder="Select a admin type"
              optionsArray={userTypes}
              selectState={userType}
              setSelectState={setUserType}
            />
          </div>
          <div className="mt-4">
            <Input
              title="Name"
              type="text"
              required
              placeholder="Enter a name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p className={`my-3 ${isError ? "text-red-500" : "text-green-500"}`}>
            {mss}
          </p>
          <button
            type="submit"
            className="mt-4 py-2 px-4 w-full bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 text-white rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeUser;
