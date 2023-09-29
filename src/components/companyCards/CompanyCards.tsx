import { useEffect, useState } from "react";
import { toastError } from "../toast";
import {
  accepVolunterInMAnager,
  getAllVolunteersInManager,
} from "../../api/manager/mangerService";

type CompanyCardsType = {
  openByIdCompanyCardHandler: () => void;
};

interface CompanyVocancyType {
  vacancyId: number;
  vacancyName: string;
  volunteerRequestResponses: {
    fullName: string;
    age: number;
    email: string;
    date: string;
    phoneNumber: string;
    id: number;
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

  const accepVoulterHandler = async (vacancyId: number, id: number) => {
    try {
      accepVolunterInMAnager(vacancyId, id);
    } catch (error: any) {
      return toastError(error.response?.data.message);
    }
  };
  useEffect(() => {
    getAllVolunteers();
  }, []);
  return (
    <div>
      <div className="my-44 px-14 flex  items-center  flex-wrap gap-5">
        {volunteers?.map((item) => (
          <div
            className="rounded-2xl  bg-gray-300 flex w-full shadow-xl p-10"
            key={item.vacancyId}
            onClick={openByIdCompanyCardHandler}
          >
            <h1 className="text-black text-2xl font-medium">
              {item?.vacancyName}
            </h1>
            <div>
              {item.volunteerRequestResponses.map((val) => {
                return (
                  <>
                    <div key={val.id}>
                      <div className=" items-center text-center">
                        <h2 className="text-2xl">{val.fullName}</h2>
                        <p className="text-xl text-gray-500">
                          {val.phoneNumber}
                        </p>
                        <p className="text-xl text-gray-500">{val.email}</p>
                        <p className="text-xl text-gray-500">{val.age}</p>
                      </div>
                    </div>
                    <div className="">
                      <button
                        className="py-2 px-8 bg-blue-600 hover:bg-blue-500 text-white text-xl rounded-md"
                        onClick={() =>
                          accepVoulterHandler(item.vacancyId, val.id)
                        }
                      >
                        Принять
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
