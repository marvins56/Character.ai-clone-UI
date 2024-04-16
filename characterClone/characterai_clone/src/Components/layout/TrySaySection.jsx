import React, { Fragment } from "react";
import elonImage from "../../assets/images/elon.jpg";
import { ElementSlider } from "../UI/ElementSlider";
import { TrySayCard } from "../UI/TrySayCard";

export const TrySaySection = () => {
  const tryCards = [
    <TrySayCard
      name={"Elon musk"}
      imageUrl={elonImage}
      tag={"@elonwhispers"}
      noOfChats={"7.3m chats"}
      noOfLikes={"6,458 likes"}
      questions={[
        "Why did you buy Twitter?",
        "Why do you think of Jeff Bezos' Blue Origin?",
        "If you could time travel, when/where would you go?",
      ]}
    />,
    <TrySayCard
      name={"Elon musk"}
      imageUrl={elonImage}
      tag={"@elonwhispers"}
      noOfChats={"7.3m chats"}
      noOfLikes={"6,458 likes"}
      questions={[
        "Why did you buy Twitter?",
        "Why do you think of Jeff Bezos' Blue Origin?",
        "If you could time travel, when/where would you go?",
      ]}
    />,
    <TrySayCard
      name={"Elon musk"}
      imageUrl={elonImage}
      tag={"@elonwhispers"}
      noOfChats={"7.3m chats"}
      noOfLikes={"6,458 likes"}
      questions={[
        "Why did you buy Twitter?",
        "Why do you think of Jeff Bezos' Blue Origin?",
        "If you could time travel, when/where would you go?",
      ]}
    />,
    <TrySayCard
      name={"Elon musk"}
      imageUrl={elonImage}
      tag={"@elonwhispers"}
      noOfChats={"7.3m chats"}
      noOfLikes={"6,458 likes"}
      questions={[
        "Why did you buy Twitter?",
        "Why do you think of Jeff Bezos' Blue Origin?",
        "If you could time travel, when/where would you go?",
      ]}
    />,
    <TrySayCard
      name={"Elon musk"}
      imageUrl={elonImage}
      tag={"@elonwhispers"}
      noOfChats={"7.3m chats"}
      noOfLikes={"6,458 likes"}
      questions={[
        "Why did you buy Twitter?",
        "Why do you think of Jeff Bezos' Blue Origin?",
        "If you could time travel, when/where would you go?",
      ]}
    />,
  ];

  return (
    <Fragment>
      <div className="text-gray-100 space-y-2">
        <p>Try Saying</p>
        <ElementSlider slides={tryCards} />
      </div>
    </Fragment>
  );
};
