import React, { Fragment } from "react";
import AIImage from "../../assets/images/ai.jpg";
import { ForYouCard } from "../UI/ForYouCard";
import { ElementSlider } from "../UI/ElementSlider";
import { CategoryCard } from "../UI/CategoryCard";
import "./../styles/scrollbar.css";

export const AllCategories = () => {
  const categories = [
    <CategoryCard category={"Helpers"} />,
    <CategoryCard category={"Anime Game Characters"} />,
    <CategoryCard category={"Games"} />,
    <CategoryCard category={"Game Characters"} />,
    <CategoryCard category={"Comedy"} />,
    <CategoryCard category={"VTuber"} />,
    <CategoryCard category={"Books"} />,
    <CategoryCard category={"Discussion"} />,
    <CategoryCard category={"Language Learning"} />,
  ];

  const yourCards = [
    <ForYouCard
      imageUrl={AIImage}
      authorName={"landon"}
      title={"Character Assistant"}
      description={"Your AI Work/Study buddy"}
      noOfChats={"96.3m"}
    />,
    <ForYouCard
      imageUrl={AIImage}
      authorName={"landon"}
      title={"Character Assistant"}
      description={"Your AI Work/Study buddy"}
      noOfChats={"96.3m"}
    />,
    <ForYouCard
      imageUrl={AIImage}
      authorName={"landon"}
      title={"Character Assistant"}
      description={"Your AI Work/Study buddy"}
      noOfChats={"96.3m"}
    />,
    <ForYouCard
      imageUrl={AIImage}
      authorName={"landon"}
      title={"Character Assistant"}
      description={"Your AI Work/Study buddy"}
      noOfChats={"96.3m"}
    />,
    <ForYouCard
      imageUrl={AIImage}
      authorName={"landon"}
      title={"Character Assistant"}
      description={"Your AI Work/Study buddy"}
      noOfChats={"96.3m"}
    />,
  ];

  return (
    <Fragment>
      <div className="text-gray-100 space-y-2">
        <div className="flex items-center gap-2 overflow-x-auto scroll-bar">
          {categories.map((category, index) => (
            <div key={index} className="pb-4">
              {category}
            </div>
          ))}
        </div>
        <ElementSlider slides={yourCards} />
      </div>
    </Fragment>
  );
};
