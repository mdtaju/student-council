import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const StudentPrivateRoute = ({ children }) => {
  const auth = useAuth();

  if (auth?.accessToken && auth?.user === "Student") {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      // state={{ from: location }}
      replace></Navigate>
  );
};

export default StudentPrivateRoute;
