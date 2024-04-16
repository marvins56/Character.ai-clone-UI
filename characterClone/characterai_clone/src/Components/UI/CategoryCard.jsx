import React, { Fragment } from "react";

export const CategoryCard = (props) => {
  return (
    <Fragment>
      <div
        className="inline-block bg-gray-800 p-4 rounded-2xl 
        text-gray-400 hover:text-gray-100"
      >
        <span className="whitespace-nowrap">{props.category}</span>
      </div>
    </Fragment>
  );
};
