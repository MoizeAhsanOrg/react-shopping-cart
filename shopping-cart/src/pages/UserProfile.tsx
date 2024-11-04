import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { User } from '../types/User';
import { ShoppingHistory } from '../types/ShoppingHistory';
import Profile from '../components/Profile'; // Adjust the path as necessary

interface UserProfileProps {
  user: User;
  history: ShoppingHistory[];
}

const UserProfile: React.FC<UserProfileProps> = ({ user, history }) => {
  console.log(user, history);
  return (
    <Container>
      <Row>
        <Col>
          <Profile user={user} history={history} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
