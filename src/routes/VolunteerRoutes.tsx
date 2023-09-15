import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const VolunteerRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate replace to="/volunteer"/>} />
        <Route path='/volunteer' element={<VolunteerRoutes/>}>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default VolunteerRoutes