import React, { useEffect, useState } from "react";
import { getAllChatRequest } from "../../api/chat/chatService";
import { Chat } from "./Chatlist";

// interface MessageType {
//   id: number;
//   message: string;
//   isManager: boolean;
//   senderUserId: number;
//   recipientUserId: number;
// }
// export interface Chat {
//   id: number;
//   userId: number;
//   managerId: number;
//   fullName: string;
//   messages: MessageType[];
// }

interface ChatMessagesProps {
  chatId: number | null;
  chatData: Chat[];
  setChatData: (updatedData: Chat[]) => void;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
  chatId,
  chatData,
  setChatData,
}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const updatedChatData = [...chatData];
    const selectedChatIndex = updatedChatData.findIndex(
      (chat) => chat.id === chatId
    );

    if (selectedChatIndex !== -1) {
      const newMessage = {
        id: Date.now(),
        message: message,
        isManager: false,
        senderUserId: 0,
        recipientUserId: 0,
      };

      updatedChatData[selectedChatIndex].messages.push(newMessage);

      setChatData(updatedChatData);
      setMessage("");
    }
  };
  const selectedChat = chatData.find((chat) => chat.id === chatId);

  return (
    <div className="w-2/3 bg-white pt-5 px-4 rounded-lg  flex flex-col h-full overflow-y-auto">
      <div className="border-b pb-2 mb-4">
        <div className="flex items-center space-x-3">
          <p className="w-8 h-8 bg-gray-300 rounded-full"></p>
          <div>
            <p className="text-xl font-semibold">{}</p>
          </div>
        </div>
        <div className="pt-2 h-[20rem] overflow-y-auto">
          {selectedChat && (
            <div className="space-y-2">
              {selectedChat.messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-2 rounded-md shadow-md w-96 ${
                    !message.isManager
                      ? "bg-blue-300 ml-auto"
                      : "bg-gray-100 mr-auto"
                  }`}
                >
                  {message.message}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-5 flex items-center">
          <>
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
          </>
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
