import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import LandingPage from "../containers/LandingPage";
import SignInPage from "../components/form/SignInPage";
import SignUpPage from "../components/form/SignUpPage";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default GuestRoutes;
