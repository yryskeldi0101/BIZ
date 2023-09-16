import React, { useState } from "react";
import Icon from "../../assets/icons/userIcon.png";

interface Message {
  text: string;
  sender: string;
}

export interface Chat {
  id: number;
  messages: Message[];
  name: string;
}

const ChatMessages: React.FC<{ chatId: number | null }> = ({ chatId }) => {
  const [message, setMessage] = useState("");

  const [chatData, setChatData] = useState([
    {
      id: 1,
      messages: [
        { text: "Hello!", sender: "other" },
        { text: "How are you doing?", sender: "user" },
        { text: "What's new?", sender: "user" },
      ],
    },
    {
      id: 2,
      messages: [{ text: "I'm good, thanks!", sender: "other" }],
    },
    {
      id: 3,
      messages: [
        { text: "Hello!", sender: "other" },
        { text: "How are you doing?", sender: "user" },
        { text: "What's new?", sender: "user" },
      ],
    },
    {
      id: 4,
      messages: [{ text: "I'm good, thanks!", sender: "other" }],
    },
  ]);

  const selectedChat = chatData.find((chat) => chat.id === chatId);

  const handleSendMessage = () => {
    if (selectedChat) {
      const updatedChatData = chatData.map((chat) => {
        if (chat.id === selectedChat.id) {
          return {
            ...chat,
            messages: [...chat.messages, { text: message, sender: "user" }],
          };
        }
        return chat;
      });

      setChatData(updatedChatData);
      setMessage("");
    }
  };

  return (
    <div className="w-2/3 bg-white p-4 rounded-lg shadow-lg flex flex-col h-[30rem] overflow-y-auto">
      <div className="sticky top-0 bg-white z-10">
        <div className="border-b pb-2 mb-4">
          <div className="flex items-center space-x-3">
            <img
              src={Icon}
              alt=""
              className="w-8 h-8 bg-gray-300 rounded-full"
            />
            <div>
              <p className="text-xl font-semibold font-serif text-slate-600">
                Ника
              </p>
              <p className="text-gray-500 font-serif">12.12.12</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 h-[20rem] overflow-y-auto">
        {selectedChat && (
          <div className="space-y-2">
            {selectedChat.messages.map((message, index) => {
              const isUserMessage = message.sender === "user";
              const messageClass = isUserMessage
                ? "bg-slate-600 text-white ml-auto"
                : "bg-gray-100";
              return (
                <div
                  key={index}
                  className={`p-2 rounded-md shadow-md ${messageClass}`}
                >
                  {message.text}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-5 flex items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[22rem]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="bg-slate-600 text-white py-3 px-6 rounded ml-2"
          onClick={handleSendMessage}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ChatMessages;
