import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { User } from '../types/User';

interface PrivateRouteProps extends Omit<typeof Route, 'element'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  roles: string[];
  user: User | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (
  {
    component: Component,
    roles,
    user,
    ...rest
  }) => {
  if (!user) {
    console.log('NAVIGATING TO LOGIN');
    return <Navigate to="/login" />;
  }

  if (!roles.includes(user.role)) {
    console.log('NAVIGATING TO NOT AUTHORIZED');
    return <Navigate to="/not-authorized" />;
  }

  return <Component {...rest} user={user} />;
};

export default PrivateRoute;
