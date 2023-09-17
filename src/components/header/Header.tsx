import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/hopeHand.jpg";
import Message from "../../assets/images/message.png";
import { logOutFunction } from "../../store/auth/authThunk";
import Messenger from "../messenger/Messenger";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { toastInfo } from "../toast";
import { useState } from "react";

type HeaderTypes = {
  openSignUpBlockHandler?: () => void;
  openMessageHandler?: () => void;
};

export const Header = ({
  openSignUpBlockHandler,
  openMessageHandler,
}: HeaderTypes) => {
  const { pathname } = useLocation();
  const isAuthorization = useSelector(
    (state: RootState) => state.auth.isAuthorized
  );
  const [messengerState, setMessengerState] = useState({
    message: 0,
    chat: false,
  });

  const navigate = useNavigate();
  let buttonName = "";
  const navigateHandler = () => {
    switch (pathname) {
      case "/manager":
        logOutFunction();
        break;
      case "/volunteer":
        logOutFunction();
        break;
      default:
        navigate("/signin");
        break;
    }
  };
  switch (pathname) {
    case "/manager":
      buttonName = "Выйти";
      break;
    case "/volunteer":
      buttonName = "Выйти";
      break;
    default:
      buttonName = "Войти";
      break;
  }
  const stateOpenHandler = (data: { message: number; chat: boolean }) =>
    setMessengerState({
      ...messengerState,
      message: data.message,
      chat: data.chat,
    });
  return (
    <>
      <div className="flex justify-between px-10 py-5">
        <div>
          <Link to="" className="">
            <div className="w-28 flex justify-between items-center">
              <img
                src={Logo}
                alt=""
                className="w-14  h-10 bg-white rounded-3xl"
              />
              <h5 className="text-3xl">BIZ</h5>
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center  text-lg text-gray-600 ">
          <div className="flex gap-7 text-black">
            <Link to="/">Главная</Link>
            <Link to="about_us">О нас</Link>
            <a href="#contacts">Контакты</a>
          </div>
          <div className="dropdown">
            <button
              tabIndex={0}
              onClick={() => {
                if (isAuthorization) {
                  setMessengerState({ ...messengerState, chat: true });
                } else {
                  navigate("/signin");
                }
              }}
              className="px-7  flex items-center"
            >
              <img src={Message} alt="" className="w-8 h-8" />
            </button>
            {messengerState.chat && (
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box top-16 -right-28"
              >
                <Messenger
                  handleOpen={stateOpenHandler}
                  messengerState={messengerState}
                />
              </ul>
            )}
          </div>
          <button
            onClick={navigateHandler}
            className="py-[8px] px-[18px] bg-slate-600  text-white rounded-3xl "
          >
            {buttonName}
          </button>
        </div>
      </div>
    </>
  );
};
