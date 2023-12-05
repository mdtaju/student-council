import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-router-dom";
import formatBytes from "../../../../Utilities/GetFileSize";

function SubmittedFiles({ file }) {
  return (
    <div className="flex items-start gap-4 w-fit">
      <div className="w-[40px] h-[40px] rounded-full bg-blue-100 grid place-items-center">
        <AiOutlineFileText className="text-2xl text-blue-400" />
      </div>
      <Link to={file?.file_url} target="_blank">
        <div className="mt-[-2px] text-sm font-medium text-gray-700 max-w-[120px] cursor-pointer">
          <h4 className="truncate">
            {file?.name ? file?.name : file?.file_name}
          </h4>
          <h4 className="text-xs">
            {formatBytes(file?.size ? file?.size : file?.file_size)} .{" "}
            {file?.type
              ? file?.type?.split("/")?.pop()?.toUpperCase()
              : file?.file_name?.split(".")?.pop()?.toUpperCase()}
          </h4>
        </div>
      </Link>
      {/* <div
onClick={() => handleDelete(i)}
className="w-[30px] h-[30px] grid place-items-center rounded-full bg-red-100 active:scale-95 duration-200 cursor-pointer">
<MdOutlineCancel className="text-lg text-red-500" />
</div> */}
    </div>
  );
}

export default SubmittedFiles;
