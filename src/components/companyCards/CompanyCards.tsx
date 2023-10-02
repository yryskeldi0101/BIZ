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
            className="rounded-2xl  bg-gray-300  w-96 shadow-xl p-10"
            key={item.vacancyId}
            onClick={openByIdCompanyCardHandler}
          >
            <h1 className="text-black text-2xl font-medium">
              {item?.vacancyName}
            </h1>
            <div>
              {item.volunteerRequestResponses.map((val) => {
                return (
                  <div>
                    <div key={val.id}>
                      <div className=" items-start text-start text-xs text-gray-600 font-semibold">
                        <h2 className="">
                          Имя И Фамилия:
                          <span className="text-base text-black font-normal pl-2">
                            {val.fullName}
                          </span>
                        </h2>
                        <p className="">
                          Номер телефона:
                          <span className="text-base text-black font-normal pl-2">
                            {val.phoneNumber}
                          </span>
                        </p>
                        <p className=" ">
                          Email:
                          <span className="text-base text-black font-normal pl-2">
                            {val.email}
                          </span>
                        </p>
                        <p className=" ">
                          Возраст:
                          <span className="text-base text-black font-normal pl-2">
                            {val.age}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="pt-3 ">
                      <button
                        className="py-2 px-7 bg-purple-500 hover:bg-purple-400 text-white text-base rounded-md"
                        onClick={() =>
                          accepVoulterHandler(item.vacancyId, val.id)
                        }
                      >
                        Принять
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
