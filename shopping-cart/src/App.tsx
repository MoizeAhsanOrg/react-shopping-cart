import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

// Import pages
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import Cart from './pages/Cart';
import SalesChart from './pages/salesChart';
import UserProfile from './pages/UserProfile';
import Welcome from './pages/Welcome';
import Store from './pages/Store';
import Header from './components/Header';
import { User } from './types/User';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  let homePageElement;
  if (user) {
    if (user.role === 'admin') {
      homePageElement = <Welcome />;
    } else {
      homePageElement = <Store />;
    }
  } else {
    homePageElement = <Navigate to="/login" />;
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/inventory"
          element={<PrivateRoute component={Inventory} role="admin" user={user} />}
        />
        <Route 
          path="/cart"
          element={<PrivateRoute component={Cart} role="customer" user={user} />} />
        <Route 
          path="/sales-chart"
          element={<PrivateRoute component={SalesChart} role="admin" user={user} />} />
        <Route 
          path="/profile"
          element={<PrivateRoute component={UserProfile} role="customer" user={user} />} />
        <Route path="/" element={homePageElement} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

interface PrivateRouteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  role: 'admin' | 'customer';
  user: User | null;
}

const PrivateRoute: React.FC<PrivateRouteProps> = (
  { 
    component: Component,
    role,
    user,
    ...rest
  }) => {
  return user && user.role === role ? (
    <Component {...rest} user={user} />
  ) : (
    <Navigate to="/login" />
  );
};

export default App;
