import React, { ComponentType } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: ComponentType;
  roles: string;
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  roles,
  ...rest
}) => {
  const role = "VOLUNTEER";
  if (!role || (roles && !roles.includes(role))) {
    return <Navigate to="/" replace={true} />;
  }
  return <Component {...rest} />;
};

export default PrivateRoute;
