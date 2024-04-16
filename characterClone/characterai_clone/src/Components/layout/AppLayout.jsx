import React, { Fragment } from "react";
import { Sidebar } from "./Sidebar";

export const AppLayout = (props) => {
  return (
    <Fragment>
      <div
        className="min-h-screen bg-gray-900
         w-full relative"
      >
        <Sidebar />
        <div className={`p-4 sm:px-12 pt-8 xl:ml-72 relative`}>
          <main className="w-full min-h-[84vh] h-auto">{props.children}</main>
        </div>
      </div>
    </Fragment>
  );
};
