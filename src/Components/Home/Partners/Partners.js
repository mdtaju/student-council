import React from "react";
import Marquee from "react-fast-marquee";
import PartnerOne from "../../../assets/partners/california.png";
import PartnerTwo from "../../../assets/partners/coventry.jpeg";
import PartnerThree from "../../../assets/partners/portsmouth.jpg";

const Partners = () => {
  return (
    <div className="pt-10 pb-20">
      {/* <h1 className='text-center text-5xl font-bold text-secondary py-10'>Meet Our Partners</h1> */}
      {/* <div className='lg:relative'>
                <h1 className='text-[200px] font-medium text-center text-gray-300/90 hidden lg:block'>Partners</h1>
                <h1 className='text-center md:text-3xl text-2xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#55c3c1]  lg:absolute lg:left-[26rem] lg:bottom-[104px]'>Meet Our Partners   
                </h1>
            </div> */}
      <div className=" bg-white">
        <Marquee
          autoFill={true}
          gradient={true}
          speed={100}
          pauseOnHover={true}
          pauseOnClick={true}
          gradientColor={[211, 227, 253]}
          className="">
          {/* {
                        partners?.map(partner =>
                            <a key={partner?._id} href={`${partner?.url}`} target='_blank' rel='noreferrer' className='rounded-xl'>
                                <img src={`${backendURL}/${partner?.imageURL}`} key={partner?._id} className='w-32 md:w-48 p-5 ' alt={partner.title} />
                            </a>


                        )
                    } */}
          <img
            src={PartnerOne}
            className="w-32 md:w-48 p-5 "
            alt={"PartnerOne"}
          />
          <img
            src={PartnerTwo}
            className="w-32 md:w-48 p-5 "
            alt={"PartnerOne"}
          />
          <img
            src={PartnerThree}
            className="w-32 md:w-48 p-5 "
            alt={"PartnerOne"}
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
