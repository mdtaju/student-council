import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AdminPrivateRoute = ({ children }) => {
  const auth = useAuth();

  if (auth?.accessToken && auth?.user === "Admin") {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      // state={{ from: location }}
      replace></Navigate>
  );
};

export default AdminPrivateRoute;
