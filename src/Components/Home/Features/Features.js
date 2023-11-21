import React, { useEffect, useState } from "react";
// import handshake from '../../../assets/features/handshake.png'
// import person from '../../../assets/features/person.png'
// import map from '../../../assets/features/map.png'
// import plane from '../../../assets/features/plane.png'
// import recommend from '../../../assets/features/reccomend.png'
// import caps from '../../../assets/features/caps.png'
import GET from "../../../API/get";
import Imageone from "../../../assets/shared/graduate.jpg";

const Features = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    GET("service", setServices);
  }, []);

  return (
    <>
      <div className="my-10 xl:relative xxl:static">
        <div className="">
          <h1 className="text-[200px] font-medium text-center text-gray-300/90 hidden xl:block xxl:hidden">
            Services
          </h1>
          <h1 className="text-center md:text-4xl text-2xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#55c3c1]  xl:absolute xxl:static xl:left-96 xl:top-[11.5%]">
            Our Services
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
          {/* {

                        services?.length > 0 && services?.map((service, index) => {
                            const { title, description, path } = service;
                            return ( */}
          <div className=" py-8 px-10 bg-slate-50 shadow-xl rounded-lg text-center hover:scale-105">
            <div className="flex justify-center items-center pb-4 ">
              <img src={Imageone} alt="icons" className="w-24" />
            </div>
            <h1 className="text-2xl font-semibold">Title</h1>
            <p className=" py-4">Description</p>
          </div>
          {/* )
                        })
                    } */}
        </div>
      </div>
    </>
  );
};

export default Features;
