import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";

const BottomBlog = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="fixed bottom-0 left-1/2 z-20 bg-white bg-opacity-60 w-[250px] h-auto rounded-full p-4 flex items-center gap-4">
      <button
        type="submit"
        className="px-8 py-2 text-lg font-normal text-white rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200">
        Save
      </button>
      <div
        onClick={handleTop}
        className="w-[40px] h-[40px] text-2xl font-normal text-white rounded-full bg-blue-500 hover:bg-blue-600 active:scale-95 duration-200 grid place-items-center cursor-pointer">
        <BiUpArrowAlt />
      </div>
    </div>
  );
};

export default BottomBlog;
