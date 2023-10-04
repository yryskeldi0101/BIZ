import React, { useEffect, useState } from "react";
import { aboutVacancyCard } from "../../utils/constants/contants";

interface CompanyType {
  id: number;
  name: string;
  date: string;
  reward: string;
  positon: string;
  howLongDate: string;
  howLongTime: string;
  description: string;
  requirement: string;
}

const AboutaCompanyCard = () => {
  const [vacancyData, setVacancyData] =
    useState<CompanyType[]>(aboutVacancyCard);
  const [visibleButton, setVisibleButton] = useState<boolean>(false);

  useEffect(() => {
    setVacancyData(vacancyData);
  }, [vacancyData]);

  return (
    <div className="flex flex-wrap  sm:px-14 px-5 gap-10 sm:pt-12 pt-6 ">
      {vacancyData.map((item) => (
        <div
          key={item.id}
          className="w-[24rem] sm:h-[23rem] bg-pink-50 p-7 rounded-2xl border-2 border-pink-300 relative "
          onMouseEnter={() => setVisibleButton(true)}
          onMouseLeave={() => setVisibleButton(false)}
        >
          {visibleButton ? (
            <div
              className={`absolute top-0 left-0 w-full h-full text-sm font-medium rounded-2xl   transition-opacity duration-300 opacity-0 hover:opacity-100 flex flex-col justify-center items-center`}
            >
              <button className="bg-white text-black px-6 py-2 rounded hover:bg-slate-100  m-2">
                Узнать больше
              </button>
              <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-500  m-2">
                Откликнуться
              </button>
            </div>
          ) : null}
          <div className="flex justify-between sm:pb-9 pb-3">
            <div>
              <h1 className="text-black sm:text-2xl text-base font-medium">
                {item.name}
              </h1>
              <p className="text-[#414141] text-xs font-medium">{item.date}</p>
              <p className="text-[#414141] text-xs font-medium">
                {item.reward}
              </p>
              <p className="text-black sm:text-lg  text-base font-medium">
                {item.positon}
              </p>
            </div>
            <p className="w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center text-2xl font-medium">
              {item.name.charAt(0)}
            </p>
          </div>
          <div className="text-black text-sm font-medium leading-2">
            <p>{item.howLongDate}</p>
            <p>{item.howLongTime}</p>
            <p className="pt-3 pb-5">
              <span className="font-semibold ">Описание: </span>
              {item.description}
            </p>
            <p>
              <span className="font-semibold">Требование:</span>{" "}
              {item.requirement}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutaCompanyCard;
