import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Interested = () => {

    const navigate = useNavigate();

    const navigateToRegister = (e) => {
        e.preventDefault()
        navigate("/applyNow", { state: { refer: 'normal' } });
    }

    return (

        <div
            className=" my-20 py-16 bg-gradient-to-r from-secondary via-sky-800	 to-secondary"
        >
            <div className="container w-10/12 mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="">
                        <h2 className="text-center text-4xl tracking-tighter font-bold text-white">Still Have Any
                        </h2>
                        <h2 className='text-4xl font-bold text-center text-primary'>
                            Queries?
                        </h2>
                    </div>
                    <div className="space-x-2 text-center py-2 lg:py-0 text-2xl font-semibold text-white">
                        <span>Get a free Consultation from</span>
                        <span className="font-bold text-3xl ">Student Council</span>
                    </div>
                    <Link onClick={navigateToRegister} className="px-5 mt-4 lg:mt-0 py-3 rounded-md  block bg-gradient-to-r from-primary to-primary/90 text-white font-bold">Request a Callback</Link>
                </div>
            </div>
        </div>

    );
};

export default Interested;