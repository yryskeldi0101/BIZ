import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "../layout/GuestLayout";
import LandingPage from "../containers/LandingPage";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="all_componies" element={<LandingPage />} />
        <Route path="about" element={<LandingPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default GuestRoutes;
