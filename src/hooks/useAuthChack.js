import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export default function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken) {
        try {
          const decoded = jwt_decode(auth?.accessToken);
          if (decoded?.id && decoded?.role) {
            dispatch(
              userLoggedIn({
                accessToken: auth.accessToken,
                user: decoded?.role,
                id: decoded?.id,
              })
            );
          } else {
            setAuthChecked(false);
          }
        } catch (error) {
          setAuthChecked(false);
        }
      }
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}
