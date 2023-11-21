import { Icon } from "@iconify/react";
import React from "react";

function SideLinks() {
  return (
    <div className="fixed hidden sm:block left-0 top-[50%] translate-y-[-50%] z-50 w-[50px] space-y-[1px]">
      {/* facebook */}
      <div className="w-[40px] h-[40px] hover:w-[60px] transition-all duration-200 bg-[#5EBC57] rounded-lg grid place-content-center cursor-pointer">
        <Icon
          icon="ri:facebook-fill"
          className="w-[22px] h-[22px] text-white"
        />
      </div>

      {/* twitter */}
      <div className="w-[40px] h-[40px] hover:w-[60px] transition-all duration-200 bg-[#5EBC57] rounded-lg grid place-content-center cursor-pointer">
        <Icon icon="mdi:twitter" className="w-[22px] h-[22px] text-white" />
      </div>

      {/* instagram */}
      <div className="w-[40px] h-[40px] hover:w-[60px] transition-all duration-200 bg-[#5EBC57] rounded-lg grid place-content-center cursor-pointer">
        <Icon
          icon="ph:instagram-logo"
          className="w-[22px] h-[22px] text-white"
        />
      </div>

      {/* youtube */}
      <div className="w-[40px] h-[40px] hover:w-[60px] transition-all duration-200 bg-[#5EBC57] rounded-lg grid place-content-center cursor-pointer">
        <Icon icon="ri:youtube-fill" className="w-[22px] h-[22px] text-white" />
      </div>
    </div>
  );
}

export default SideLinks;
