import React from "react";
import MainImage from "../../assets/images/pngegg.png";

export const MainSlider = () => {
  const divStyle = {
    backgroundImage: `url(${MainImage})`,
    marginLeft: "40px",
  };
  return (
    <div className="flex justify-between items-center px-14">
      <div className="w-1/2">
        <p className="text-6xl  leading-tight font-bold text-gray-600">
          Волонтёры не получают зарплату не потому, что они бесполезны, а
          потому, что они бесценны
        </p>
        <button className="py-[10px] px-16 bg-slate-600 text-white rounded-3xl mt-8 text-2xl">
          Войти
        </button>
      </div>
      <div style={divStyle}>
        <img src={MainImage} alt="" />
      </div>
    </div>
  );
};
