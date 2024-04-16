import React, { Fragment } from "react";

export const TryCard = (props) => {
  return (
    <Fragment>
      <div className="flex items-center gap-3 shadow p-3 bg-gray-800 rounded-2xl">
        <div className="w-12 h-12">
          <img
            className="w-full h-full rounded-[50%]
            bg-gray-300 object-cover"
            src={props.imageUrl}
            alt={"avatar"}
          />
        </div>
        <div>
          <p className="text-lg">{props.title}</p>
          <p className="text-gray-500">with {props.with}</p>
        </div>
      </div>
    </Fragment>
  );
};
