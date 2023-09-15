import React, { useState } from "react";
import { Header } from "../components/header/Header";
import { MainSlider } from "../components/mainSlider/MainSlider";
import { CompanyCards } from "../components/companyCards/CompanyCards";
import { Footer } from "../components/footer/Footer";

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
      <Footer />
    </div>
  );
}

export default LandingPage;
