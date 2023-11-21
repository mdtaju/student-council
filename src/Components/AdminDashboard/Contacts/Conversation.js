import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PatchWithGet from "../../../API/PatchWithGet";
import { backendURL } from "../../../API/config";
import GET from "../../../API/get";
import { Context } from "../../../ContextProvider/ContextProvider";

const Conversation = ({ id }) => {
  const { user } = useContext(Context);

  const [replyText, setReplyText] = useState("");
  const [comments, setComments] = useState({});

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  useEffect(() => {
    GET(`contact/comment/${id}`, setComments);
  }, [id]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    const comment = {
      fullName: user?.fullName,
      imageURL: user?.imageURL,
      comment: replyText,
      date: new Date(),
    };
    PatchWithGet(`contact/comment/${id}`, comment, setComments);
  };

  return (
    <div>
      <div className="  w-full my-10">
        <form action="" onSubmit={handleCommentSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Your Comment
          </label>
          <textarea
            rows="4"
            className=" mb-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-lightGray"
            value={replyText}
            onChange={handleReplyChange}
            placeholder="Write your Reply here..."
            required></textarea>
          <button className="bg-transparent my-2 px-4 md:px-8 py-2 md:text-lg font-medium text-white bg-gradient-to-r from-[#6069d3f0] to-[#67f6f3c9] rounded-lg  hover:bg-[#6069d3ef] flex items-center">
            Submit
          </button>
        </form>
      </div>

      {comments?.comment?.map((com) => {
        const { fullName, imageURL, comment, date } = com;
        return (
          <div className="flex  items-center bg-gray-100 rounded-xl my-3 p-5">
            {imageURL ? (
              <img
                className="object-cover w-20 md:w-16 md:h-16 rounded-full bg-gray-500"
                src={`${backendURL}/${imageURL}`}
                alt="profile img"
              />
            ) : (
              <FaUserCircle className="w-16 h-16  text-[#6069d3ef]" />
            )}

            <div className="flex  justify-between ml-4">
              <div className="flex flex-col my-4 md:my-0">
                <div className="flex flex-col ">
                  <h4 className="font-bold">{fullName}</h4>
                  <span className="text-xs text-gray-800">
                    {moment(date).calendar()}
                  </span>
                </div>
                <div className="mt-3">
                  <p className="">{comment}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Conversation;
