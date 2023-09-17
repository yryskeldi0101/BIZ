import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import volunteerHelp from "../assets/images/volunteer.png";
import { useNavigate } from "react-router";
import {
  getAllVolunteerRequest,
  putRezumeRequest,
} from "../api/volunteer/volunteerService";
import { toastError } from "../components/toast";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 5,
};
interface AllCompanyVocancyType {
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
  const [open, setOpen] = React.useState(false);
  const [vacancyData, setVacancyData] = useState<AllCompanyVocancyType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const trueOrFalse = true;
  const [selectedVacancyId, setSelectedVacancyId] = useState<number | null>(
    null
  );
  console.log(selectedVacancyId, "vv");

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

  const textChangeHandler = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(event?.target.value);
  };

  const handleOpen = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    vacancyId: number
  ) => {
    e.stopPropagation();
    setSelectedVacancyId(vacancyId);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const confrimRezumeHandler = async () => {
    if (selectedVacancyId !== null) {
      const data: MessageType = {
        message: text,
        id: selectedVacancyId,
      };
      try {
        await putRezumeRequest(selectedVacancyId, data);
      } catch (error) {}
    }
  };

  return (
    <>
      <div className="m-auto px-14 pt-[9.7rem] pb-16">
        <img src={volunteerHelp} alt="volunteerHelp" />
      </div>
      <div>
        <h2 className="px-14 text-4xl tracking-wide text-[#383838] pt-8">
          Вам подойдут эти волонтерства
        </h2>
        <div className="pb-24 mt-14 px-14  flex flex-wrap  gap-8  m-auto w-full">
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
                        onClick={(e) => handleOpen(e, item.id)}
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
      <Modal
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
      </Modal>
    </>
  );
};
