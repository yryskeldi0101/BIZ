import React, { useState } from "react";
import { MainSlider } from "../components/mainSlider/MainSlider";
// import VacancyCard from "../components/vacancyCard/VacancyCard";
import AboutaCompanyCard from "../components/vacancyCard/AboutaCompanyCard";
// import AboutVacancyDetails from "../components/vacancyCard/AboutVacancyDetails";

function LandingPage() {
  const [openCompanyCard, setOpenCompanyCard] = useState(false);

  const openSignUpBlockHandler = () => {
    setOpenCompanyCard(true);
  };

  return (
    <div className=" bg-gradient-to-r from-white-50 to-fuchsia-50 ">
      <MainSlider openSignUpBlockHandler={openSignUpBlockHandler} />
      {/* <VacancyCard /> */}
      <AboutaCompanyCard />
      {/* <AboutVacancyDetails /> */}
    </div>
  );
}

export default LandingPage;
