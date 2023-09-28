import React, { useState } from "react";
import { MainSlider } from "../components/mainSlider/MainSlider";
import VacancyCard from "../components/vacancyCard/VacancyCard";

function LandingPage() {
  const [openCompanyCard, setOpenCompanyCard] = useState(false);

  const openByIdCompanyCardHandler = () => {
    setOpenCompanyCard(true);
  };
  const openAllCompaniesCard = () => {
    setOpenCompanyCard(true);
  };
  const openSignUpBlockHandler = () => {
    setOpenCompanyCard(true);
  };

  return (
    <div className=" bg-gradient-to-r from-white-50 to-fuchsia-50">
      <MainSlider openSignUpBlockHandler={openSignUpBlockHandler} />
      {/* <CompanyCards openByIdCompanyCardHandler={openByIdCompanyCardHandler} /> */}
      <VacancyCard />
    </div>
  );
}

export default LandingPage;
