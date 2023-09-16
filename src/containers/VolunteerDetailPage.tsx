import { Box, Modal } from "@mui/material";
import React from "react";
import { ReactComponent as ArowLeftIcon } from "../assets/icons/arrowLeft.svg";
import { useNavigate } from "react-router-dom";

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

const VolunteerDetailPage = () => {
  window.scrollTo({ top: 0 });
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={() => navigate(-1)} className="pl-14 pt-10">
        <ArowLeftIcon className="-rotate-180" />
      </button>
      <div className="px-9  pb-20">
        <div className=" bg-white shadow-inner drop-shadow-md  py-9 pl-8">
          <h1 className="text-3xl text-black font-serif font-medium ">
            ManchoDevs
          </h1>
          <p className="text-base font-medium text-gray-700 font-mono">
            12.08.2023
          </p>
          <div className="">
            <p className="font-sans text-lg font-semibold pt-2 text-blue-600">
              Данные компании:
            </p>
            <p className="font-serif text-xl pt-1 font-medium">
              Кыргызстан, Бишкек
            </p>
            <p className="font-mono text-lg font-medium">hello@gmail.com</p>
          </div>
          <p className="text-lg font-sans font-normal text-black pt-3 pb-5">
            Волонтёры не получают зарплату не потому, что они бесполезны,
            апотому, что они бесценны
          </p>
          <button
            onClick={(e) => handleOpen(e)}
            className="font-serif bg-green-600 hover:bg-green-500 w-80   py-2.5 px-5 text-xl text-white"
          >
            Откликнуться
          </button>
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
      </div>
    </>
  );
};

export default VolunteerDetailPage;
