import React, { useState } from "react";
import ChatList from "./Chatlist";
import { ReactComponent as CrossIcon } from "../../assets/icons/x (2).svg";

const Messenger: React.FC = () => {
  const [activeChat, setActiveChat] = useState<number | null>(null);

  const closeChatHandler = () => {
    setActiveChat(null);
  };
  return (
    <div className="flex">
      <ChatList activeChat={activeChat} setActiveChat={setActiveChat} />
      <div className="relative right-10">
        <button className="absolute" onClick={closeChatHandler}>
          <CrossIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default Messenger;
