import React, { Fragment } from "react";
import AIImage from "../../assets/images/ai.jpg";
import { ForYouCard } from "../UI/ForYouCard";
import { ElementSlider } from "../UI/ElementSlider";

export const ForYouSection = () => {
  const forYouCards = [
    {
      authorName: "landon",
      imageUrl: AIImage,
      title: "Character Assistant",
      description: "Your AI Work/Study buddy",
      noOfChats: "96.3m",
    },
    {
      authorName: "landon",
      imageUrl: AIImage,
      title: "Character Assistant",
      description: "Your AI Work/Study buddy",
      noOfChats: "96.3m",
    },
    {
      authorName: "landon",
      imageUrl: AIImage,
      title: "Character Assistant",
      description: "Your AI Work/Study buddy",
      noOfChats: "96.3m",
    },
    {
      authorName: "landon",
      imageUrl: AIImage,
      title: "Character Assistant",
      description: "Your AI Work/Study buddy",
      noOfChats: "96.3m",
    },
    {
      authorName: "landon",
      imageUrl: AIImage,
      title: "Character Assistant",
      description: "Your AI Work/Study buddy",
      noOfChats: "96.3m",
    },
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
        <p>For you</p>
        <ElementSlider slides={yourCards} />
      </div>
    </Fragment>
  );
};
