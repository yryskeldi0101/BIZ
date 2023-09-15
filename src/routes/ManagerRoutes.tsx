import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ManagerLayout from '../layout/ManagerLayout'

const ManagerRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate replace to="/manager" />} />
            <Route path='/manager' element={<ManagerLayout />}>
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

export default ManagerRoutes