import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { User } from '../types/User';

interface UserProfileProps {
    user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  console.log(user);
  return (
    <Container>
      <Row>
        <Col>
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <h3>Shopping History</h3>
          <ListGroup>
            {user.history.map((item, index) => (
              <ListGroup.Item key={index}>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
