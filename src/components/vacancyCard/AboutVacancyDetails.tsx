import React from "react";
import calendarIcon from "../../assets/icons/🦆 icon _calendar_.svg";
import timeIcon from "../../assets/icons/🦆 icon _clock_.svg";
import mapIcon from "../../assets/icons/🦆 icon _map_.svg";
import heartIcon from "../../assets/icons/heart.svg";
import CompanyDetailsPage from "./CompanyDetailsPage";

const AboutVacancyDetails = () => {
  return (
    <div className="flex">
      <div className="w-96 p-8 bg-pink-100 border-2 border-pink-400 rounded-xl ">
        <div className="flex justify-between">
          <h1 className="text-black sm:text-2xl text-base font-medium">
            Название компании
          </h1>
          <img src={heartIcon} alt="heart" />
        </div>
        <p className="text-[#414141] text-xs font-medium">12.12.23</p>
        <p className="text-[#414141] text-xs font-medium pb-2">
          Оплачиваемость
        </p>
        <h3 className="text-black sm:text-lg  text-base font-medium pb-3">
          Позиция
        </h3>
        <div className="flex items-center gap-3 text-xs text-black font-medium">
          <img src={calendarIcon} alt="calendar" />
          <p>20.12.23 - 23.12.23</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-black font-medium py-1.5">
          <img src={timeIcon} alt="time" />
          <p>10:00-18:00</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-black font-medium pb-5">
          <img src={mapIcon} alt="map" />
          <p>AUCA</p>
        </div>
        <p className="text-black text-sm font-medium pb-3">
          <span className="font-semibold ">Описание: </span>Contrary to popular
          belief, Lorem Ipsum is not siliterature from 45 BC, making it over
          2000 year to popular belief, Lorem Ipsum is not siliterature from 45
          BC, making it over 2000 year to popular belief, Lorem Ipsum is not
          siliterature from 45 BC, making it over 2000 year to popular belief,
          Lorem Ipsum is not siliterature from 45 BC, making it over 2000 year
          to popular belief, Lorem Ipsum is not siliterature from 45 BC, making
          it over 2000 year
        </p>
        <p className="text-black text-sm font-medium ">
          <span className="font-semibold ">Требование: </span> Finibus Bonorum
          et Malorum" (The Extremes of Good and Evil) by Cicero looked up one of
          the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature,
          discovered the undoubtable source.
        </p>
        <div className="flex justify-end pt-5">
          <button className="bg-[#F24822] text-white px-7 py-1.5 rounded-md ">
            Откликнуться
          </button>
        </div>
      </div>
      <CompanyDetailsPage />
    </div>
  );
};

export default AboutVacancyDetails;
