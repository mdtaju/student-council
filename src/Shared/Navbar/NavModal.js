import React from 'react';

const NavModal = ({ isOpen, onClose }) => {
    const handleFreeAssessmentClick = () => {
        const currentPath = window.location.pathname;
        if (currentPath !== '/assessment') {
            window.location.href = '/assessment';
        } else {
            window.location.reload();
        }
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 overflow-y-auto ${isOpen ? '' : 'hidden'}`}  >
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-6 rounded-xl shadow-lg max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-semibold">Welcome To Student Council</h1>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="">
                        <button
                            onClick={handleFreeAssessmentClick}
                            className="w-full my-2 rounded-full bg-red-600 hover:bg-green-500 text-white px-4 py-3"
                            >Free Assessment
                        </button>


                        <button className=" w-full my-2 rounded-full   bg-red-600 hover:bg-green-500 text-white px-4 py-3 ">Call Back Request</button>
                        <button className="w-full my-2 rounded-full   bg-red-600 hover:bg-green-500 text-white px-4 py-3  ">Appointment Booking</button>
                        <button className=" w-full my-2 rounded-full   bg-red-600 hover:bg-green-500 text-white px-4 py-3  ">Help and support?</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavModal;