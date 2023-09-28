import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AllCompanyVocancyType } from "../../containers/VolunteerPage";
import { getAllVolunteerRequest } from "../../api/volunteer/volunteerService";
import { toastError } from "../toast";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const VacancyCard = () => {
  const [vacancyData, setVacancyData] = useState<AllCompanyVocancyType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showMoreClicked, setShowMoreClicked] = useState<boolean>(false);
  const isAuthorization = useSelector(
    (state: RootState) => state.auth.isAuthorized
  );

  const trueOrFalse = true;

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await getAllVolunteerRequest(trueOrFalse);
        setVacancyData(data);
        setIsLoading(false);
      } catch (error: any) {
        toastError(error.response?.data.message);
      }
    };
    getData();
  }, [trueOrFalse]);

  useEffect(() => {
    setVacancyData(vacancyData);
  }, [vacancyData]);

  const navigate = useNavigate();

  const confrimRezumeHandler = () => {
    navigate("/signin");
  };

  const loadMoreHandler = () => {
    if (isAuthorization) {
      setShowMoreClicked(true);
    } else {
      navigate("/signin");
    }
  };
  const visibleVacancyData = !showMoreClicked
    ? vacancyData.slice(0, 3)
    : vacancyData;

  return (
    <>
      <div className="pt-20">
        <div className="pb-24  mt-14 sm:px-14 px-5   flex flex-wrap  gap-8  sm:m-auto sm:w-full w-[25rem]">
          {!isLoading ? (
            <>
              {visibleVacancyData.map((item: AllCompanyVocancyType) => (
                <div
                  className="rounded-xl w-[24.5rem] bg-[#EEEDEB] hover:bg-[#F2F2F3]  shadow-slate-300   transform translate-x-2 translate-y-2  shadow-lg  bg-gradient-to-br relative"
                  key={item.id}
                >
                  <div className="card-body  inset-0 shadow-lg ">
                    <p className="card-title text-xl">{item.companyName}</p>
                    <span className="text-base">{item.date}</span>
                    <p className="text-lg text-[#363435] font-medium  pb-8">
                      {item.aboutVacancy}
                    </p>
                    <div>
                      <button
                        onClick={confrimRezumeHandler}
                        className=" bg-green-600 hover:bg-green-500  rounded-full py-2.5 px-5 text-base text-white"
                      >
                        Откликнуться
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {vacancyData.length > 3 && !showMoreClicked && (
                <div className="m-auto">
                  <button
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={loadMoreHandler}
                  >
                    Показать еще
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="m-auto">
              <span className="loading loading-spinner text-neutral loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VacancyCard;
