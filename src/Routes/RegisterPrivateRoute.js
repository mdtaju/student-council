import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RegisterPrivateRoute = ({ children }) => {
  const auth = useAuth();
  if (!auth?.accessToken) {
    return children;
  }
  return (
    <Navigate
      to={"/"}
      // state={{ from: location }}
      replace></Navigate>
  );
};

export default RegisterPrivateRoute;
