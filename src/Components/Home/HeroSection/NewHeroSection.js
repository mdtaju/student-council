import React from "react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import the fade effect styles

import { FaArrowCircleRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import slider1 from "../../../assets/hero/1sliderImage.jpg";
import slider2 from "../../../assets/hero/5sliderImage.jpg";
import slider3 from "../../../assets/hero/7sliderImage.jpg";

const NewHeroSection = () => {


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
        <div className="w-full">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}

                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade]}
                observer={true}
                observeSlideChildren={true}
                className="mySwiper"
            >
                {heroSectionDetails?.map((data, index) => (
                    <SwiperSlide key={data?._id}>
                        <div className="h-[35rem] flex"
                            style={{
                                backgroundImage: `url(${data?.image})`,
                                backgroundSize: "cover",
                            }}
                        >

                            <div className="w-full  my-auto sm:ml-[120px] lg:w-[1000px] p-4">

                                <Fade bottom >
                                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 lg:w-1/2 lg:leading-tight uppercase subpixel-antialiased"
                                    >
                                        {data?.heading}{" "}
                                    </h1>
                                </Fade>

                                <Fade bottom >
                                    <p className="text-primary lg:text-lg md:w-10/12 lg:w-1/2 my-4">{" "}
                                        {data?.subHeading}{" "}
                                    </p>
                                </Fade>

                                <Fade bottom >
                                    <Link to={"/contact_us"} className="my-10">
                                        <button className={"text-center px-6 xl:px-8 py-3 font-semibold text-white bg-primary xl:text-lg hover:bg-secondary rounded flex items-center justify-center gap-x-2 subpixel-antialiased"} >
                                            Contact Us <FaArrowCircleRight className="text-lg" />
                                        </button>
                                    </Link>
                                </Fade>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NewHeroSection;
