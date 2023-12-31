import React, { useEffect, useState } from "react";
import volunteerHelp from "../assets/images/volunteer.png";
import { useNavigate } from "react-router";
import {
  getAllVolunteerRequest,
  putRezumeRequest,
} from "../api/volunteer/volunteerService";
import { toastError, toastSuccess } from "../components/toast";

export interface AllCompanyVocancyType {
  id: number;
  companyName?: string;
  aboutVacancy: string;
  date: string;
}

export interface MessageType {
  id: number;
  message: string;
}

export const VolunteerPage: React.FC = () => {
  const [vacancyData, setVacancyData] = useState<AllCompanyVocancyType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const trueOrFalse = true;
  

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getAllVolunteerRequest(trueOrFalse);
        setVacancyData(data);
        setIsLoading(false);
      } catch (error) {
        toastError(
          "Произошла ошибка при загрузке данных. Пожалуйста, попробуйте еще раз позже."
        );
      }
    };
    getData();
  }, [trueOrFalse]);

  useEffect(() => {
    setVacancyData(vacancyData);
  }, [vacancyData]);

  // const textChangeHandler = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setText(event?.target.value);
  // };

  // const handleOpen = (
  //   e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   vacancyId: number
  // ) => {
  //   e.stopPropagation();
  //   setSelectedVacancyId(vacancyId);
  //   setOpen(true);
  // };
  // const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const confrimRezumeHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();

    try {
      const { data } = await putRezumeRequest(id);
      toastSuccess(data.message);
    } catch (error: any) {
      toastError(error.response?.data.message);
    }
  };

  return (
    <>
      <div className="m-auto sm:px-14 px-5 pt-16 sm:pt-[9.7rem] pb-16">
        <img src={volunteerHelp} alt="volunteerHelp" />
      </div>
      <div>
        <h2 className="sm:px-14 px-5 text-4xl tracking-wide text-green-500 sm:pt-8 pt-4">
          Вам подойдут эти волонтерства
        </h2>
        <div className="pb-24  mt-14 sm:px-14 px-5   flex flex-wrap  gap-8  sm:m-auto sm:w-full w-[25rem]">
          {!isLoading ? (
            <>
              {vacancyData.map((item: AllCompanyVocancyType) => (
                <div
                  className="rounded-xl w-[37rem] bg-[#EEEDEB] hover:bg-[#F2F2F3]  shadow-slate-300 cursor-pointer  transform translate-x-2 translate-y-2  shadow-lg  bg-gradient-to-br relative"
                  key={item.id}
                  onClick={() => navigate(`/volunteer/${item.id}`)}
                >
                  <div className="card-body  inset-0 shadow-lg ">
                    <p className="card-title text-xl">{item.companyName}</p>
                    <span className="text-base">{item.date}</span>
                    <p className="text-lg text-[#363435] font-medium  pb-8">
                      {item.aboutVacancy}
                    </p>
                    <div>
                      <button
                        onClick={(e) => confrimRezumeHandler(e, item.id)}
                        className=" bg-green-600 hover:bg-green-500  rounded-full py-2.5 px-5 text-base text-white"
                      >
                        Откликнуться
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="m-auto">
              <span className="loading loading-spinner text-neutral loading-lg"></span>
            </div>
          )}
        </div>
      </div>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col pb-7">
            <label htmlFor="" className="text-sm text-[#474546]">
              О себе
            </label>
            <textarea
              value={text}
              onChange={textChangeHandler}
              placeholder="Напишите о себе"
              className="w-[27rem] h-24 border border-[#948e91] outline-none pl-3 rounded font-sans text-lg font-normal text-[#474546] placeholder:text-sm pt-2 placeholder:text-gray-400 placeholder:font-serif"
            />
          </div>

          <button
            onClick={confrimRezumeHandler}
            className="w-[26.875rem] py-1.5 rounded  text-lg bg-blue-700 text-white hover:bg-blue-600"
          >
            Отправить
          </button>
        </Box>
      </Modal> */}
    </>
  );
};
