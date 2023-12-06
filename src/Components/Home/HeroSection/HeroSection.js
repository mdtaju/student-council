import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowCircleRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import slider1 from "../../../assets/hero/1sliderImage.jpg";
import slider2 from "../../../assets/hero/5sliderImage.jpg";
import slider3 from "../../../assets/hero/7sliderImage.jpg";

const HeroSection = () => {
  const heroSectionDetails = [
    {
      _id: 1,
      heading: "Start your educational journey abroad.",
      subHeading:
        "With thousands of success stories from students all around the world, Student Council are here for you, every step of the way.",
      image: slider1,
    },
    {
      _id: 2,
      heading: "Get a Chance to the Best Universities",
      subHeading:
        "With thousands of success stories from students all around the world, Student Council are here for you, every step of the way.",
      image: slider2,
    },
    {
      _id: 3,
      heading: "Start your educational journey abroad.",
      subHeading:
        "With thousands of success stories from students all around the world, Student Council are here for you, every step of the way.",
      image: slider3,
    },
  ];

  const navigate = useNavigate();

  const navigateToRegister = (e) => {
    e.preventDefault();
    navigate("/contact_us", { state: { refer: "normal" } });
  };

  return (
    <div className="w-full ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {heroSectionDetails?.map((data, index) => {
          // console.log(data);
          // const backgroundImage1 = `${backendURL}/${data?.imageURL}`;
          // console.log(backgroundImage1);
          return (
            <SwiperSlide className="" key={data?._id}>
              <div
                className="h-[35rem] flex"
                style={{
                  // backgroundImage: backendURL + "/" + data?.imageURL,
                  backgroundImage: `url(${data?.image})`,
                  backgroundSize: "cover",
                }}>
                  
                <Fade bottom>
                  <div className="w-full my-auto sm:ml-[120px] lg:w-[1000px] p-4">
                    {/* <img className="w-24" src={backgroundImage1} alt="a"></img> */}
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 lg:w-1/2 lg:leading-tight uppercase subpixel-antialiased	">{data?.heading} </h1>
                    <p className="text-primary lg:text-lg md:w-10/12 lg:w-1/2 my-4"> {data?.subHeading} </p>

                    <Link
                      // onClick={navigateToRegister}
                      to={"/contact_us"}
                      className="my-10">
                      <button
                        className={
                          "text-center px-6 xl:px-8 py-3 font-semibold text-white bg-primary xl:text-lg hover:bg-secondary rounded flex items-center justify-center gap-x-2 subpixel-antialiased"
                        }>
                        Contact Us
                        <FaArrowCircleRight className="text-lg" />
                      </button>
                    </Link>
                  </div>
                </Fade>


              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSection;
