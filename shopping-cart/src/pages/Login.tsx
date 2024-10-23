import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import { authenticateUser } from '../services/mocks/authService';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = authenticateUser(username, password);
    if (user) {
      dispatch(login(user));
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin} className="mt-4">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
