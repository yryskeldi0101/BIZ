import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ROLES } from '../utils/types/types';
import AdminRoutes from './AdminRoutes';
import ManagerRoutes from './ManagerRoutes';
import VolunteerRoutes from './VolunteerRoutes';
import GuestRoutes from './GuestRoutes';

const roleRoutes = {
  [ROLES.ADMIN]: AdminRoutes,
  [ROLES.MANAGER]: ManagerRoutes,
  [ROLES.VOLUNTEER]: VolunteerRoutes,
  [ROLES.GUEST]: GuestRoutes
};

const AppRoute = () => {
  const { role, token } = useSelector((state: RootState) => state.auth);
  const SelectedRoute = roleRoutes[role] || GuestRoutes;
  if (!token && role === "GUEST") return <GuestRoutes />;
  return <SelectedRoute />;
};

export default AppRoute;
