import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./App.css";
import { routes } from "./Routes/Routes";
import Loader from "./Shared/Loader/Loader";
// import { ChatContextProvider } from "./ContextProvider/ChatContext";
// import { useContext } from "react";
// import { Context } from "./ContextProvider/ContextProvider";
import "mapbox-gl/dist/mapbox-gl.css";
import useAuthCheck from "./hooks/useAuthChack";

function App() {
  const auth = useAuthCheck();
  // const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    if (auth) {
      setLoading(false);
      console.log("first");
    }
  }, [auth]);

  return (
    <>
      {/* <ChatContextProvider user={user}> */}
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-slate-100">
          <Loader />
        </div>
      ) : (
        <div className=" bg-[#FFFFF0]">
          <RouterProvider router={routes}></RouterProvider>
        </div>
      )}
      {/* </ChatContextProvider> */}
    </>
  );
}

export default App;
