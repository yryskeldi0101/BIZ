import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import Message from "../../assets/images/message.png";

type HeaderTypes = {
  openSignUpBlockHandler?: () => void;
  openMessageHandler?: () => void;
};

export const Header = ({
  openSignUpBlockHandler,
  openMessageHandler,
}: HeaderTypes) => {
  const { pathname } = useLocation();
  console.log(pathname);

  let buttonName = "";

  if (pathname === "/manager") {
    buttonName = "Выйти";
  } else {
    buttonName = "Войти";
  }

  return (
    <div className="flex justify-between p-10 mb-20">
      <div>
        <Link to="" className="">
          <div className="w-28 flex justify-between items-center">
            <img
              src={Logo}
              alt=""
              className="w-10  h-10 bg-white rounded-3xl"
            />
            <h5 className="text-3xl font-mono">BIZ</h5>
          </div>
        </Link>
      </div>
      <div className="flex justify-between items-center w-4/12 text-[22px] text-gray-600 ">
        {" "}
        <Link to="/">Главная</Link>
        <Link to="about_us">О нас</Link>
        <Link to="">Контакты</Link>
        <Link to="" className="w-8 h-8">
          <img src={Message} alt="" />
        </Link>
        <button className="py-[8px] px-[18px] bg-slate-600 text-white rounded-3xl">
          {buttonName}
        </button>
      </div>
    </div>
  );
};
