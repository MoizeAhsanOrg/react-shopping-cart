import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { User } from '../types/User';

interface PrivateRouteProps extends Omit<typeof Route, 'element'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  roles: string[];
  user: User | null;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (
  {
    component: Component,
    roles,
    user,
    ...rest
  }) => {
  return user && roles.includes(user.role) ? (
    <Component {...rest} user={user} />
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
