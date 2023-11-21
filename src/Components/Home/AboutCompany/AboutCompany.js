import React, { useState } from "react";
import Imageone from "../../../assets/shared/graduate.jpg";

const AboutCompany = () => {
  const [HeroContent, setHeroContent] = useState([]);

  // useEffect(() => {
  //     GET('about', setHeroContent)
  // }, [])

  return (
    <div className="grid lg:grid-cols-5 gap-5 ">
      <div className="lg:col-span-2 rounded-lg flex justify-center items-center">
        <img src={Imageone} alt={"cc"} className="w-full mt-2 max-h-[28rem]" />
      </div>
      <div className="lg:col-span-3 ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold  capitalize text-secondary text-center">
          Title
        </h1>
        <p className="capitalize text-justify lg:text-lg lg:w-10/12 mx-auto my-4 text-p">
          Description
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
