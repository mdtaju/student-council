import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state.auth);

  if (auth?.accessToken && auth?.user) {
    let decoded = jwt_decode(auth?.accessToken);
    let role;
    if (decoded?.role === "Student") {
      role = "Student";
    } else if (decoded?.role === "Admin") {
      role = "Admin";
    } else if (decoded?.role === "Counsellor_Admin") {
      role = "Counsellor_Admin";
    } else if (decoded?.role === "Lead") {
      role = "Lead";
    } else {
      role = "Public";
    }

    const updateAuth = {
      ...auth,
      user: role,
    };
    return updateAuth;
  } else {
    return false;
  }
}
