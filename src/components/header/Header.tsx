import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/LOGO-removebg-preview 1.png";
import { ReactComponent as CrossIcon } from "../../assets/icons/x (2).svg";
import Message from "../../assets/icons/🦆 icon _mail_.svg";
import { logOutFunction } from "../../store/auth/authThunk";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import Messenger from "../messenger/Messenger";

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
      <div className="flex justify-between sm:px-10 px-5 py-5">
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
        <div className="drawer-end z-10 block sm:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="drawer-button">
              <img
                src="https://www.svgrepo.com/show/506800/burger-menu.svg"
                alt="burgerIcon"
                className="w-9 h-9"
              />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-64 pl-5 text-xl   font-medium min-h-full pt-10 bg-base-200 text-base-content">
              <label className="" htmlFor="my-drawer">
                <CrossIcon />
              </label>
              <div className="pl-8 pt-4">
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to="about_us">О нас</Link>
                </li>
                <li>
                  <a href="#contacts">Контакты</a>
                </li>
                <li>
                  <button onClick={navigateHandler} className="">
                    {buttonName}
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="sm:flex justify-between items-center  text-lg text-gray-600 hidden">
          <div className="sm:flex sm:gap-7 sm:text-black ">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#A966FF" : "",
                };
              }}
            >
              Главная
            </NavLink>
            <NavLink
              to="about_us"
              style={({ isActive }) => {
                return {
                  color: isActive ? "#A966FF" : "",
                };
              }}
            >
              О нас
            </NavLink>
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
                className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box top-16 -right-28 border border-purple-400 rounded-md"
              >
                {/* <Messenger
                  handleOpen={stateOpenHandler}
                  messengerState={{
                    message: 0,
                    chat: false,
                  }}
                /> */}
                {/* <MessengerBox />/ */}
                <Messenger />
              </ul>
            )}
          </div>
          <button
            onClick={navigateHandler}
            className="py-[8px] sm:px-[18px] px-4 bg-[#9747FF] text-sm hover:bg-purple-600  text-white rounded-md hidden sm:block"
          >
            {buttonName}
          </button>
        </div>
      </div>
    </>
  );
};
