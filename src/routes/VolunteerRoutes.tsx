import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { VolunteerPage } from "../containers/VolunteerPage";
import VolunteerDetailPage from "../containers/VolunteerDetailPage";
import VolunteerLayout from "../layout/VolunteerLayout";

const VolunteerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/volunteer" />} />
      <Route path="/volunteer" element={<VolunteerLayout />}>
        <Route index element={<VolunteerPage />} />
        <Route path="/volunteer:id" element={<VolunteerDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default VolunteerRoutes;
