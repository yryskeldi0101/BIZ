import React from "react";
import { companyVocancy } from "../../utils/constants/contants";

interface AllCompanyVocancyType {
  id: number;
  companyName?: string;
  aboutVocancy: string;
  date: string;
}

export const AllCompanyCards: React.FC = () => {
  const openByIdCompanyCardHandler: React.MouseEventHandler<
    HTMLDivElement
  > = () => {};
  const sendRequestToCompaniesHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {};
  return (
    <div>
      <h2 className="px-14 text-4xl tracking-wide text-orange-500">
        Вам подойдут эти волонтерства
      </h2>
      <div className="mb-44 mt-14 px-14  flex flex-wrap items-center gap-8 relative m-auto w-full">
        {companyVocancy.map((item: AllCompanyVocancyType) => (
          <div
            className="card w-96 bg-base-100 shadow-xl"
            key={item.id}
            onClick={openByIdCompanyCardHandler}
          >
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{item.companyName}</h2>
              <p className="text-xl text-gray-500">{item.aboutVocancy}</p>
              <span>{item.date}</span>
              <button
                onClick={sendRequestToCompaniesHandler}
                className="right-7 bg-gray-500 hover:bg-gray-400 rounded-full py-2 px-4 mt-5 text-xl text-white"
              >
                Откликнуться
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
