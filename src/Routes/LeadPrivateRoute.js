import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const LeadPrivateRoute = ({ children }) => {
  const auth = useAuth();
  console.log(auth);
  if (auth?.accessToken && auth?.user === "Lead") {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      // state={{ from: location }}
      replace></Navigate>
  );
};

export default LeadPrivateRoute;
