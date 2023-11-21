import { Close } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
// import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Gallery({ images }) {
  const [open, setOpen] = React.useState(false);
  const sliderRef = useRef();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleClickOpen = (index) => {
    setActiveImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  if (images?.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-4">
        {/* dialog start */}
        <div
          className={`${
            open ? "fixed top-0 left-0" : "hidden"
          } w-screen h-screen z-[1300] bg-black bg-opacity-70`}>
          <div className="w-full h-full relative p-4 grid place-items-center">
            <button
              onClick={handleClose}
              className="font-bold text-xl text-white absolute w-[40px] h-[40px] bg-gray-800 border border-gray-100 rounded-full top-5 right-6">
              <Close />
            </button>
            <button
              onClick={() => sliderRef.current?.slideNext()}
              className="font-bold text-xl text-white absolute w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] bg-gray-800 border border-gray-100 rounded-full top-[50%] translate-y-[-50%] right-6 z-10">
              <ArrowForwardIosRoundedIcon />
            </button>
            <button
              onClick={() => sliderRef.current?.slidePrev()}
              className="font-bold text-xl text-white absolute w-[30px] sm:w-[50px] h-[30px] sm:h-[50px] bg-gray-800 border border-gray-100 rounded-full top-[50%] translate-y-[-50%] left-6 z-10">
              <ArrowBackIosRoundedIcon />
            </button>
            <div className="w-[300px] sm:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
              <Swiper
                allowSlideNext={true}
                allowSlidePrev={true}
                spaceBetween={50}
                slidesPerView={1}
                initialSlide={activeImageIndex}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
                onSwiper={(it) => (sliderRef.current = it)}
                modules={[Navigation, Pagination, Scrollbar]}
                // navigation
                pagination={{ clickable: true }}>
                {images?.map((Img, i) => (
                  <SwiperSlide>
                    <img
                      src={Img?.file_url}
                      key={i}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        {/* dialog end */}

        <div
          className=" relative group cursor-pointer"
          onClick={() => handleClickOpen(0)}>
          <img
            src={images[0]?.file_url}
            alt=""
            className="object-contain object-center w-full h-auto rounded-lg"
          />
          <div className="absolute transition-all duration-200 ease-in top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images?.slice(1, 4)?.map((Img, i) => (
            <div
              className="w-full relative group cursor-pointer"
              key={i}
              onClick={() => handleClickOpen(i)}>
              <img src={Img?.file_url} alt="" className="w-full rounded-lg" />
              <div className="absolute transition-all duration-200 ease-in top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-lg"></div>
            </div>
          ))}
          {images?.length === 5 && (
            <div
              className="w-full relative group cursor-pointer"
              onClick={() => handleClickOpen(5)}>
              <img
                src={images[5]?.file_url}
                alt=""
                className="w-full rounded-lg"
              />
              <div className="absolute transition-all duration-200 ease-in top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-40 rounded-lg"></div>
            </div>
          )}
          {images?.length > 5 && (
            <div className="w-full relative" onClick={() => handleClickOpen(5)}>
              <img
                src={images[5]?.file_url}
                alt=""
                className="w-full rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 rounded-lg grid place-content-center text-xl text-white font-semibold cursor-pointer">
                <span>{`${images?.length - 5}+`}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "350px" }} />
    );
  }
}

export default Gallery;
