import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { ShoppingHistory as ShoppingHistoryType } from '../types/ShoppingHistory';
import HistoryItem from './HistoryItem';

interface ShoppingHistoryProps {
  history: ShoppingHistoryType[];
}

const ShoppingHistory: React.FC<ShoppingHistoryProps> = ({ history }) => {
  return (
    <Card className="history-card">
      <Card.Body>
        <Card.Title>Shopping History</Card.Title>
        <ListGroup variant="flush">
          {history.map((historyItem, index) => (
            <HistoryItem key={index} historyItem={historyItem} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ShoppingHistory;
