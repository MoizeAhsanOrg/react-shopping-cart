import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { logout } from '../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const cartItemCount = useSelector((state: RootState) => state.cart.items.length);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Shopping Cart</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {user && (
          <Nav className="ml-auto">
            {user.role === 'customer' && (
              <Nav.Link as={Link} to="/cart">
                Cart ({cartItemCount})
              </Nav.Link>
            )}
            {user.role === 'admin' && (
              <>
                <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                <Nav.Link as={Link} to="/sales-chart">Sales Chart</Nav.Link>
              </>
            )}
            <NavDropdown title={user.username} id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
