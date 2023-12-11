import slider1 from "../../../src/assets/hero/1sliderImage.jpg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


const NewTestimonials = () => {

    const testimonials = [
        {
            _id: 1,
            fullName: "Faruk",
            imageURL:
                "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            text: `The American flag and its flying rules The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
        },
        {
            _id: 2,
            fullName: "Niloy",
            imageURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuGgxyb_il99xzUwBFWlC2X7kAk-3nwdycrZmnC9ZHw&s",
            text: `The American flag and its flying rules The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
        },
        {
            _id: 3,
            fullName: "Amit",
            imageURL:
                "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
            text: `The American flag and its flying rules The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
        },
        {
            _id: 4,
            fullName: "Tajuddin",
            imageURL:
                "https://t3.ftcdn.net/jpg/04/23/59/74/360_F_423597477_AKCjGMtevfCi9XJG0M8jter97kG466y7.jpg",
            text: `The American flag and its flying rules  The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
        },
        {
            _id: 5,
            fullName: "Imtaiz",
            imageURL:
                "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
            text: `The American flag and its flying rules The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
        },
        {
            _id: 6,
            fullName: "durjoy",
            imageURL:
                "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
            text: `The American flag and its flying rules The American flag is a symbol of freedom and liberty to which Americans recite the pledge of allegiance. The flag's 13 alternating red and white stripes represent the 13 original colonies. Its 50 white stars on a blue field represent the 50 states.`,
        },
    ];




// Creating  pairs of testimonials data so that at a time shown the different data 
const pairedTestimonials = testimonials.reduce((acc, curr, index, array) => {
    if (index % 2 === 0) {
      acc.push(array.slice(index, index + 2));
    }
    return acc;
  }, []);



  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${slider1})`,
        backgroundSize: "cover",
      }}
    >
      <Swiper
        className="mySwiper "
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        observer={true}
        observeSlideChildren={true}
        slidesPerView={1}
      >
        {pairedTestimonials.map((pair, index) => (
         <SwiperSlide key={index}>
         <section className="flex flex-col lg:flex-row justify-center items-center py-6">
           {pair.map((data) => (
             <div
               key={data._id}
               className="body-font mx-10 lg:w-1/3 w-full sm:w-full  lg:mx-5 lg:mb-0 mb-6 p-4 bg-white text-black shadow-xl rounded-xl"
             >
               <div className="h-full text-center ">
                 <img
                   alt="testimonial"
                   className="w-40 border-2 border-red-500  h-40 mb-8 object-cover object-center rounded-full inline-block bg-gray-100"
                   src={data.imageURL}
                 />
                 <p className="leading-relaxed">{data.text}</p>
                 <p className="py-4 text-xl font-bold">{data.fullName}</p>
               </div>
             </div>
           ))}
         </section>
       </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewTestimonials;