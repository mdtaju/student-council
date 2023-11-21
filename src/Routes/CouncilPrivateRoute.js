import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CouncilPrivateRoute = ({ children }) => {
  const auth = useAuth();

  if (auth?.accessToken && auth?.user === "Counsellor_Admin") {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      // state={{ from: location }}
      replace></Navigate>
  );
};

export default CouncilPrivateRoute;
