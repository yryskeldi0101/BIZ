import React, { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../store'

interface PrivateRouteProps {
  component: ComponentType;
  roles: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, roles, ...rest }) => {
  const { role } = useSelector((state: RootState) => state.auth)
  if (!role || (roles && !roles.includes(role))) {
    return <Navigate to="/" replace={true} />;
  }
  return <Component {...rest} />;
};

export default PrivateRoute;
