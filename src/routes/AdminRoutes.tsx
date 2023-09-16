import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import PrivateRoute from './PrivateRoute'
import Requests from '../containers/admin/Requests'
import AdminMainPage from '../containers/admin'
import { ROLES } from '../utils/types/types'
import Vacancies from '../containers/admin/Vacancies'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to="/admin" />} />
      <Route path='/admin/' element={<AdminLayout />}>
        <Route index element={<PrivateRoute component={AdminMainPage} roles="ADMIN" />} />
        <Route path='requests' element={<PrivateRoute component={Requests} roles='ADMIN' />} />
        <Route path='vacancies' element={<PrivateRoute component={Vacancies} roles='ADMIN' />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  )
}

export default AdminRoutes