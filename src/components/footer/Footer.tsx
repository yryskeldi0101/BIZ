import React from "react";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TelegramIcons from "../../assets/icons/telegram.svg";
import Logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-gray-100 p-20 flex justify-around items-start w-full">
      <div>
        <h2 className="text-3xl text-gray-600 w-2/5">
          Наша <span className="text-orange-400"> миссия</span>{" "}
        </h2>
        <p className="w-[450px] text-xl text-gray-500 pt-4">
          Мы стремимся создать общество, где каждый человек может найти место,
          где его примут и поддержат. Нашей миссией является объединение людей в
          сообщество заботы, где каждый может оказать помощь и получить ее в
          ответ.
        </p>
      </div>
      <div className="flex justify-around items-start w-3/5">
        <div>
          <h2 className="text-3xl mb-5">Адрес</h2>
          <span className=" text-xl text-gray-500 ">Улица. Эркиндик 64B</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl">Контакты</h2>
          <span className=" text-xl text-gray-500 pt-4">+(996) 777999211</span>
          <div className="flex items-center gap-3 pt-4">
            <img src={InstagramIcon} alt="instagram" />
            <span className=" text-xl text-gray-500">biz.kg</span>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <img src={TelegramIcons} alt="instagram" />
            <span className=" text-xl text-gray-500">@biz.kg</span>
          </div>
        </div>
        <div className="flex flex-col">
          <Link to="/" className="">
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
      </div>
    </div>
  );
};
