import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { User } from '../types/User';
import { ShoppingHistory } from '../types/ShoppingHistory';
import './Profile.css';

interface ProfileProps {
  user: User;
  history: ShoppingHistory[];
}

const Profile: React.FC<ProfileProps> = ({ user, history }) => {
  return (
    <Container className="profile-container">
      <Row>
        <Col md={4}>
          <Card className="profile-card">
            <Card.Body>
              <Card.Title>User Profile</Card.Title>
              <Card.Text><strong>Name:</strong> {user.name}</Card.Text>
              <Card.Text><strong>Email:</strong> {user.email}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          {user.role !== 'admin' && (
            <Card className="history-card">
              <Card.Body>
                <Card.Title>Shopping History</Card.Title>
                <ListGroup variant="flush">
                  {history.map((historyItem: ShoppingHistory, index) => (
                    <ListGroup.Item key={index}>
                      <strong>Date:</strong> {historyItem.date}
                      <ul>
                        {historyItem.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
