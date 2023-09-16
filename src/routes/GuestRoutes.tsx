import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import LandingPage from "../containers/LandingPage";
import SignInPage from "../components/form/SignInPage";
import SignUpPage from "../components/form/SignUpPage";
import { AllCompanyCards } from "../components/companyCards/AllCompaniesCard";
import About from "../components/aboute/About";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="all_componies" element={<AllCompanyCards />} />
        <Route path="about_us" element={<About />} />
      </Route>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default GuestRoutes;
