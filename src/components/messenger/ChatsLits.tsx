import React from "react";
import Icon from "../../assets/icons/userIcon.png";

interface ChatListProps {
  activeChat: number | null;
  setActiveChat: React.Dispatch<React.SetStateAction<number | null>>;
}

const ChatList: React.FC<ChatListProps> = ({ activeChat, setActiveChat }) => {
  const chatData = [
    {
      id: 1,
      company: "Peaksoft",
      name: "John",
      message: "Hello, how are you?",
    },
    {
      id: 2,
      company: "Codify",
      name: "Alice",
      message: "I'm good, thanks!",
    },
    {
      id: 3,
      company: "Codify",
      name: "Alice",
      message: "I'm good, thanks!",
    },
    {
      id: 4,
      company: "Codify",
      name: "Alice",
      message: "I'm good, thanks!",
    },
  ];

  const handleChatClick = (chatId: number) => {
    setActiveChat(chatId);
  };

  return (
    <div className="w-72 p-4 h-[30rem] overflow-y-auto">
      <div className="text-xl font-semibold border-b-2 pb-8 font-serif text-slate-600">
        Чаты
      </div>
      {chatData.map((chat) => (
        <div
          key={chat.id}
          onClick={() => handleChatClick(chat.id)}
          className={`p-2 cursor-pointer flex gap-5 border-b-2 ${
            activeChat === chat.id ? "bg-white" : ""
          }`}
        >
          <div>
            <img
              src={Icon}
              alt="#"
              className="w-12 h-12 rounded-full bg-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-slate-600">
              {chat.company}
            </h2>
            <h3 className="text-lg font-serif">{chat.name}</h3>
            <p className="text-gray-600 font-serif">{chat.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
