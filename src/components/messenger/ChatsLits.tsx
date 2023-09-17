import React, { useEffect, useState } from "react";
import { getAllChatRequest } from "../../api/chat/chatService";

// const chatData = [
//   {
//     id: 1,
//     company: "Peaksoft",
//     name: "John",
//     message: "Hello, how are you?",
//   },
//   {
//     id: 2,
//     company: "Codify",
//     name: "Alice",
//     message: "I'm good, thanks!",
//   },
//   {
//     id: 3,
//     company: "Codify",
//     name: "Alice",
//     message: "I'm good, thanks!",
//   },
// ];

type Message = {
  id: number;
  message: string;
  isManager: boolean;
};

type ChatUser = {
  id: number;
  fullName: string;
  messages: Message[];
};
interface ChatListProps {
  activeChat: {
    message: number;
    chat: boolean;
  };
  setActiveChat: (data: { message: number; chat: boolean }) => void;
}

const ChatList: React.FC<ChatListProps> = ({ activeChat, setActiveChat }) => {
  const [chatData, setChatData] = useState<ChatUser[]>([]);

  useEffect(() => {
    const getAllChat = async () => {
      try {
        const { data } = await getAllChatRequest();
        setChatData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllChat();
  }, []);

  return (
    <div className="w-72 p-4 h-[30rem] overflow-y-auto bg-white">
      <div className="text-xl font-semibold border-b-2 pb-8  text-slate-600">
        Чаты
      </div>
      {chatData.map((chat) => (
        <div
          key={chat.id}
          onClick={() => setActiveChat({ ...activeChat, message: chat.id })}
          className={`p-2 cursor-pointer flex gap-5 border-b-2 ${
            activeChat.message === chat.id ? "bg-gray-100" : ""
          }`}
        >
          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            <p className="text-base font-medium"> {chat.fullName[0]}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-slate-600">
              {/* {chat.company} */}
            </h2>
            <h3 className="text-lg">{chat.fullName}</h3>
            {/* <p className="text-gray-600 ">{chat.message}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
