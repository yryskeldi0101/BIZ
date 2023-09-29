import React, { useState } from "react";
import { CompanyCards } from "../components/companyCards/CompanyCards";
import { AddVocancy } from "../components/addVocancy/AddVocancy";

function ManagerPage() {
  const [openCompanyCard, setOpenCompanyCard] = useState(false);

  const openByIdCompanyCardHandler = () => {
    setOpenCompanyCard(true);
  };
  // const openAllCompaniesCard = () => {
  //   setOpenCompanyCard(true);
  // };
  // const openSignUpBlockHandler = () => {
  //   setOpenCompanyCard(true);
  // };

  return (
    <div className="bg-gradient-to-r from-white-50 to-fuchsia-300">
      <AddVocancy />
      <CompanyCards openByIdCompanyCardHandler={openByIdCompanyCardHandler} />
    </div>
  );
}

export default ManagerPage;
