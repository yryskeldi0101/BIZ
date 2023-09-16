import React from 'react'
import { ROLES } from '../utils/types/types'
import AdminRoutes from './AdminRoutes'
import ManagerRoutes from './ManagerRoutes'
import VolunteerRoutes from './VolunteerRoutes'
import GuestRoutes from './GuestRoutes'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const roleControl = {
  [ROLES.ADMIN]: <AdminRoutes />,
  [ROLES.MANAGER]: <ManagerRoutes />,
  [ROLES.VOLUNTEER]: <VolunteerRoutes />,
  [ROLES.GUEST]: <GuestRoutes />
}
const AppRoute = () => {
  const { role, token } = useSelector((state: RootState) => state.auth)
  if (!token) {
    return <GuestRoutes />
  }
  const selectedRole = roleControl[role]
  return selectedRole || null
}

export default AppRoute
