import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper/core';


import PartnerOne from "../../../assets/partners/california.png";
import PartnerTwo from "../../../assets/partners/coventry.jpeg";
import PartnerThree from "../../../assets/partners/portsmouth.jpg";
import { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';


SwiperCore.use([Navigation]);

const LeadingUniversity = () => {




    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}

                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Autoplay]}
                className="mySwiper mb-10 pb-10 mx-20 "
            >
                {/* Slides and button */}
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to=""> <img className=' w-28' src={PartnerOne} alt="" /></Link> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerTwo} alt="" /> </Link>  </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerThree} alt="" /> </Link>  </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerOne} alt="" /> </Link>  </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerTwo} alt="" /> </Link>  </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerThree} alt="" /> </Link>  </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerOne} alt="" /> </Link>  </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerTwo} alt="" /> </Link>  </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <Link to="">  <img className=' w-28' src={PartnerThree} alt="" /> </Link>  </SwiperSlide>

                {/* Next and pre buttons  */}
                <div className="swiper-button-next bg-black text-white w-10 h-24 absolute top-10 right-0  ">  </div>
                <div className="swiper-button-prev  bg-black text-white w-10 h-24 absolute top-10 left-0"></div>
            </Swiper>
        </>
    );
};

export default LeadingUniversity;
