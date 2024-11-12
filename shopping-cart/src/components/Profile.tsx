import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { User } from '../types/User';
import { ShoppingHistory as ShoppingHistoryType } from '../types/ShoppingHistory';
import ShoppingHistory from './ShoppingHistory';
import './Profile.css';

interface ProfileProps {
  user: User;
  history: ShoppingHistoryType[];
  handleLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, history, handleLogout }) => {
  return (
    <Container className="profile-container">
      <Row>
        <Col md={4}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Card.Text><strong>Name:</strong> {user.name}</Card.Text>
              <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
              <Button
                variant="primary"
                onClick={handleLogout}
                className="log-out-button"
              >
                Log Out
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          {user.role !== 'admin' && (
            <ShoppingHistory history={history} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
