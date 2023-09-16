import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { companyVocancy } from "../utils/constants/contants";
import volunteerHelp from "../assets/images/volunteer.png";
import { useNavigate } from "react-router";

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
  aboutVocancy: string;
  date: string;
}

export const VolunteerPage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="m-auto px-14 pb-24">
        <img src={volunteerHelp} alt="volunteerHelp" className="" />
      </div>
      <div>
        <h2 className="px-14 text-4xl tracking-wide text-[#383838] font-mono pt-8">
          Вам подойдут эти волонтерства
        </h2>
        <div className="pb-24 mt-14 px-14  flex flex-col  gap-8  m-auto w-full">
          {companyVocancy.map((item: AllCompanyVocancyType) => (
            <div
              className="rounded-xl bg-[#EEEDEB] hover:bg-[#F2F2F3]  shadow-slate-300 cursor-pointer  transform translate-x-2 translate-y-2  shadow-lg  bg-gradient-to-br relative"
              key={item.id}
              onClick={() => navigate(`/volunteer/${item.id}`)}
            >
              <div className="card-body  inset-0 shadow-lg ">
                <p className="card-title text-xl font-mono ">
                  {item.companyName}
                </p>
                <p className="text-lg text-[#363435] font-medium font-sans">
                  {item.aboutVocancy}
                </p>
                <span className="font-mono text-base pb-8">{item.date}</span>
                <div>
                  <button
                    onClick={(e) => handleOpen(e)}
                    className="font-serif bg-green-600 hover:bg-green-500  rounded-full py-2.5 px-5 text-xl text-white"
                  >
                    Откликнуться
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              placeholder="Напишите о себе"
              className="w-[27rem] h-24 border border-[#948e91] outline-none pl-3 rounded font-sans text-lg font-normal text-[#474546] placeholder:text-sm pt-2 placeholder:text-gray-400 placeholder:font-serif"
            />
          </div>

          <button className="w-[26.875rem] py-1.5 rounded  text-lg bg-blue-700 text-white hover:bg-blue-600">
            Отправить
          </button>
        </Box>
      </Modal>
    </>
  );
};
