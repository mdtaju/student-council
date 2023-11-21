import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: "40%", xs: "98%" },
  maxheight: { md: "80%", xs: "98%" },
  boxShadow: 24,
  overflowY: "auto",
  border: "white",
  bgcolor: "white",
};

const Testimonials = () => {
  const [open, setOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      fullName: "Faruk",
      imageURL:
        "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      text: `The American flag and its flying rules
The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
    },
    {
      fullName: "Faruk",
      imageURL:
        "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      text: `The American flag and its flying rules
The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
    },
    {
      fullName: "Faruk",
      imageURL:
        "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      text: `The American flag and its flying rules
The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
    },
    {
      fullName: "Faruk",
      imageURL:
        "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      text: `The American flag and its flying rules
The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
    },
    {
      fullName: "Faruk",
      imageURL:
        "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      text: `The American flag and its flying rules
The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
    },
  ]);

  const [testimonial, setTestimonial] = useState({});
  const { fullName, text } = testimonial;
  const handleModal = (_data) => {
    setOpen(true);
    setTestimonial(_data);
  };
  return (
    <section className=" pt-8 pb-20 bg-transparent rounded-lg">
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <Swiper
          breakpoints={{
            // when window width is >= 320px
            320: {
              width: 320,
              slidesPerView: 1,
            },

            // when window width is >= 640px
            640: {
              width: 620,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          loop={true}
          loopfillgroupwithblank="false"
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            loop: true,
          }}
          centeredSlides={true}
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={10}
          className="mx-auto">
          {testimonials?.map((testimonial, i) => {
            const { fullName, imageURL, text } = testimonial;
            return (
              <SwiperSlide
                key={i}
                className="cursor-pointer"
                onClick={() => handleModal(testimonial)}>
                <div className="w-full mt-[100px] ">
                  <div className=" px-5 rounded-xl pt-20 pb-14 relative text-center bg-white shadow shadow-gray-200  ">
                    {/* card image */}
                    <div className="overflow-hidden absolute top-[-18%] left-[33%] w-[120px] h-[120px] border-4 border-secondary rounded-full img_wrapper hover:scale-105 duration-200">
                      <img
                        src={imageURL}
                        alt=""
                        // className='zoomed_img w-[120px] h-[120px]'
                        className=" w-[120px] h-[120px]"
                      />
                    </div>
                    {/* card info */}
                    {/* quoate icon */}
                    <span className="absolute left-[5%] top-[30%] text-4xl text-gray-600 ">
                      <RiDoubleQuotesL />
                    </span>
                    <span className="absolute right-[13%] bottom-[10%] text-4xl text-gray-600 ">
                      <RiDoubleQuotesR />
                    </span>

                    <h3 className="text-2xl font-medium text-secondary mb-5">
                      {fullName}
                    </h3>
                    <p className="text-gray-600 text-base text-justify px-5 mt-7 h-44">
                      {text?.length > 180 ? text?.slice(0, 180) + "..." : text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style} className={"rounded-lg"}>
          <div className="flex justify-center items-center flex-col p-10 gap-5">
            <img src={""} alt="" className="h-36 w-36 rounded-full" />
            <h1 className="text-3xl font-semibold ">{fullName}</h1>
            <h2>{text}</h2>
            <span className="absolute right-[0%] -top-[2%] text-8xl text-gray-200 ">
              <RiDoubleQuotesL />
            </span>
          </div>
        </Box>
      </Modal>
    </section>
  );
};

export default Testimonials;
