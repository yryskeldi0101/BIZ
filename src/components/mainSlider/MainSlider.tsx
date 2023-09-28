import React from "react";
import MainImage from "../../assets/images/mainImage.png";
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
    <div className="flex sm:justify-between sm:items-center flex-wrap sm:px-14 px-5 pt-7">
      <div className="w-[39rem] sm:pb-0 pb-7">
        <img src={MainImage} alt="mainImage" />
      </div>
      <div className="sm:w-1/2 pl-4">
        <p className="sm:text-4xl text-2xl leading-tight font-normal text-gray-800">
          Волонтёры не получают зарплату не потому, что они бесполезны, а
          потому, что они бесценны
        </p>
        <button
          className="sm:py-[10px] py-2.5 sm:px-16 px-8 bg-slate-600 text-white rounded-3xl sm:mt-8 mt-5 sm:text-xl"
          onClick={navigateHandler}
        >
          Войти
        </button>
      </div>
    </div>
  );
};
