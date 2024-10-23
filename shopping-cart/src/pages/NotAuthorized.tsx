import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const NotAuthorized: React.FC = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h2>Not Authorized</h2>
          <p>You do not have permission to view this page.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotAuthorized;
