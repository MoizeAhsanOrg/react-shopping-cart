import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { User } from '../types/User';
import Profile from '../components/Profile'; // Adjust the path as necessary

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  console.log(user);
  return (
    <Container>
      <Row>
        <Col>
          <Profile user={user} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
