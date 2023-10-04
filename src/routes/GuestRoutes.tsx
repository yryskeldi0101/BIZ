import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import LandingPage from "../containers/LandingPage";
import SignInPage from "../components/form/SignInPage";
import About from "../components/about/About";
import ChangeRolePage from "../components/form/ChangeRolePage";
import SignUpVolunteerPage from "../components/form/SignUpVolunteerPage";
import SignUpPage from "../components/form/SignUpPage";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about_us" element={<About />} />
      </Route>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<ChangeRolePage />} />
      <Route path="/signup-volunteer" element={<SignUpVolunteerPage />} />
      <Route path="/signup-organization" element={<SignUpPage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default GuestRoutes;
