import React, { useEffect, useState } from "react";
import { toastError } from "../toast";
import {
  accepVolunterInMAnager,
  getAllVolunteersInManager,
} from "../../api/manager/mangerService";

type CompanyCardsType = {
  openByIdCompanyCardHandler: () => void;
};

interface CompanyVocancyType {
  vacancyId: string;
  vacancyName: string;
  volunteerRequestResponses: {
    fullName: string;
    age: number;
    email: string;
    date: string;
    phoneNumber: string;
    id: string;
  }[];
}

export const CompanyCards = ({
  openByIdCompanyCardHandler,
}: CompanyCardsType) => {
  const [volunteers, setVolunteers] = useState<CompanyVocancyType[]>();

  const getAllVolunteers = async () => {
    try {
      const result = await getAllVolunteersInManager();
      setVolunteers(result.data);
      return result.data;
    } catch (error: any) {
      return toastError(error.response?.data.message);
    }
  };
  console.log(volunteers);
  const accepVoulterHandler = async (data: string) => {
    try {
      accepVolunterInMAnager(data);
    } catch (error: any) {
      return toastError(error.response?.data.message);
    }
  };
  useEffect(() => {
    getAllVolunteers();
  }, []);
  return (
    <div>
      <div className="my-44 px-14 flex justify-center items-center w-[1500px] flex-wrap gap-5">
        {volunteers?.map((item, index) => (
          <div
            className="  rounded-2xl w-[394px] bg-base-100 flex flex-row shadow-xl p-10"
            key={item.vacancyId}
            onClick={openByIdCompanyCardHandler}
          >
            <h1 className="text-black text-3xl font-bold">
              {item?.vacancyName}
            </h1>
            <div>
              {item.volunteerRequestResponses.map((val) => {
                return (
                  <div>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title text-2xl">{val.fullName}</h2>
                      <p className="text-xl text-gray-500">{val.phoneNumber}</p>
                      <p className="text-xl text-gray-500">{val.email}</p>
                      <p className="text-xl text-gray-500">{val.age}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex item-center justify-center">
                <button
                  className="btn mb-2 w-[200px]"
                  onClick={() =>
                    accepVoulterHandler(
                      item.volunteerRequestResponses[index].id
                    )
                  }
                >
                  Принять
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
