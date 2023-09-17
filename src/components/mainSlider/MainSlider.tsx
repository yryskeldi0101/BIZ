import React from "react";
import MainImage from "../../assets/images/mainImage.png";
import { useNavigate } from "react-router-dom";

type MainSliderTypes = {
  openSignUpBlockHandler: () => void;
};

export const MainSlider = ({ openSignUpBlockHandler }: MainSliderTypes) => {
  const navigate = useNavigate();
  const divStyle = {
    backgroundImage: `url(${MainImage})`,
    marginLeft: "40px",
  };
  const navigateHandler = () => {
    navigate("/signin");
  };
  return (
    <div className="flex justify-between items-center px-14 pt-7">
      <div className="w-1/2">
        <p className="text-5xl  leading-tight font-normal text-gray-800">
          Волонтёры не получают зарплату не потому, что они бесполезны, а
          потому, что они бесценны
        </p>
        <button
          className="py-[10px] px-16 bg-slate-600 text-white rounded-3xl mt-8 text-xl"
          onClick={navigateHandler}
        >
          Войти
        </button>
      </div>
      <div style={divStyle}>
        <img src={MainImage} alt="" />
      </div>
    </div>
  );
};
