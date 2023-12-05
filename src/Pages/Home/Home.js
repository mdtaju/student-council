import React, { useEffect, useState } from "react";
import HeroSection from "../../Components/Home/HeroSection/HeroSection";
import HowWeHelp from "../../Components/Home/HowWeHelp/HowWeHelp";
import Partners from "../../Components/Home/Partners/Partners";
import Stats from "../../Components/Home/Stats/Stats";

import SocialLinks from "../../Components/Home/SocialLinks/SocialLinks";
import StudyDestination from "../../Components/Home/StudyDestination/StudyDestination";
import Testimonials from "../../Shared/Testimonials/Testimonials";
import Banner from "../../assets/hero/900.jpg";
import BannerBottom from "../../Components/Home/BannerBottom/BannerBottom";

const Home = () => {
  const [show, setShow] = useState(true);

  // -------------------------------------------drawer fixed scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 40) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#F4F4F4] w-full">
        <SocialLinks />
        <div className={`${show ? "lg:mt-[80px] mt-[50px]" : "mt-[50px]"} `}>
          <HeroSection></HeroSection>
        </div>

        <div className="bg-secondary text-white "> 
          <BannerBottom></BannerBottom>
        </div>

        <div className=" bg-[#F4F4F4]">
          <Stats></Stats>
        </div>

        <div className="mb-20 bg-[#F7F7F7]  py-[100px] p-4 lg:p-10">
          <StudyDestination />
        </div>

        {/* <div className=" bg-[#F4F4F4] p-4 lg:p-10 my-20 ">
          <AboutCompany></AboutCompany>
        </div> */}

        <div
          style={{ "--image-url": `url(${Banner})` }}
          className={`w-full xl:mx-auto pb-10 bg-[image:var(--image-url)]`}>
          <HowWeHelp></HowWeHelp>
        </div>

        {/* <div className="w-11/12 lg:w-10/12 mx-auto pb-10 ">
          <Features></Features>
        </div> */}
        {/* <div className="">
          <Interested></Interested>
        </div>

        <div className="w-11/12 lg:w-3/4 mx-auto pb-20">
          <GuidesAndResources></GuidesAndResources>
        </div> */}

        <div className="xl:relative xxl:static my-10">
          <div>
            <h1 className="lg:text-[160px] xl:text-[200px] font-medium text-center text-gray-300/90 hidden xl:block xxl:hidden">
              Testimonials
            </h1>
            <h1 className="text-center md:text-3xl text-2xl font-semibold text-secondary xxl:static xl:absolute lg:left-[20rem] xl:top-[15%] capitalize">
              What Our Student Says
            </h1>
          </div>

          <Testimonials></Testimonials>
        </div>

        <div className="xl:relative xxl:static">
          {/* xl:bottom-[104px] */}
          <div>
            <h1 className=" lg:text-[200px] font-medium text-center text-gray-300/90 hidden xl:block xxl:hidden">
              Partners
            </h1>
            <h1 className="text-center md:text-3xl text-2xl font-semibold text-secondary xl:absolute xxl:static lg:left-[27.5%] xxl:left-[37.5%] xl:top-[20%]">
              Meet Our Partners
            </h1>
          </div>
          <Partners></Partners>
        </div>
      </div>
    </>
  );
};

export default Home;
