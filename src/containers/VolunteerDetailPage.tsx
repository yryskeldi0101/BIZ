import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as ArowLeftIcon } from "../assets/icons/arrowLeft.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getVolunteerByIDRequest } from "../api/volunteer/volunteerService";

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

type CompanyInfo = {
  companyName: string;
  description: string;
  email: string;
  location: string;
  phoneNumber: string;
  id: number;
};

const VolunteerDetailPage = () => {
  window.scrollTo({ top: 0 });
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const [companyInfoData, setCompanyInfoData] = useState<CompanyInfo | null>(
    null
  );

  useEffect(() => {
    const getByIdData = async () => {
      try {
        const { data } = await getVolunteerByIDRequest(Number(id));
        setCompanyInfoData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getByIdData();
  }, [id]);

  useEffect(() => {
    setCompanyInfoData(companyInfoData);
  }, [companyInfoData]);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  if (!companyInfoData) {
    return (
      <div className="text-center pb-20 ">
        <span className="loading loading-spinner text-neutral loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="pl-14 pt-10">
        <ArowLeftIcon className="-rotate-180" />
      </button>
      <div className="px-9  pb-20">
        <div
          key={companyInfoData.id}
          className=" bg-white shadow-inner drop-shadow-md  py-9 pl-8"
        >
          <h1 className="text-3xl text-black font-medium ">
            {companyInfoData.companyName}
          </h1>
          <p className="text-base font-medium text-gray-700">
            12.08.2023
          </p>
          <div className="">
            <p className=" text-lg font-semibold pt-2 text-blue-600">
              Данные компании:
            </p>
            <p className="text-xl pt-1 font-medium">
              {companyInfoData.location}
            </p>
            <p className=" text-lg font-medium">
              {companyInfoData.email}
            </p>
          </div>
          <p className="text-lg font-normal text-black pt-3 pb-5">
            {companyInfoData.description}
          </p>
          <button
            onClick={(e) => handleOpen(e)}
            className=" bg-green-600 hover:bg-green-500 w-80   py-2.5 px-5 text-base text-white"
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
