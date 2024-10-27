import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} Shopping Cart. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
