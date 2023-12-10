import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation } from 'swiper/core';


import PartnerOne from "../../../assets/partners/california.png";
import PartnerTwo from "../../../assets/partners/coventry.jpeg";
import PartnerThree from "../../../assets/partners/portsmouth.jpg";


SwiperCore.use([Navigation]);

const NewPartners = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
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
                className="mySwiper mb-10 pb-10 mx-20 "
            >
                {/* Slides */}
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerOne} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerTwo} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerThree} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerOne} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerTwo} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerThree} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerOne} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white flex justify-center items-center '>  <img className=' w-28' src={PartnerTwo} alt="" /> </SwiperSlide>
                <SwiperSlide className='w-32 h-28  p-3 bg-white  flex justify-center items-center '>  <img className=' w-28' src={PartnerThree} alt="" /> </SwiperSlide>

                {/* Next and pre buttons  */}
                <div className="swiper-button-next bg-black text-white w-10 h-24 absolute top-10 right-0  ">  </div>
                <div className="swiper-button-prev  bg-black text-white w-10 h-24 absolute top-10 left-0"></div>
            </Swiper>
        </>
    );
};

export default NewPartners;
