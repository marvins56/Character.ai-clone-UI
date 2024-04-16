import React from "react";
import { openSidebarHandler } from "../../store/actions/sidebar";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  const handleOpenSidebar = () => {
    dispatch(openSidebarHandler());
  };

  return (
    <header
      className="transition-all w-full z-[110] py-3 h-16
      bg-gray-100 border-b-[1px] border-gray-300 px-6"
    >
      <div
        className="flex flex-col-reverses justify-between 
         gap-4 sm:gap-6 md:flex-row md:items-center"
      >
        <div className="flex items-center gap-4 w-12 sm:w-64">
          <span
            onClick={() => handleOpenSidebar()}
            className="inline-block xl:hidden cursor-pointer"
          >
            <IconContext.Provider value={{ size: "1.8rem", color: "#343a40" }}>
              <IoIosMenu />
            </IconContext.Provider>
          </span>
        </div>

        <div className="flex items-center gap-4"></div>
      </div>
    </header>
  );
};
