import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import webDesign from '../../../assets/BannerBottom/Web-Design.png'
const BannerBottom = () => {
    return (
        <div className=' container mx-auto  p-10'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 justify-center items-center'>
           <div className='  ml-20'>
                <img className='w-[300px] ' src={webDesign} alt="" />
            </div>

            <div className='p-5 '>
                <h1 className='text-5xl  my-5 '>Welcome to Student Council</h1>
                <p >We offer high-quality and professional UK University Admission services to prospective students across the world. We maintain the highest level of integrity, transparency and fair practice with our valuable clients and partners.</p>

                <button
                    className={ "mt-3 text-center px-6 xl:px-8 py-3 font-semibold transition delay-150 duration-300 text-white hover:text-secondary bg-primary xl:text-lg hover:bg-green-400  rounded-full  flex items-center justify-center gap-x-2 subpixel-antialiased" }>
                    Contact Us
                    <FaArrowCircleRight className="text-lg" />
                </button>

            </div>

           </div>
        </div>
    );
};

export default BannerBottom;