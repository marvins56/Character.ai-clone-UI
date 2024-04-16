import React, { Fragment } from "react";
import { IconContext } from "react-icons";
import { BsChat } from "react-icons/bs";

export const ForYouCard = (props) => {
  return (
    <Fragment>
      <div
        className="flex items-center gap-4 rounded-2xl
        bg-gray-800 shadow text-gray-100 p-4 text-sm
        h-40"
      >
        <div className="w-[40%] h-full">
          <img
            className="w-full h-full aspect-[4/3] rounded-2xl
            bg-gray-300 object-cover "
            src={props.imageUrl}
            alt={"avatar"}
          />
        </div>
        <div className="w-[60%] h-full flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <p>{props.title}</p>
            <p className="text-gray-500">By @{props.authorName}</p>
            <p>{props.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <IconContext.Provider
                value={{ size: "1.0rem", color: "#adb5bd" }}
              >
                <BsChat />
              </IconContext.Provider>
            </span>
            <span className="text-sm text-gray-500">{props.noOfChats}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
