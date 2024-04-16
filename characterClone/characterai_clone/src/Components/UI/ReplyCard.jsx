import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { extractFirstLetter } from "../../utils/extractFirstLetter";

export const ReplyCard = (props) => {
  return (
    <Fragment>
      <div
        className="w-full p-4 rounded-xl bg-gradient-to-br
        from-gray-800 via-gray-800 to-gray-900
        flex flex-col gap-8 pb-20 relative shadow cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span
            className="cursor-pointer grid place-items-center
            w-12 h-12 rounded-[50%] text-gray-100 first-letter:uppercase text-lg
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            {extractFirstLetter(props.name)}
          </span>
          <span className="text-lg">{props.name}</span>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
        <div className="w-full absolute left-4 bottom-4">
          <Link to={props.link} className="text-gray-600">
            Reply...
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
