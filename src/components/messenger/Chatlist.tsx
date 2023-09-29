import React, { useState } from "react";
import Icon from "../../assets/icons/Favorites.svg";
import ChatMessages from "./ChatMessenger";

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

  //   useEffect(() => {
  //     const getAllChat = async () => {
  //       try {
  //         const { data } = await getAllChatRequest();
  //         setChatData(data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getAllChat();
  //   }, []);

  const handleChatClick = (chatId: number) => {
    setActiveChat(chatId);
  };
  const chatDataFormatted = chatDataD.map((chat) => ({
    id: chat.id,
    userId: 0, // Здесь вы должны указать соответствующие значения
    managerId: 0, // Здесь вы должны указать соответствующие значения
    fullName: chat.fullName,
    messages: chat.messages,
  }));
  return (
    <>
      <div className="w-72 p-4 h-[30rem] overflow-y-auto bg-white">
        <div className="text-lg font-extrabold p-2">Чаты</div>
        {chatData.map((chat) => (
          <div
            key={chat.id}
            onClick={() => handleChatClick(chat.id)}
            className={`p-2 cursor-pointer flex gap-5 ${
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
              <h2 className="text-lg font-semibold">{chat.fullName}</h2>
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
