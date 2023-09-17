import React from "react";
import ChatList from "./ChatsLits";
import ChatMessages from "./ChatMessenger";
import { ReactComponent as CrossIcon } from "../../assets/icons/x (2).svg";
type Props = {
  handleOpen: (data: { message: number; chat: boolean }) => void;
  messengerState: {
    message: number;
    chat: boolean;
  };
};
const Messenger: React.FC<Props> = ({ handleOpen, messengerState }) => {
  return (
    <div className="flex w-[50rem] rounded-lg  m-auto mb-5 pt-2">
      <ChatList activeChat={messengerState} setActiveChat={handleOpen} />
      <ChatMessages chatId={messengerState} setActiveChat={handleOpen} />
      <div className="relative pr-8">
        <button
          onClick={() =>
            handleOpen({
              ...messengerState,
              message: 0,
              chat: messengerState.message === 0 ? false : true,
            })
          }
          className="absolute"
        >
          <CrossIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
};

export default Messenger;
