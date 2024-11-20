import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { User } from '../types/User';
import { ShoppingHistory } from '../types/ShoppingHistory';
import Profile from '../components/Profile'; // Adjust the path as necessary
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

interface UserProfileProps {
  user: User;
  history: ShoppingHistory[];
}

const UserProfile: React.FC<UserProfileProps> = ({ user, history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  console.log(user, history);
  return (
    <Container>
      <Row>
        <Col>
          <Profile user={user} history={history} handleLogout={handleLogout} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
