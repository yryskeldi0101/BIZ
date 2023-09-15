import React from "react";
import { companyVocancy } from "../../utils/constants/contants";
import Arrowleft from "../../assets/icons/arrowLeft.svg";

type CompanyCardsType = {
  openCompanyCardHandler: () => void;
  openAllCompaniesCard: () => void;
};

interface CompanyVocancyType {
  id: number;
  companyName?: string;
  aboutVocancy: string;
  date: string;
}

export const CompanyCards = ({
  openCompanyCardHandler,
  openAllCompaniesCard,
}: CompanyCardsType) => {
  const cardsToDisplay = companyVocancy.slice(0, 4);
  return (
    <div
      onClick={openCompanyCardHandler}
      className="my-44 px-14 flex justify-between items-center flex-wrap gap-8 relative"
    >
      {cardsToDisplay.map((item: CompanyVocancyType) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={item.id}>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{item.companyName}</h2>
            <p className="text-xl text-gray-500">{item.aboutVocancy}</p>
            <span>{item.date}</span>
          </div>
        </div>
      ))}
      <button
        type="button"
        className="absolute right-7 bg-gray-200 rounded-full p-3"
        onClick={openAllCompaniesCard}
      >
        <img src={Arrowleft} alt="arrow" className=" rounded-full " />
      </button>
    </div>
  );
};
