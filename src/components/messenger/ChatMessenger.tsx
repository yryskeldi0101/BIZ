import React, { useEffect, useState } from "react";
import {
  getAllChatRequest,
  sendMessageRequest,
} from "../../api/chat/chatService";
import { Chat } from "./Chatlist";
import { ReactComponent as SendIcon } from "../../assets/icons/🦆 icon _send diagonal_.svg";
import MessageIcon from "../../assets/icons/free-message-2367724-1976874.webp";

interface ChatMessagesProps {
  chatId: number | null;
  chatData: Chat[];
  setChatData: (updatedData: Chat[]) => void;
}

export interface SendMessageType {
  chatId: number;
  volunteerId: number;
  managerId: number;
  message: string;
}
const ChatMessages: React.FC<ChatMessagesProps> = ({
  chatId,
  chatData,
  setChatData,
}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      return;
    }

    // const updatedChatData = [...chatData];
    // const selectedChatIndex = updatedChatData.findIndex(
    //   (chat) => chat.id === chatId
    // );

    // if (selectedChatIndex !== -1) {
    //   const newMessage = {
    //     id: Date.now(),
    //     message: message,
    //     isManager: false,
    //     senderUserId: 0,
    //     recipientUserId: 0,
    //   };

    //   updatedChatData[selectedChatIndex].messages.push(newMessage);

    //   setChatData(updatedChatData);
    //   setMessage("");
    // }
    try {
      const requestBody: SendMessageType = {
        chatId,
        volunteerId: 0,
        managerId: 0,
        message: message,
      };

      await sendMessageRequest(requestBody);
    } catch (error) {
      console.log(error);
    }
  };

  const selectedChat = chatData.find((chat) => chat.id === chatId);

  return (
    <div className="w-2/3 bg-white pt-5 px-4 rounded-lg  flex flex-col h-full overflow-y-auto">
      <div className="pb-2 mb-4">
        <div
          className={`flex items-center space-x-3 pb-4 ${
            selectedChat ? "border-b border-purple-300" : "border-none "
          }`}
        >
          {selectedChat && (
            <div className="flex items-center gap-5">
              <p className="w-11 h-11 flex items-center justify-center text-xl font-semibold bg-gray-300 rounded-full">
                {selectedChat?.fullName.charAt(0)}
              </p>
              <div>
                <p className="text-base text-black font-normal">
                  {selectedChat?.fullName}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="pt-2 h-[20rem] overflow-y-auto">
          {selectedChat && (
            <div className="space-y-2">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-2 rounded-md shadow-md w-96 text-white ${
                    !message.isManager
                      ? "bg-[#9747FF80] ml-auto"
                      : "bg-[#D3ABFFB2] mr-auto"
                  }`}
                >
                  {message.message}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-5 flex items-center">
          {selectedChat ? (
            <>
              <input
                type="text"
                placeholder="Type here"
                className="border border-purple-400 h-10 pl-3 w-[28rem] outline-none rounded-md"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-purple-300 hover:bg-purple-400 text-white py-3 px-3 rounded ml-2"
                onClick={handleSendMessage}
              >
                <SendIcon />
              </button>
            </>
          ) : (
            <div className="m-auto">
              <p className="text-xl w-[31rem] flex items-center text-gray-800">
                Выберите чат, чтобы начать общение.
                <img src={MessageIcon} alt="message" className="w-8 h-8" />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
