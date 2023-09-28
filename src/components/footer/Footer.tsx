import React from "react";
import InstagramIcon from "../../assets/icons/instagram.svg";
import TelegramIcons from "../../assets/icons/telegram.svg";

export const Footer = () => {
  return (
    <div
      id="contacts"
      className="bg-gray-100 sm:p-20 p-10 flex justify-around items-start w-full flex-wrap"
    >
      <div>
        <h2 className="text-3xl text-gray-600 sm:w-2/5">
          Наша <span className="text-orange-400"> миссия</span>{" "}
        </h2>
        <p className="sm:w-[28.125rem] text-base text-gray-500 pt-4">
          Мы стремимся создать общество, где каждый человек может найти место,
          где его примут и поддержат. Нашей миссией является объединение людей в
          сообщество заботы, где каждый может оказать помощь и получить ее в
          ответ.
        </p>
      </div>
      <div className="flex sm:justify-around sm:pt-0 pt-5  sm:w-3/5">
        <div className="sm:pr-0 pr-7">
          <h2 className="text-xl mb-5">Адрес</h2>
          <span className=" text-base text-gray-500 ">Улица. Эркиндик 64B</span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl">Контакты</h2>
          <span className=" text-base text-gray-500  cursor-pointer">
            +(996) 777999211
          </span>

          <div className="flex items-center gap-3 pt-4 cursor-pointer">
            <img src={InstagramIcon} alt="instagram" />
            <span className=" text-base text-gray-500">biz.kg</span>
          </div>
          <div className="flex items-center gap-3 pt-4 cursor-pointer">
            <img src={TelegramIcons} alt="instagram" />
            <span className=" text-base text-gray-500 ">@biz.kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};
