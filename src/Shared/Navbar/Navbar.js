import React, { useEffect, useState } from 'react';
import Header from './Header';
import TopBar from './TopBar';
import NewHeader from './NewHeader';
import NewTopBar from './NewTopBar';

const Navbar = () => {

    const [show, setShow] = useState(true);

    // -------------------------------------------drawer fixed scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 40) {
                setShow(true);
            } else {
                setShow(false);
            }
        });


    }, []);

    return (
        <div className=''>
            {/* Import Top bar */}

            <div
                className={` ${show ? "opacity-100   scroll-smooth" : "opacity-0 duration-100"} `}
            >
                {/* <TopBar /> */}
                <NewTopBar></NewTopBar>
            </div>

            {/* Finished */}

            {/* Import Navbar */}
            <div className={`${show ? "pt-0 duration-400 transition-all duration-300 ease-in-out scroll-smooth" : "pt-16 scroll-smooth"}`}>
                <div
                    className={`
                    ${show ?
                            "w-full z-50  scroll-smooth transition-all duration-300 ease-in-out"
                            :
                            "w-full top-0 sticky z-50 transition-all duration-300 ease-in-out  scroll-smooth"
                        }`}
                >

                    {/* 
                    <Header
                        show={show}
                        setShow={setShow}
                    /> */}

                    <NewHeader
                        show={show}
                        setShow={setShow}
                    ></NewHeader>
                </div>
            </div>

        </div>
    );
};

export default Navbar;