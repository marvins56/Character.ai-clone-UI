import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { extractFirstLetter } from "../../utils/extractFirstLetter";
import chats from "../../data/chats.json";

export const ChatMates = () => {
  const chatMates = chats.chatMates;

  return (
    <Fragment>
      <div className="space-y-3 mt-2">
        <p className="text-gray-50">Chats</p>
        <p className="text-gray-500 text-sm">Today</p>
        <div className="flex flex-col gap-4 text-gray-50">
          {chatMates.map((chatMate, index) => (
            <NavLink to={`/chat/${chatMate.userId}`} key={index}>
              <p className="flex items-center gap-2">
                <span
                  className="cursor-pointer grid place-items-center  bg-gray-300s p-1
                  w-8 h-8 rounded-[50%] text-gray-50 first-letter:uppercase 
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
                >
                  {extractFirstLetter(chatMate.name)}
                </span>
                <span className="text-lgs">{chatMate.name}</span>
              </p>
            </NavLink>
          ))}
          {/* <NavLink to="/chat/martin-id">
            <p className="flex items-center gap-2">
              <span
                className="cursor-pointer grid place-items-center  bg-gray-300s p-1
                  w-8 h-8 rounded-[50%] text-gray-50 first-letter:uppercase 
                  bg-gradient-to-r from-orange-500 via-brown-500 to-gray-800"
              >
                {extractFirstLetter("Martin")}
              </span>
              <span className="text-lgs">Martin</span>
            </p>
          </NavLink> */}
        </div>
      </div>
    </Fragment>
  );
};
