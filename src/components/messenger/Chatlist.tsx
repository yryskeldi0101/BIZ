import React, { useEffect, useState } from "react";
import Icon from "../../assets/icons/Favorites.svg";
import ChatMessages from "./ChatMessenger";
import { getAllChatRequest } from "../../api/chat/chatService";

interface ChatListProps {
  activeChat: number | null;
  setActiveChat: React.Dispatch<React.SetStateAction<number | null>>;
}
export interface MessageType {
  id: number;
  message: string;
  isManager: boolean;
  senderUserId: number;
  recipientUserId: number;
}
export interface Chat {
  id: number;
  userId: number;
  managerId: number;
  fullName: string;
  messages: MessageType[];
}

const chatDataD = [
  {
    id: 1,
    fullName: "Peaksoft",
    messages: [
      {
        id: 1,
        message: "Hello!",
        isManager: true,
        senderUserId: 0,
        recipientUserId: 0,
      },
      {
        id: 2,
        message: "How are you doing?",
        isManager: false,
        senderUserId: 1,
        recipientUserId: 0,
      },
    ],
  },
  {
    id: 3,
    fullName: "Google",
    messages: [
      {
        id: 3,
        message: "Привет!",
        isManager: true,
        senderUserId: 0,
        recipientUserId: 0,
      },
      {
        id: 4,
        message: "Чем занят?",
        isManager: false,
        senderUserId: 3,
        recipientUserId: 0,
      },
    ],
  },
];
const ChatList: React.FC<ChatListProps> = ({ activeChat, setActiveChat }) => {
  const [chatData, setChatData] = useState(chatDataD);

  // useEffect(() => {
  //   const getAllChat = async () => {
  //     try {
  //       const { data } = await getAllChatRequest();
  //       setChatData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAllChat();
  // }, []);

  const handleChatClick = (chatId: number) => {
    setActiveChat(chatId);
  };
  const chatDataFormatted = chatDataD.map((chat) => ({
    id: chat.id,
    userId: 0,
    managerId: 0, 
    fullName: chat.fullName,
    messages: chat.messages,
  }));
  return (
    <>
      <div className="w-72  h-[30rem] overflow-y-auto bg-white pt-4 border-r border-purple-300">
        <div className="text-2xl font-normal text-black p-2 pl-7 pb-5 ">
          BIZ-чат
        </div>
        {chatData.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat.id)}
            className={`p-2 cursor-pointer flex  items-center gap-5 px-7 ${
              activeChat === chat.id ? "bg-[#9747FF80] text-white" : ""
            }`}
          >
            <div>
              <p className="flex items-center justify-center text-xl w-12 h-12 rounded-full bg-gray-300">
                {chat.fullName.charAt(0)}
              </p>
            </div>
            <div className="flex flex-col ">
              <h2 className="text-lg font-normal">{chat.fullName}</h2>
            </div>
          </div>
        ))}
      </div>
      <ChatMessages
        chatId={activeChat}
        chatData={chatDataFormatted}
        setChatData={setChatData}
      />
    </>
  );
};

export default ChatList;
