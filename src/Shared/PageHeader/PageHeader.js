import React from "react";
import cover from "../../assets/shared/bgCover.webp";
import "./PageHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";

const PageHeader = ({ bgText, subText, btnText }) => {
  const navigate = useNavigate();
  const navigateToRegister = (e) => {
    e.preventDefault();
    navigate("/applyNow", { state: { refer: "normal" } });
  };
  return (
    <div
      className="h-64 md:h-[450px] bg-auto md:bg-cover bg-no-repeat bg-center flex items-center"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundBlendMode: "multiply",
        boxShadow: `inset 0 0 0 50vw rgb(0,0,0,0.5)`,
      }}
    >
      <div>
        <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-7xl mx-4 md:mx-8 lg:mx-20 py-2 uppercase ">
          {bgText}
        </h1>
        {subText && (
          <p className="text-white font-medium text-sm md:text-lg lg:text-xl mx-4 md:mx-8 lg:mx-20 py-2 capitalize pt-3 text">
            {subText}
          </p>
        )}

        {btnText && (
          <div className="mx-4 md:mx-8 lg:mx-20 mt-5">
            <Link onClick={navigateToRegister} className="my-10 ">
              <button
                className={
                  "text-center px-6 xl:px-10 py-3 lg:py-5 font-semibold text-white bg-primary text-lg md:text-xl xl:text-2xl hover:bg-secondary rounded-full flex items-center justify-center gap-x-2 subpixel-antialiased text "
                }
              >
                {btnText}
                <FaArrowCircleRight className="text-lg md:text-xl xl:text-3xl ml-1" />
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
