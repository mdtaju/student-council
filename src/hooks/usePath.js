import { useEffect, useState } from "react";
import useAuth from "./useAuth";

function usePath() {
  const auth = useAuth();
  const [path, setPath] = useState("dashboard");

  useEffect(() => {
    switch (auth?.user) {
      case "Admin":
        setPath("dashboard");
        break;
      case "Counsellor_Admin":
        setPath("counsellor-dashboard");
        break;
      case "Student":
        setPath("student-dashboard");
        break;
      default:
        setPath("student-dashboard");
        break;
    }
  }, [auth]);

  return path;
}

export default usePath;
