import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { ShoppingHistory } from '../types/ShoppingHistory';

interface HistoryItemProps {
  historyItem: ShoppingHistory;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ historyItem }) => {
  return (
    <Card className="mb-3">
      <Card.Header>
        <strong>Order ID:</strong> {historyItem.orderId}
      </Card.Header>
      <Card.Body>
        <Card.Title>Total Amount: ${historyItem.totalAmount}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Date: {historyItem.date} | Status: {historyItem.status}
        </Card.Subtitle>
        <ListGroup variant="flush">
          {historyItem.items.map((item) => (
            <ListGroup.Item key={item.id}>
              <strong>{item.name}</strong><br />
              Quantity: {item.quantity}<br />
              Total: ${item.totalAmount}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default HistoryItem;
