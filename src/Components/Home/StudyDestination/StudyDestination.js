import React from "react";
import CanadaFlag from "../../../assets/destination/3flagImage.jpg";
import UkFlag from "../../../assets/destination/4flagImage.jpg";
import USAFlag from "../../../assets/destination/5flagImage.jpg";

function StudyDestination() {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-semibold text-secondary">
        Study Destinations
      </h1>
      <div className="grid md:grid-cols-3 mt-[50px] gap-4 items-start justify-between">
        {/* canada start */}
        <div className="relative flex flex-col gap-1 overflow-hidden group cursor-pointer h-full justify-between">
          <div className="w-full h-auto">
            <img
              src={CanadaFlag}
              alt="UK"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-secondary p-2 text-white text-xl font-bold">
            Canada
          </div>

          {/* transform part */}
          <div className="h-full w-full top-[-100%] group-hover:top-0 transition-all duration-300 bg-black bg-opacity-90 absolute border-b-4 border-primary text-white px-4 py-6">
            <h1 className="uppercase text-xl font-semibold">Canada</h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              assumenda?
            </p>
          </div>
        </div>
        {/* canada end */}

        {/* uk start */}
        <div className="relative flex flex-col gap-1 overflow-hidden group cursor-pointer h-full justify-between">
          <div className="w-full h-auto">
            <img
              src={UkFlag}
              alt="UK"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-secondary p-2 text-white text-xl font-bold">
            UK
          </div>

          {/* transform part */}
          <div className="h-full w-full top-[-100%] group-hover:top-0 transition-all duration-300 bg-black bg-opacity-90 absolute border-b-4 border-primary text-white px-4 py-6">
            <h1 className="uppercase text-xl font-semibold">UK</h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              assumenda?
            </p>
          </div>
        </div>
        {/* uk end */}

        {/* usa start */}
        <div className="relative flex flex-col gap-1 overflow-hidden group cursor-pointer h-full justify-between">
          <div className="w-full h-auto">
            <img
              src={USAFlag}
              alt="usa"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="bg-secondary p-2 text-white text-xl font-bold">
            USA
          </div>

          {/* transform part */}
          <div className="h-full w-full top-[-100%] group-hover:top-0 transition-all duration-300 bg-black bg-opacity-90 absolute border-b-4 border-primary text-white px-4 py-6">
            <h1 className="uppercase text-xl font-semibold">USA</h1>
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              assumenda?
            </p>
          </div>
        </div>
        {/* usa end */}
      </div>
    </div>
  );
}

export default StudyDestination;
