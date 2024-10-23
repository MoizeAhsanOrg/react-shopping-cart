import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

// Import pages
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import Cart from './pages/Cart';
import SalesChart from './pages/SalesChart';
import UserProfile from './pages/UserProfile';
import Welcome from './pages/Welcome';
import Store from './pages/Store';
import NotAuthorized from './pages/NotAuthorized';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
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
          element={<PrivateRoute component={Inventory} roles={['admin']} user={user} />}
        />
        <Route
          path="/cart"
          element={<PrivateRoute component={Cart} roles={['customer']} user={user} />} />
        <Route
          path="/sales-chart"
          element={<PrivateRoute component={SalesChart} roles={['admin']} user={user} />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={UserProfile}
            roles={['customer', 'admin']} user={user} />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />
        <Route path="/" element={homePageElement} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
