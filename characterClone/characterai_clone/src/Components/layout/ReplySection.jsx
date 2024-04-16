import React, { Fragment } from "react";
import { RiLoopLeftLine } from "react-icons/ri";
import { IconContext } from "react-icons";
import { ReplyCard } from "../UI/ReplyCard";
import replyBgImage from "../../assets/images/reply-bg.jpg";

export const ReplySection = () => {
  const whatTodo = [
    {
      question: "What do you want to do?",
      title: "Nurture Your Creativity",
      replyCards: [
        {
          name: "Creative Helper",
          description: `Hi!, am Ellie, whether you're an artist, a writer,
                 a musician, or just exploring, am here to spark you`,
          link: "chat/create-helper-id",
        },
        {
          name: "Creative Helper",
          description: `Hi!, am Ellie, whether you're an artist, a writer,
                 a musician, or just exploring, am here to spark you`,
          link: "chat/create-helper-id",
        },
      ],
    },
    // {
    //   question: "What do you want to do?",
    //   title: "Nurture Your Creativity",
    //   replyCards: [
    //     {
    //       name: "Creative Helper",
    //       description: `Hi!, am Ellie, whether you're an artist, a writer,
    //              a musician, or just exploring, am here to spark you`,
    //       link: "chat/create-helper-id",
    //     },
    //     {
    //       name: "Creative Helper",
    //       description: `Hi!, am Ellie, whether you're an artist, a writer,
    //              a musician, or just exploring, am here to spark you`,
    //       link: "chat/create-helper-id",
    //     },
    //   ],
    // },
  ];

  return (
    <Fragment>
      <div className="w-full text-gray-100">
        {whatTodo.map((todo, index) => (
          <div
            className="w-full flex flex-col sm:flex-row gap-2 py-4
            rounded-3xl bg-green-500s"
            key={index}
            style={{
              backgroundImage: `linear-gradient(
                to right,
                 rgba(33,37,41,0.4),
                 rgba(33,37,41,0.8),
                 rgba(33,37,41,1.0)
                 ), url(${replyBgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="w-full sm:w-2/5 flex flex-col gap-8 justify-between p-4">
              <div>
                <p className="text-gray-500">{todo.question}</p>
                <p className="text-2xl">{todo.title}</p>
              </div>
              <div>
                <span
                  className="inline-block cursor-pointer p-2 rounded-[50%]
                  bg-gray-700 bg-transparent"
                >
                  <IconContext.Provider
                    value={{ size: "1.4rem", color: "#f8f9fa" }}
                  >
                    <RiLoopLeftLine />
                  </IconContext.Provider>
                </span>
              </div>
            </div>
            <div className="w-full sm:w-3/5  flex gap-4">
              {todo.replyCards.map((card, index) => (
                <div key={index}>
                  <ReplyCard
                    name={card.name}
                    description={card.description}
                    link={card.link}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
