import React, { Fragment, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoSend } from "react-icons/io5";
import chats from "../data/chats.json";
import { extractFirstLetter } from "../utils/extractFirstLetter";
import "../components/styles/scrollbar.css";

export const Chat = () => {
  const { chatId } = useParams();
  const chatMates = chats.chatMates;
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  const currentChatMate = chatMates.find(
    (chatMate) => chatMate.userId === parseInt(chatId)
  );

  useEffect(() => {
    const updateMessages = () => {
      if (!currentChatMate.messages[0]) return;

      setMessages(() => currentChatMate.messages);
    };
    updateMessages();
  }, [messages, setMessages, chatId]);

  // Current user is Assumed to "tibdan" and userId is 1
  const getChatMateName = (userId) => {
    if (userId == 1) return "tibdan";
    return currentChatMate.name;
  };

  const isCurrentUser = (userId) => {
    return userId === 1;
  };

  const sendMessageHandler = (event) => {
    event.preventDefault();
    if (!msg) return;

    messages.push({ userId: 1, message: msg });
    setMsg(() => "");
  };

  return (
    <Fragment>
      <div
        className="flex flex-col items-center justify-center
        text-gray-100 relative h-[100vh]s"
      >
        <header className="w-full p-3 py-0">
          <div className="flex items-center gap-3 rounded-2xl">
            <div className="w-12 h-12">
              <span
                className="cursor-pointer grid place-items-center
                w-12 h-12 rounded-[50%] text-gray-50 first-letter:uppercase 
                bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
              >
                {extractFirstLetter(currentChatMate.name)}
              </span>
            </div>
            <div>
              <p className="text-lg">{currentChatMate.name}</p>
              <p className="text-gray-500 text-sm">By {currentChatMate.tag}</p>
            </div>
          </div>
        </header>
        <div
          className="w-full flex flex-col items-center justify-center
          bg-green-500s h-[85vh] overflow-x-auto py-40 scroll-bar"
        >
          <div className="w-full flex items-center justify-center mt-[1050px]">
            <div
              className="flex flex-col items-center justify-center 
              gap-3 rounded-2xl"
            >
              <div className="w-12 h-12">
                <span
                  className="cursor-pointer grid place-items-center
                  w-12 h-12 rounded-[50%] text-gray-50 first-letter:uppercase 
                  bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
                >
                  {extractFirstLetter(currentChatMate.name)}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg">{currentChatMate.name}</p>
                <p className="text-gray-500 text-sm">
                  {currentChatMate.description}
                </p>
                <p className="text-gray-500 text-sm">
                  By {currentChatMate.tag}
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full md:max-w-[600px] mt-8 flex flex-col 
            items-center justify-center gap-8 bg-blue-500s"
          >
            {messages.map((message, index) => (
              <div
                className={`w-full flex flex-cols gap-2 items-center ${
                  isCurrentUser(message.userId)
                    ? "justify-end"
                    : "justify-start"
                }`}
                key={index}
              >
                <div className="space-y-2">
                  {isCurrentUser(message.userId) && (
                    <p className="flex items-center justify-end gap-2">
                      <span>{getChatMateName(message.userId)}</span>
                      <span
                        className="cursor-pointer grid place-items-center text-sm
                      w-6 h-6 rounded-[50%] text-gray-50 first-letter:uppercase 
                      bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
                      >
                        {extractFirstLetter(getChatMateName(message.userId))}
                      </span>
                    </p>
                  )}
                  {!isCurrentUser(message.userId) && (
                    <p className="flex items-center gap-2">
                      <span
                        className="cursor-pointer grid place-items-center text-sm
                      w-6 h-6 rounded-[50%] text-gray-50 first-letter:uppercase 
                      bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-800"
                      >
                        {extractFirstLetter(getChatMateName(message.userId))}
                      </span>
                      <span>{getChatMateName(message.userId)}</span>
                    </p>
                  )}
                  <p
                    className="p-4 rounded-2xl bg-gray-800 text-gray-200 
                  inline-block w-auto max-w-full sm:max-w-[500px]"
                  >
                    {message.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-[100vw]s w-full flex items-center justify-center 
          py-4 sm:px-16 absolute left-0 bottom-0 bg-gray-900"
        >
          <div className="w-full grid place-items-center">
            <form
              className="relative w-full md:max-w-[600px]"
              onSubmit={(event) => sendMessageHandler(event)}
            >
              <input
                type="text"
                onChange={(event) => setMsg(() => event.target.value)}
                value={msg}
                className="w-full bg-gray-800 rounded-[32px] px-8 py-3
                border-[1px] border-gray-700 outline-none placeholder:text-gray-500
                pr-12"
                placeholder={`Message ${currentChatMate.name}...`}
                required
              />
              <button
                className="cursor-pointer w-10 h-10 rounded-[50%] bg-gray-200
                 flex items-center justify-center absolute top-[5px] right-[6px]"
                type="submit"
              >
                <IconContext.Provider
                  value={{ size: "1.0rem", color: "#212529" }}
                >
                  <IoSend />
                </IconContext.Provider>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
