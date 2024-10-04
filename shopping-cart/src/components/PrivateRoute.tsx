import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps extends Omit<typeof Route, 'element'> {
    element: React.ComponentType;
    role: string;
    user: { role: string } | null;
    path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element: Component, role, user, ...rest }) => {
    return (
        <Route
            {...rest}
            element={user && user.role === role ? <Component /> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;