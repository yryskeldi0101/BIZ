import React from "react";
import MainImage from "../../assets/images/people-with-food-donations-close-up 1.png";
import { useNavigate } from "react-router-dom";

type MainSliderTypes = {
  openSignUpBlockHandler: () => void;
};

export const MainSlider = ({ openSignUpBlockHandler }: MainSliderTypes) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/signin");
  };
  return (
    <div className="flex sm:justify-between sm:items-center flex-wrap sm:px-14 px-5 sm:pt-7 pt-2">
      <div className="sm:w-1/2 pl-4  text-black pt-5">
        <h1 className="sm:text-6xl text-2xl leading-tight font-normal pb-4 ">BIZ</h1>
        <p className="text-2xl font-normal sm:pb-14 pb-7">
          Создадим наше будущее вместе!
        </p>
        <p className="sm:text-3xl font-normal text-xl">
          Мы верим, что каждый может внести вклад в благотворительность и помощь
          тем, кто в ней нуждается. Присоединяйтесь к нам, чтобы быть частью
          перемен в лучшую сторону.
        </p>
        <div className="flex items-center gap-5 sm:pt-16 pt-8 sm:pb-0 pb-10">
          <button
            className="sm:py-[10px] py-2.5 sm:px-4 px-8 bg-[#9747FF] text-white rounded-sm  sm:text-base"
            onClick={navigateHandler}
          >
            Войти
          </button>
          <p className="text-base font-normal text-black">В наши ряды</p>
        </div>
      </div>
      <div className="w-[38rem] sm:pb-0 pb-7">
        <img src={MainImage} alt="mainImage" />
      </div>
    </div>
  );
};
