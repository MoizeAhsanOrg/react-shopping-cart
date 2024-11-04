import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { User } from '../types/User';
import { ShoppingHistory } from '../types/ShoppingHistory';

interface ProfileProps {
  user: User;
  history: ShoppingHistory[];
}

const Profile: React.FC<ProfileProps> = ({ user, history }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.role !== 'admin' && (
            <>
              <h3>Shopping History</h3>
              <ListGroup>
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
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
