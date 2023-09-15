import React, { useState } from "react";
import { MainSlider } from "../components/mainSlider/MainSlider";
import { CompanyCards } from "../components/companyCards/CompanyCards";

function LandingPage() {
  const [openCompanyCard, setOpenCompanyCard] = useState(false);

  const openByIdCompanyCardHandler = () => {
    setOpenCompanyCard(true);
  };
  const openSignUpBlockHandler = () => {
    setOpenCompanyCard(true);
  };
  const openMessageHandler = () => {
    setOpenCompanyCard(true);
  };

  return (
    <div className=" bg-gradient-to-r from-white-50 to-fuchsia-50">
      <MainSlider openSignUpBlockHandler={openSignUpBlockHandler} />
      <CompanyCards openByIdCompanyCardHandler={openByIdCompanyCardHandler} />
    </div>
  );
}

export default LandingPage;
