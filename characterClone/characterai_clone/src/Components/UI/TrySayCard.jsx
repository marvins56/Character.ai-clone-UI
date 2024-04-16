import React, { Fragment } from "react";

export const TrySayCard = (props) => {
  return (
    <Fragment>
      <div className="bg-gray-800 p-4 space-y-3 rounded-2xl">
        <div className="flex items-center gap-3 shadow">
          <div className="w-12 h-12">
            <img
              className="w-12 h-12 rounded-[50%]
              bg-gray-300 object-cover"
              src={props.imageUrl}
              alt={"avatar"}
            />
          </div>
          <div>
            <p className="text-lg">{props.name}</p>
            <p className="text-gray-500 text-[12px]">
              <span className="mr-1">{props.tag}</span>
              <span className="mr-1">{props.noOfChats} </span>
              <span>{props.noOfLikes}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-gray-800">
          {props.questions.map((question, index) => (
            <p className="text-sm p-3 bg-gray-700 rounded-2xl" key={index}>
              {question}
            </p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
