import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import LandingPage from "../containers/LandingPage";
import { AllCompanyCards } from "../components/companyCards/AllCompaniesCards";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index={true} element={<LandingPage />} />
        <Route path="/all_companies" element={<AllCompanyCards />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default GuestRoutes;
