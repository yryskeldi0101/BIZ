import React, { useState } from "react";
import ChatList from "./ChatsLits";
import ChatMessages from "./ChatMessenger";

const Messenger: React.FC = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);

  return (
    <div className="flex w-[50rem] rounded-lg border-2 shadow-md m-auto mb-10 ">
      <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />
      <ChatMessages chatId={activeChat} />
    </div>
  );
};

export default Messenger;
