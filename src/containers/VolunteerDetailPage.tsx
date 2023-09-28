import React, { useEffect, useState } from "react";
import { ReactComponent as ArowLeftIcon } from "../assets/icons/arrowLeft.svg";
import { useNavigate, useParams } from "react-router-dom";
import { getVolunteerByIDRequest } from "../api/volunteer/volunteerService";
import { toastError } from "../components/toast";

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
  const { id } = useParams();
  const [companyInfoData, setCompanyInfoData] = useState<CompanyInfo | null>(
    null
  );

  useEffect(() => {
    const getByIdData = async () => {
      try {
        const { data } = await getVolunteerByIDRequest(Number(id));
        setCompanyInfoData(data);
      } catch (error: any) {
        toastError(error.response?.data.message);
      }
    };
    getByIdData();
  }, [id]);

  useEffect(() => {
    setCompanyInfoData(companyInfoData);
  }, [companyInfoData]);

  if (!companyInfoData) {
    return (
      <div className="text-center pb-20 ">
        <span className="loading loading-spinner text-neutral loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="sm:pl-14 pl-8 pt-10">
        <ArowLeftIcon className="-rotate-180" />
      </button>
      <div className="sm:px-9 px-5  pb-20">
        <div
          key={companyInfoData.id}
          className="bg-white shadow-inner drop-shadow-md  py-9 pl-8"
        >
          <h1 className="text-3xl text-black font-medium ">
            {companyInfoData.companyName}
          </h1>
          <p className="text-base font-medium text-gray-700">12.08.2023</p>
          <div className="">
            <p className=" text-lg font-semibold pt-2 text-blue-600">
              Данные компании:
            </p>
            <p className="text-xl pt-1 font-medium">
              {companyInfoData.location}
            </p>
            <p className="text-lg font-medium">{companyInfoData.email}</p>
          </div>
          <p className="text-lg font-normal text-black pt-3 pb-5">
            {companyInfoData.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default VolunteerDetailPage;
